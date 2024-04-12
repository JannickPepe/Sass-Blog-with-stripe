"use client";

import React from 'react';
import BlogForm from '@/app/dashboard/components/BlogForm';
import { IBlogDetail } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { BlogFormSchemaType } from '@/app/dashboard/schema';
import { updateBlogDetailById } from '@/lib/actions/blog';


export default function EditForm({blog} : {blog:IBlogDetail}) {

    const router = useRouter();
    const handleEdit = async(data: BlogFormSchemaType) => {

        const result = await updateBlogDetailById(blog?.id!, data);
        const {error} = JSON.parse(result);

        if(error?.message) {

            toast({
                title: "Failed to edit the blog!!",
                description: (
                    <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                        <code className="text-white">{error.message}</code>
                    </pre>
                ),
            });
        } else {
            toast({
                title: "Succesfully Updated!!" + data.title,
            });
            router.push("/dashboard")
        }

    };
    

    return (
        <div>
            <BlogForm onHandleSubmit={handleEdit} blog={blog}/>
        </div>
    );

};
