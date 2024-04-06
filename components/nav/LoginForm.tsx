"use client";

import React from 'react';
import { Button } from '../ui/button';
import { SiGithub } from 'react-icons/si';
import { createBrowserClient } from '@supabase/ssr'
import { usePathname } from 'next/navigation';



export default function LoginForm() {

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
        <div>
            <Button variant='outline' onClick={handleLogin}>
                    <SiGithub className='flex items-center mr-2' size={20} />
                    Login
            </Button>
        </div>
    );

};
