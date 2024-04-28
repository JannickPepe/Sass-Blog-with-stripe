"use client";

import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import animationData from '../assets/Animationemail.json';
import { useRef } from 'react';


export default function Contact() {

    const emailRef = useRef<LottieRefCurrentProps>(null);

    return (
        <div>
            <div className='text-3xl text-center mt-20'>Contact page</div>

            <div className='md:grid grid-cols-3 grid-rows-1'>

                <div className="col-span-2 flex items-center justify-center p-12">
                    <div className="mx-auto w-full max-w-[550px]">
                        <form action="https://formbold.com/s/FORM_ID" method="POST">
                            <div className="mb-5">
                                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#8DECB4]" >
                                    Full Name
                                </label>
                                <input type="text" name="name" id="name" placeholder="Full Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="mb-3 block text-base font-medium text-[#8DECB4]" >
                                    Email Address
                                </label>
                                <input type="email" name="email" id="email" placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#8DECB4]" >
                                    Subject
                                </label>
                                <input type="text" name="subject" id="subject" placeholder="Enter your subject"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="message" className="mb-3 block text-base font-medium text-[#8DECB4]" >
                                    Message
                                </label>
                                <textarea name="message" id="message" placeholder="Type your message"
                                className="w-3/4 resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                            </div>

                            <div>
                                <button className="hover:shadow-form rounded-md bg-green-600 py-3 px-8 text-base font-semibold text-white outline-none" >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='col-span-1 max-w-[500px] max-h-[500px] mx-auto '>
                    {/* 
                        emailRef.current?.setDirection(-1) 
                        emailRef.current?.play()
                    */}
                    <Lottie onComplete={() => {
                        emailRef.current?.goToAndPlay(10, true)
                    }} 
                    lottieRef={emailRef}
                    loop={false}
                    animationData={animationData} 
                    />
                </div>

            </div>
                
        </div>
    );

};
