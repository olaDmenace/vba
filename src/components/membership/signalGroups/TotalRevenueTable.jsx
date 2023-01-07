// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const TotalRevenueTable = (props) => {
    return (
        <div className='border rounded-lg border-white/70 p-5'>
            {/* <div className='pb-3 px-5 space-y-3'>
                <p>Total Revenue Generated</p>
                <div className='relative lg:col-span-4'>
                    <MagnifyingGlassIcon className='text-white/70 h-6 absolute top-3 left-2' />
                    <input className='bg-back-back w-full h-12 rounded-lg px-2 text-white/70 pl-12' placeholder='Search' type="search" name="" id="" />
                </div>
            </div> */}
            <div className='flex justify-between'>
                <div>
                    <div className='flex gap-3'>
                        {/* <div className='rounded-full bg-back-back h-6 w-6'></div> */}
                        {props.show && <img className='rounded-full h-6 w-6' src={props?.img} alt="" />}
                        <p>{props.name}</p>
                    </div>
                    <p>{props.visibility}</p>
                </div>
                <button className='text-primary hover:text-primary-light active:text-primary-dark'>View Signal Group</button>
            </div>
            <div className='grid grid-flow-row gap-5 content-between'>
                <div>
                    <p>Minimum Allocation</p>
                    {props.show && <h5 className='text-2xl'>{props?.min}</h5>}
                </div>
                <div>
                    <p>Maximum Allocation</p>
                    {props.show && < h5 className='text-2xl'>{props?.max}</h5>}
                </div>
                <div className='flex gap-3'>
                    <p>Subscription</p>
                    <button className='text-primary hover:text-primary-light active:text-primary-dark'>{props?.pfee}</button>
                </div>
                <div>
                    <p>Total Revenue Generated</p>
                    <div className='flex justify-between items-center'>
                        <p>This Month</p>
                        <h5 className='text-2xl'>100 USDT</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalRevenueTable