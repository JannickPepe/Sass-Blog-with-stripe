import React from 'react';


export default function loading() {

    return (
        <div className='animate-pulse space-y-5'>
            <div className='flex items-center justify-between'>
                <div className='h-10 w-56 bg-graident-dark rounded-md'></div>
                <div className='h-10 w-48 bg-graident-dark rounded-md'></div>
            </div>
            <div className='border h-96 bg-graident-dark rounded-md'></div>
        </div>
    );

};
