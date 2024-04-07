
import { Button } from '@/components/ui/button';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { EditIcon, TrashIcon } from 'lucide-react';
import React from 'react';

export default function BlogTable() {

    return (
        <div className='overflow-x-auto'>
            <div className='border dark:bg-graident-dark rounded-md w-[900px] md:w-full'>

                <div className='grid grid-cols-5 p-5 text-gray-500 border-b'>
                    <h1 className='col-span-2'>Title</h1>
                    <h1 className=''>Premium</h1>
                    <h1 className=''>Public</h1>
                </div>

                <div className='grid grid-cols-5 p-5'>
                    <h1 className='col-span-2'>Blog Title</h1>
                    <h1 className=''>Blog Title</h1>
                    <h1 className=''>Blog Title</h1>
                    <Actions />
                </div>

            </div>
        </div>
    );

};

const Actions = () => {

    return (
        <div className='flex items-center gap-3 flex-wrap'>
            <Button variant="outline" className='flex items-center gap-2'><EyeOpenIcon /> View</Button>
            <Button variant="outline" className='flex items-center gap-2'><TrashIcon /> Delete</Button>
            <Button variant="outline" className='flex items-center gap-2'><EditIcon /> Edit</Button>
        </div>
    );

};