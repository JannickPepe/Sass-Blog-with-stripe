"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EyeOpenIcon, Pencil1Icon, StarIcon } from "@radix-ui/react-icons";
import { Switch } from "@/components/ui/switch";
import { RocketIcon } from "lucide-react";
import { BsSave } from "react-icons/bs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import MarkdownPreview from "@/components/markdown/MarkdownPreview";
import { BlogFormSchema, BlogFormSchemaType } from "../schema";
import { IBlogDetail } from "@/lib/types";


export default function BlogForm({onHandleSubmit, blog} : {onHandleSubmit: (data: BlogFormSchemaType) => void; blog?: IBlogDetail;
}) {

    // UI transition when saving a Blog to SupaBase
    const [isPending, startTransition] = useTransition();

    // our state for edit / preview teneray option in render
    const [isPreview, setPreview] = useState(false);

    // our form
    const form = useForm<z.infer<typeof BlogFormSchema>>({
        mode: "all",
        resolver: zodResolver(BlogFormSchema),
        defaultValues: {
        title: blog?.title || "",
        content: blog?.blog_content?.content || "",
        image_url: blog?.image_url || "",
        is_premium: blog?.is_premium || false,
        is_published: blog?.is_published || true,
        },
    });

    // our handleSubmit method - onSubmit
    function onSubmit(data: z.infer<typeof BlogFormSchema>) {
        startTransition(() => {

            onHandleSubmit(data);
        })
        
    };


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full border rounded-md space-y-6 pb-6">

                <div className="p-5 gap-5 flex items-center flex-wrap justify-between border-b">

                    <div className="flex gap-5 items-center flex-wrap">
                        {/* our setPreview will not be able to show preview if image url is invalid */}
                        <span role="button" tabIndex={0} onClick={() => setPreview(!isPreview && !form.getFieldState("image_url").invalid)} 
                            className="flex items-center gap-1 border bg-zinc-700 p-2 rounded-md hover:ring-2 hover:ring-zinc-400 transition-all">
                            {isPreview ? (
                                <>
                                    <Pencil1Icon />
                                    Edit
                                </> 
                                ) : ( 
                                    <> 
                                        <EyeOpenIcon />
                                        Preview
                                    </> 
                                )
                            }
                        </span>
                        <FormField
                        control={form.control}
                        name="is_premium"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="flex items-center gap-1 border bg-zinc-700 p-2 rounded-md">
                                        <StarIcon />
                                        <span>Premium</span>
                                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                                    </div>
                                </FormControl>
                            </FormItem>
                        )}
                        />

                        <FormField
                        control={form.control}
                        name="is_published"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="flex items-center gap-1 border bg-zinc-700 p-2 rounded-md">
                                        <RocketIcon />
                                        <span>Publish</span>
                                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                                    </div>
                                </FormControl>
                            </FormItem>
                        )}
                        />
                    </div>
                    
                    <Button className={cn("flex items-center gap-1", {"animate-spin" : isPending,})} disabled={!form.formState.isValid}>
                        <BsSave /> 
                        Save
                    </Button>
                </div>

                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <div className={cn("w-full p-2 flex break-words gap-2", isPreview ? "divide-x-0" : "divide-x")}>
                                <Input placeholder="title" {...field} className={cn("border-none text-lg font-medium leading-relaxed", isPreview ? "w-0 p-0" : "w-full lg:w-1/2")} />
                                <div className={cn("lg:px-10", isPreview ? "mx-auto w-full lg:w-4/5" : "w-1/2 lg:block hidden")}>
                                    <h1 className="text-3xl font-medium">{form.getValues().title}</h1>
                                </div>
                            </div>
                        </FormControl>
                        {form.getFieldState("title").invalid && form.getValues().title && <FormMessage />}
                        <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                    control={form.control}
                    name="image_url"
                    render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <div className={cn("w-full p-2 flex break-words gap-2", isPreview ? "divide-x-0" : "divide-x")}>
                                <Input placeholder="image url" {...field} className={cn("border-none text-lg font-medium leading-relaxed", isPreview ? "w-0 p-0" : "w-full lg:w-1/2")} />

                                <div className={cn("lg:px-10", isPreview ? "mx-auto w-full lg:w-4/5" : "w-1/2 lg:block hidden")}>
                                    {!isPreview ? (
                                        <>
                                            <p>Click on preivew to see image</p>
                                        </>
                                    ) : (
                                        <div className="relative h-80 mt-5 border rounded-md">
                                            <Image src={form.getValues().image_url} alt="preview" fill className="object-cover object-center rounded-md" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </FormControl>

                        {form.getFieldState("image_url").invalid && form.getValues().image_url && (
                            <div className="p-2">
                                <FormMessage />
                            </div>
                        )}
                    </FormItem>
                )}
                />

                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <div className={cn("w-full p-2 flex break-words gap-2", isPreview ? "divide-x-0" : "divide-x h-70vh")}>
                                <Textarea placeholder="content" {...field} className={cn("border-none text-lg font-medium leading-relaxed resize-none h-full", isPreview ? "w-0 p-0" : "w-full lg:w-1/2")} />

                                <div className={cn("overflow-y-auto", isPreview ? "mx-auto w-full lg:w-4/5" : "w-1/2 lg:block hidden")}>
                                    <MarkdownPreview content= {form.getValues().content} />
                                </div>
                            </div>
                        </FormControl>

                        {form.getFieldState("content").invalid && form.getValues().content && <FormMessage />}
                    </FormItem>
                )}
                />
                
            </form>
        </Form>
    );

};
