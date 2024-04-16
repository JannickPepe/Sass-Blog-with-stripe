"use client";

import { useUser } from '@/lib/store/user';
import { Database } from '@/lib/types/supabase';
import { createBrowserClient } from '@supabase/ssr';
import React, { useEffect } from 'react';


export default function Sessionprovider() {

    const setUser = useUser((state:any) => state.setUser);

    const supabase = createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const readUserSession = async () => {
        const { data } = await supabase.auth.getSession();
        const { data: userInfo } = await supabase
            .from("users")
            .select("*")
            .eq("id", data.session?.user.id!)
            .single();
        setUser(userInfo);
    };

    useEffect(() => {
        readUserSession();

    // eslint-disable-next-line
    }, []);

    return (
        <>
        
        </>
    );

};
