import { readBlogContentById } from '@/lib/actions/blog';
import React from 'react';
import EditForm from './component/EditForm';
import { IBlogDetail } from "@/lib/types";

export default async function Page({ params }: { params: { id: string } }) {

    const { data: blog } = await readBlogContentById(params.id);

    return (
        <div>
            <EditForm blog={blog as IBlogDetail} />
        </div>
    );

};
