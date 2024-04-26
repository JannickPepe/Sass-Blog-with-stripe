"use client";

import React from 'react';
import { createBrowserClient } from '@supabase/ssr'
import { usePathname } from 'next/navigation';
import { MdOutlineLogin } from "react-icons/md";

export default function LoginFormHero() {

    const pathname = usePathname();

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const handleLogin = () => {
        supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: location.origin + "/auth/callback?next=" + pathname,
            },
        });
    };

    return (
        <div className="mx-auto text-center grid max-w-[900px] min-h-[100px] place-content-center mt-6 bg-slate-900 p-4 mb-16 rounded-md hover:cursor-pointer">
            <DrawOutlineButton>
                <button className="flex items-center gap-2" onClick={handleLogin}>
                    Sign In To Access Premium Blogs <MdOutlineLogin className="text-green-600" size={26}/>
                </button>
            </DrawOutlineButton>
        </div>
    );

};


const DrawOutlineButton = ({ children, ...rest }: {children:any}) => {
    return (
        <div
        {...rest}
        className="text-2xl group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
        >
            <span>{children}</span>
    
            {/* TOP */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />
    
            {/* RIGHT */}
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />
    
            {/* BOTTOM */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />
    
            {/* LEFT */}
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
        </div>
    );
};
