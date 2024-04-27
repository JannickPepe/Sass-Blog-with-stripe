import React from 'react'
import FAQComponent from '../../components/faq/FAQ'
import { FaQuestionCircle } from "react-icons/fa";


export default function FAQ() {

    return (
        <div>
            <h1 className='group text-3xl font-semibold text-center mt-20 flex justify-center items-center gap-2'>
                Our FAQ Selection 
                <FaQuestionCircle className='text-green-600 group-hover:rotate-180 transition delay-200 duration-200' />
            </h1>
            <FAQComponent />

            <div className="mt-20 grid gap-8 items-start justify-center">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8DECB4] to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                        <span className="flex items-center space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#8DECB4] -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        <span className="pr-6 text-gray-100">TMS Release 2024.11</span>
                        </span>
                        <span className="pl-6 text-purple-500 group-hover:text-gray-100 transition duration-200">See whats new &rarr;</span>
                    </button>
                </div>
            </div>
        
        </div>
    );

};
