"use client";

import React, { ChangeEvent, useTransition } from "react";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { useUser } from "@/lib/store/user";
import { cn } from "@/lib/utils";
import { loadStripe } from "@stripe/stripe-js";
import { checkout } from "@/lib/actions/stripe";
import { usePathname } from "next/navigation";
import LoginForm from "../nav/LoginForm";
import { Button } from "../ui/button";


export default function Checkout() {

    const pathname = usePathname();

	const [isPending, startTransition] = useTransition();

	const user = useUser((state) => state.user);

	const handleCheckOut = (e: any) => {
		e.preventDefault();
		startTransition(async () => {
			const data = JSON.parse(
				await checkout(user?.user_metadata?.email!, location.origin + pathname)
			);
			const stripe = await loadStripe(
				process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
			);
			await stripe?.redirectToCheckout({ sessionId: data.id });
		});
    
	};

    if(!user?.id) {
        return (
            <div className='h-96 w-full flex justify-center items-center gap-2'>
                <LoginForm /> To Read Blog
            </div>
        )
    }


    return (
        <form onSubmit={handleCheckOut} className={cn("flex items-center w-full justify-center h-96 ", {"animate-pulse": isPending })} >
            <Button variant='ghost' className="flex flex-col ring-2 ring-green-500 p-10 rounded-md gap-5" type="submit" >
                <span className="uppercase font-bold text-2xl text-green-500 flex items-center gap-2">
                    <LightningBoltIcon className={cn("animate-bounce w-5 h-5", !isPending ? "animate-bounce" : "animate-spin" )} />
                    Upgrade to pro
                </span>
                <span className="text-sm text-gray-500">
                    Unlock all blog contents
                </span>
            </Button>
        </form>
    );

};
