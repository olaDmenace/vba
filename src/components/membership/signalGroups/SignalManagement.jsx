import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'
import SignalManagementTable from './SignalManagementTable'

const SignalManagement = () => {
    return (
        <div className='text-white/70 grid gap-5'>
            <div className='flex gap-3 items-center'>
                <ChevronLeftIcon className='h-4' />
                <h6 className="font-bold text-2xl">Signal Management</h6>
            </div>
            <SignalManagementTable />
            <div className='grid gap-3'>
                <h6 className='font-semibold' >Active Positions</h6>
                <div className='flex gap-5'>
                    <h6 className='border-b border-primary'>Signal</h6>
                    <h6>Members</h6>
                </div>
            </div>
            <div className='grid gap-10 bg-back-back p-5 rounded-lg'>
                <div className='flex gap-5'>
                    <button className='py-3 px-4 rounded bg-[#76CEF11A] text-white/70'>Price Target</button>
                    <button>Send Call</button>
                </div>
                <div className='grid gap-10 relative px-12'>
                    <div className='absolute h-10 w-10 rounded-full bg-primary'></div>
                    <div className='grid gap-3'>
                        <h6 className='font-semibold'>Recommended stop Loss</h6>
                        <div className='flex items-center gap-2'>
                            <p>0.03554</p>
                            <hr className='rotate-90 w-4' />
                            <p>-22.1%</p>
                        </div>
                    </div>
                    <div className='absolute h-10 w-10 rounded-full bg-[#16D240] top-1/2'></div>
                    <div className='grid gap-5'>
                        <div>
                            <h6 className='font-semibold'>Entry Mode</h6>
                            <p>Market entry in range</p>
                        </div>
                        <label className='space-y-2' htmlFor="">
                            Entry Min <br />
                            <input className='bg-[#76CEF11A] h-10 rounded text-right px-2' placeholder='0.023456' type="text" name="" id="" />
                        </label>
                        <label className='space-y-2' htmlFor="">
                            Entry Max <br />
                            <input className='bg-[#76CEF11A] h-10 rounded text-right px-2' placeholder='0.023456' type="text" name="" id="" />
                            <br />Average entry price is 0.03
                        </label>
                    </div>
                    <div className='grid gap-3'>
                        <h6 className='font-semibold'>Target 1</h6>
                        <div className='flex items-center gap-2'>
                            <p>0.03554</p>
                            <hr className='rotate-90 w-4' />
                            <p>39.1%</p>
                        </div>
                    </div>
                    <div className='absolute h-10 w-10 rounded-full bg-[#F6B305] bottom-0'></div>
                </div>
            </div>
        </div>
    )
}

export default SignalManagement