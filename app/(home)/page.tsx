import React from "react";
import { readBlog } from "@/lib/actions/blog";
import Link from "next/link";
import Image from "next/image";
import { Genres } from "../../components/Genres"
import { About } from "@/components/About";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import LoginFormHero from "@/components/LoginFormHero";


export default async function Home() {
  
  const { data: blogs } = await readBlog();

  return (

    <div>
      <h1 className="text-5xl max-w-[700px] mx-auto text-center border-b border-green-600 mt-10">Tell Me a Story Blog</h1>
      <h2 className="text-3xl max-w-[700px] mx-auto text-center mt-6 mb-10">
        At <span className="text-[#8DECB4]">Tell Me a Story</span>, we will provide you with free blogs and <span className="text-[#8DECB4]">premium blogs</span> 
        <br/>Which will give you access to the <span className="border-b border-green-600">best content</span>. 
      </h2>

      <LoginFormHero />

      <div className="flex justify-center">
        <IoIosArrowDropdownCircle className="h-10 w-10 animate-animation-ping"/>
      </div>

      <h3 className="text-sm text-center font-semibold text-gray-400 pt-4 lg:pt-14">Our Whole Blog Catelog</h3>
      <h2 className="text-center text-3xl font-semibold mb-4">The Blogs</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 p-5 xl:p-0">
        {blogs?.map((blog, index) => {
            return (
              <Link href={"/blog/" + blog.id} key={index} className="w-full border rounded-md bg-graident-dark p-5 hover:ring-2 ring-green-500 transition-all 
              cursor-pointer space-y-5 first:lg:col-span-2 first:md:col-span-3">
                <div className="relative w-full h-72 md:h-64 xl:h-96">
                  <Image priority src={blog.image_url} alt="cover" fill className="object-cover object-center" sizes="(max-width:768px): 100vw, (max-width:1200px): 50vw, 33vw"/>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-400">{new Date(blog.created_at).toDateString()}</p>
                  <h1 className="text-xl font-bold">{blog.title}</h1>
                </div>
              </Link>
            ) 
        })}
      </div>
      
      <h3 className="text-sm text-center font-semibold text-gray-400 mt-20">Discory Our Varity of Selections</h3>
      <h2 className="text-3xl font-bold text-center">Blog Categories</h2>
      <Genres />

      <About />

    </div>

  );

};
