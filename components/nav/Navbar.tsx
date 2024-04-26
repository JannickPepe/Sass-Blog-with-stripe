"use client";

import React from 'react';
import { ModeToggle } from '../LnDToggle';
import Link from 'next/link';
import LoginForm from './LoginForm';
import { useUser } from '@/lib/store/user';
import Profile from './Profile';
import { ShiftingDropDown } from './MenuItems';


export default function Navbar() {

    const user = useUser((state) => state.user)

    return (
        <nav className='flex justify-between'>
            <div className='group'>
                <Link href='/' className='text-base md:text-2xl font-semibold md:font-bold'>
                    TMS
                </Link>
                <div className='h-1 w-0 group-hover:w-full transition-all bg-green-500 '></div>
            </div>
            <div className='flex items-center justify-center'>
                <ShiftingDropDown />
            </div>
            <div className='flex items-center justify-center gap-4'>
                {user?.id ? <Profile /> : <LoginForm />}
                <ModeToggle />
            </div>
        </nav>
    );

};
