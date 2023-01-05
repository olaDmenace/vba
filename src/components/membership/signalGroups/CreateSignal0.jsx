import { CameraIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useState } from 'react'
import EditBotHeader from '../Bots/EditBotHeader'

const CreateSignal0 = () => {
    const [file, setFile] = useState([])
    const [upload, setUpload] = useState(false)

    const fileUpload = (e) => {
        console.log(e.target.files)
        setFile(URL.createObjectURL(e.target.files[0]))
        setUpload(true)
    }
    return (
        <div className='text-white/70 grid gap-10'>
            <EditBotHeader number={'1'} title={'Group Description'} desc={'Enter your service description, details about your signals and trading strategy.'} />
            <div className='grid gap-5'>
                {!upload && <label className='cursor-pointer w-fit' for="group_id">
                    <CameraIcon className='h-32 border border-dashed rounded-full p-10' />
                    <input type="file" name="group_url" onChange={fileUpload} id="group_id" className='hidden' />
                </label>}
                {upload && <img className='object-cover w-1/3' onClick={() => setUpload(false)} src={file} alt="" />}
                <label className='space-y-3' htmlFor="">
                    Group Name <br />
                    <input className='h-10 px-2 bg-[#2C2C2C] rounded-lg w-2/3' type="text" name="group_name" id="" />
                </label>
                <label className='space-y-3' htmlFor="">
                    Group Discription <br />
                    <textarea className='px-2 bg-[#2c2c2c] rounded-lg w-2/3' name="group_desc" id="" cols="30" rows="10"></textarea>
                </label>
            </div>
        </div>
    )
}

export default CreateSignal0