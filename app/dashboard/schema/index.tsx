import * as z from "zod";

// Form Schema
export const BlogFormSchema = z.object({
    title: z.string().min(2, {
        message: "titel must be at least 2 characters.",
    }),
    image_url: z.string().url({message: "Invalid URL"}),
    content: z.string().min(2, {
        message: "content must be at least 2 characters.",
    }),
    is_published: z.boolean(),
    is_premium: z.boolean(),
    // for localhost url onto image input
}).refine((data) => {
    const image_url = data.image_url
    try {
        const url = new URL(image_url)

        return url.hostname === "i.ibb.co"
    } catch {
        return false
    }
}, {message: "Currently we are supported only with unsplash and ibb with images!", path: ["image_url"]});


export type BlogFormSchemaType = z.infer<typeof BlogFormSchema>;