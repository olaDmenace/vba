import React from 'react'
import EditBotHeader from './EditBotHeader'
import EditSummary from './EditSummary'

const EditBot3 = () => {
    return (
        <div className='grid gap-5 text-white/70'>
            <div className='text-white/70 space-y-10 lg:space-y-0 border-b pb-5'>
                <EditBotHeader number={'3'} title={'Launch'} desc={'Review your data, define the recurrency and your bot will be ready to be launched'} />
            </div>
            <div className='p-5 bg-back-back rounded-lg space-y-5'>
                <h6 className='text-lg font-semibold'>Review your strategy</h6>
                <EditSummary />
            </div>
            <div className='p-5 bg-back-back rounded-lg space-y-5'>
                <h6 className='text-lg font-semibold'>Fire Times</h6>
                <div className='flex gap-5'>
                    <label className='flex gap-2' htmlFor="">
                        <input type="radio" name="fire_times" id="" />
                        Limited
                    </label>
                    <label className='flex gap-2' htmlFor="">
                        <input type="radio" name="fire_times" id="" />
                        Unlimited
                    </label>
                </div>
            </div>
            <div className='p-5 bg-back-back rounded-lg space-y-5'>
                <h6 className='text-lg font-semibold'>Rename Your Bot</h6>
                <input className='border rounded-lg w-2/3 h-10 px-2 bg-transparent active:outline' type="text" name="" id="" />
            </div>
        </div>
    )
}

export default EditBot3