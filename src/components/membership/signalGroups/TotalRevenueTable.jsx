import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import SingleRevenue from './SingleRevenue'

const TotalRevenueTable = () => {
    return (
        <div className='border rounded-lg divide-y py-3'>
            <div className='pb-3 px-5 space-y-3'>
                <p>Total Revenue Generated</p>
                <div className='relative lg:col-span-4'>
                    <MagnifyingGlassIcon className='text-white/70 h-6 absolute top-3 left-2' />
                    <input className='bg-back-back w-full h-12 rounded-lg px-2 text-white/70 pl-12' placeholder='Search' type="search" name="" id="" />
                </div>
            </div>
            <SingleRevenue />
            <SingleRevenue />
            <SingleRevenue />
            <SingleRevenue />
        </div>
    )
}

export default TotalRevenueTable