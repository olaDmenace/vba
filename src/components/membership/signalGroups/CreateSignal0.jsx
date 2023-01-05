import { CameraIcon } from '@heroicons/react/24/outline'
import React from 'react'
import EditBotHeader from '../Bots/EditBotHeader'

const CreateSignal0 = () => {
    return (
        <div className='text-white/70 grid gap-10'>
            <EditBotHeader number={'1'} title={'Group Description'} desc={'Enter your service description, details about your signals and trading strategy.'} />
            <div className='grid gap-5'>
                <label className='cursor-pointer w-fit' for="upload">
                    <CameraIcon className='h-32 border border-dashed rounded-full p-10' />
                    <input type="file" name="" id="upload" className='hidden' />
                </label>
                <label className='space-y-3' htmlFor="">
                    Group Name <br />
                    <input className='h-10 px-2 bg-[#2C2C2C] rounded-lg w-2/3' type="text" name="" id="" />
                </label>
                <label className='space-y-3' htmlFor="">
                    Group Discription <br />
                    <textarea className='px-2 bg-[#2c2c2c] rounded-lg w-2/3' name="" id="" cols="30" rows="10"></textarea>
                </label>
            </div>
        </div>
    )
}

export default CreateSignal0