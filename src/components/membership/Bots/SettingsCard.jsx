import { ChevronRightIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import React from 'react'

const SettingsCard = (props) => {
    return (
        <div className='rounded-lg bg-back-back p-5 grid gap-10 lg:basis-1/3'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-5 items-center'>
                    <h6>{props.Title}</h6>
                    <div className='bg-[#76CEF11A] h-9 w-16 rounded-full flex items-center justify-evenly'>
                        <div className='h-4 w-4 bg-primary rounded-full'></div>
                        <h4>On</h4>
                    </div>
                </div>
                <Cog6ToothIcon className='h-8' />
            </div>
            <div className='flex justify-between items-center'>
                <p className='w-2/3'>{props.Desc}</p>
                <ChevronRightIcon className='h-6' />
            </div>
        </div>
    )
}

export default SettingsCard