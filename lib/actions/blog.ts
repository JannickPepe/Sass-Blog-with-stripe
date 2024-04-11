'use server';

import { BlogFormSchemaType } from "@/app/dashboard/schema";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "../types/supabase";
import { revalidatePath } from "next/cache";

const cookieStore = cookies();

const DASHBOARD = "/dashboard";

const supabase = createServerClient<Database>(

    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
        cookies: {
            get(name: string) {
                return cookieStore.get(name)?.value;
            },
        },
    }

);

// CREATE BLOG
export async function createBlog(data: BlogFormSchemaType) {

    // our Foreignkey hook up 
    const {["content"]:excludedKey, ...blog} = data;

    const resultBlog = await supabase.from("blog").insert(blog).select("id").single();

    if(resultBlog.error) {
        return JSON.stringify(resultBlog)
    } else {
        const result = await supabase.from("blog_content").insert({blog_id:resultBlog.data.id!, content:data.content})

        return JSON.stringify(result);
    };

};

// READ BLOG
export async function readBlog() {
    return supabase
        .from("blog")
        .select("*")
        .order("created_at", {ascending: true})
};

// DELETE BLOG
export async function deleteBlogById(blogId:string) {
    const result = await supabase
        .from("blog")
        .delete()
        .eq("id", blogId);
    revalidatePath(DASHBOARD);
    return JSON.stringify(result);
};

// TOGGLE UPDATE
export async function updateBlogById(blogId:string, data:BlogFormSchemaType,) {
    const result = await supabase
        .from("blog")
        .update(data)
        .eq("id", blogId);
    revalidatePath(DASHBOARD);
    return JSON.stringify(result);
};