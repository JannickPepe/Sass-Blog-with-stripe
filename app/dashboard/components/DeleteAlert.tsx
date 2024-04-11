"use client";

import React, { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { TrashIcon } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteBlogById } from '@/lib/actions/blog';
import { toast } from '@/components/ui/use-toast';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from '@/lib/utils';



export default function DeleteAlert({blogId} : {blogId:string;}) {

    const [isPending, startTransition] = useTransition();

    // create onSubmit for the form continue BTN
    const onSubmit = async(e: any) => {

        e.preventDefault();

        // we will use our Result const from our deleteBlogById in our Actions -> blog.ts
        startTransition(async() => {
            const result = await deleteBlogById(blogId);
            const {error} = JSON.parse(result);

            if(error?.message) {

                toast({
                    title: "Failed to delete the blog!!",
                    description: (
                        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                            <code className="text-white">{error.message}</code>
                        </pre>
                    ),
                });
            } else {
                toast({
                    title: "Succesfully deleted"
                });
            }
        })
    
    };

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline" className='flex items-center gap-2'><TrashIcon /> Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <form onSubmit={onSubmit}>
                            <Button className='flex items-center gap-2'>
                                <AiOutlineLoading3Quarters className={cn("animate-spin", {hidden: !isPending,})} />
                                Continue
                            </Button>
                        </form>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );

};
