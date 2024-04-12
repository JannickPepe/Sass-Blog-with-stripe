import React from 'react';
import { Button } from '@/components/ui/button';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { EditIcon, } from 'lucide-react';
import { readBlog, updateBlogById } from '@/lib/actions/blog';
import DeleteAlert from './DeleteAlert';
import SwitchForm from './SwitchForm';
import { BlogFormSchemaType } from '../schema';
import Link from 'next/link';


export default async function BlogTable() {

    // Setup your const so it can have the data from blogs and show the after the await
    const {data: blogs} = await readBlog();

    return (
        <div className='overflow-x-auto'>
            <div className='border dark:bg-graident-dark rounded-md w-[900px] md:w-full'>

                <div className='grid grid-cols-5 p-5 text-gray-500 border-b'>
                    <h1 className='col-span-2'>Title</h1>
                    <h1 className=''>Premium</h1>
                    <h1 className=''>Public</h1>
                </div>

                {blogs?.map((blog, index) => {

                    const updatePremium = updateBlogById.bind(null, blog.id, {is_premium:!blog.is_premium} as BlogFormSchemaType)
                    const updatePublish = updateBlogById.bind(null, blog.id, {is_published:!blog.is_published} as BlogFormSchemaType)

                    return  (
                        <div className='grid grid-cols-5 p-5' key={index}>
                            <h1 className='col-span-2'>{blog.title}</h1>
                            <SwitchForm checked={blog.is_premium} name='premium' onToggle={updatePremium} />
                            <SwitchForm checked={blog.is_published} name='publish' onToggle={updatePublish} />
                            {/* place id here since we use it in const Actions and have id onto blog id for selected one */}
                            <Actions id={blog.id} /> 
                        </div> 
                    )
                })}

            </div>
        </div>
    );

};

// OUR CTA CRUD - place the id as paramter since we use it in our DeleteAlert ect
const Actions = ({id} : {id:string;}) => {

    return (
        <div className='flex items-center gap-3 flex-wrap'>
            <Button variant="outline" className='flex items-center gap-2'><EyeOpenIcon /> View</Button>

            <DeleteAlert blogId={id} />
            
            <Link href={"/dashboard/blog/edit/" + id}>
                <Button variant="outline" className='flex items-center gap-2'><EditIcon /> Edit</Button>
            </Link>
        </div>
    );

};