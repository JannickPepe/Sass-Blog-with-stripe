import { createSupabaseAdmin } from "@/lib/supabase";
import { headers } from "next/headers";
import { buffer } from "node:stream/consumers";
import Stripe from "stripe";

// from env
const stripe = new Stripe(process.env.STRIPE_SK_KEY!);
// from your endpoint in stripe developer webhook
const endpointSecret = process.env.ENDPOINT_SECRET!;


export async function POST(request: any) {

    const rawBody = await buffer(request.body);

    let event;

    try {
        const sig = headers().get('stripe-signature');

        event = stripe.webhooks.constructEvent(rawBody, sig!, endpointSecret);

    } catch (err: any) {
        return Response.json({"error" : "Webhook error" + err?.message})

    }

    // Handle the event
    switch (event.type) {
        case 'customer.updated':

            const customer = event.data.object;
            const subscription = await stripe.subscriptions.list({
                customer:customer.id,
            });
            
            if(subscription.data.length) {
                const sub = subscription.data[0];
                // call to supabase to update user table
                const { error } = await onSuccessSubscription(sub.status === "active", sub.id, customer.id, customer.email!);

                if(error?.message) {
                    return Response.json({error: "unable to do subscription!!" + error.message});
                }
            }
        break;

        case 'customer.subscription.deleted':

            const deleteSub = event.data.object;
			const {error} = await onCancelSubscription(false, deleteSub.id);

            if(error?.message) {
                return Response.json({error: "fail to cancel subscription!!" + error.message});
            }


        break;

    default:

        console.log(`Unhandled event type ${event.type}`);
    }

    return Response.json({});

};

//
const onSuccessSubscription = async (subscription_status: boolean, stripe_subscription_id: string, stripe_customer_id: string, email: string, ) => {

    const supabaseAdmin = await createSupabaseAdmin();

    return await supabaseAdmin
        .from("users")
        .update({
            subscription_status,
            stripe_subscription_id,
            stripe_customer_id,
    }).eq("email", email);
};

//
const onCancelSubscription = async (status: boolean, sub_id: string) => {

	const supabaseAdmin = await createSupabaseAdmin();

	return await supabaseAdmin
		.from("users")
		.update({
            subscription_status: status,
			stripe_subscription_id: null,
			stripe_customer_id: null,
		})
		.eq("stripe_subscription_id", sub_id)
		.select("id")
		.single();


};