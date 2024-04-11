'use client';

import React from 'react';
import BlogForm from '../../components/BlogForm';
import { BlogFormSchemaType } from '../../schema';
import { toast } from "@/components/ui/use-toast";
import { createBlog } from '@/lib/actions/blog';
import { useRouter } from 'next/navigation';


export default function Page() {

    // Our route when we have pressed save button
    const router = useRouter();

    const handleCreate = async(data: BlogFormSchemaType) => {

        const result = await createBlog(data);
        const {error} = JSON.parse(result);

        if(error?.message) {

            toast({
                title: "Failed to create a blog!!",
                description: (
                    <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                        <code className="text-white">{error.message}</code>
                    </pre>
                ),
            });
        } else {
            toast({
                title: "Succesfully created" + data.title,
            });
            router.push("/dashboard")
        }

    };


    return (
        <>
            <BlogForm onHandleSubmit={handleCreate} />
        </>
    );

};
