import React from "react";
import { readBlog } from "@/lib/actions/blog";
import Link from "next/link";
import Image from "next/image";
import { Genres } from "../../components/Genres"
import { About } from "@/components/About";

export default async function Home() {
  
  const { data: blogs } = await readBlog();


  return (

    <div>
      <h1 className="text-5xl max-w-[700px] mx-auto text-center border-b border-green-600 mt-10">Tell Me a Story Blog</h1>
      <h2 className="text-3xl max-w-[700px] mx-auto text-center mt-6 mb-10">
        At <span className="text-[#8DECB4]">Tell Me a Story</span>, we will provide you with free blogs and <span className="text-[#8DECB4]">premium blogs</span> 
        <br/>Which will give you access to the <span className="border-b border-green-600">best content</span>. 
      </h2>

      <div className="mx-auto grid max-w-[900px] min-h-[100px] place-content-center mt-6 bg-slate-900 p-4 mb-20 rounded-md hover:cursor-pointer">
        <DrawOutlineButton>Sign In To Access Premium Blogs</DrawOutlineButton>
      </div>

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
      
      <h2 className="text-2xl font-bold text-center mt-20">Blog Categories</h2>
      <Genres />

      <About />

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
