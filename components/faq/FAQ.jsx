import React from "react";
import Accordion from "./Accordion";

const FAQComponent = () => {

    return (
        <div className="mx-auto p-4 mt-6 bg-gray-200 rounded-lg text-slate-500 border-b-2 font-bold border-green-500 max-w-[800px] shadow-lg shadow-green-700">
            <Accordion title="How do I login?" answer="I like to use iOS products" />

            <Accordion title="Can I create my own blogs?" answer="I like to use Tailwind" />

            <Accordion title="How to Pay?" answer="I am using Supabase!" />

            <Accordion title="Stripe Policy?" answer="I am using Supabase!" />

            <Accordion title="Cancel Subscription?" answer="I am using Supabase!" />
        </div>
    );

};

export default FAQComponent;