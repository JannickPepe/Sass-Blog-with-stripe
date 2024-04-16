"use client";

import React, { useTransition } from 'react';
import { Button } from '../ui/button';
import { BackpackIcon } from '@radix-ui/react-icons';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { cn } from '@/lib/utils';
import { manageBillingPortal } from '@/lib/actions/stripe';
import { useUser } from '@/lib/store/user';


export default function ManageBilling() {

    const [isPending, startTransition] = useTransition();
    const user = useUser((state) => state.user);

	const onSubmit = (e: any) => {
		e.preventDefault();
		startTransition(async () => {
			const data = JSON.parse(await manageBillingPortal(user?.stripe_customer_id!));
			window.location.href = data.url;
		});
	};

    return (
        <form onSubmit={onSubmit}>
            <Button variant="ghost" className="w-full flex justify-between items-center" >
                <span className="flex items-center gap-2">
                    <AiOutlineLoading3Quarters className={cn(" animate-spin", { hidden: !isPending })}
                    />
                    Billing
                </span>
                <BackpackIcon />
            </Button>
        </form>
    );

};
