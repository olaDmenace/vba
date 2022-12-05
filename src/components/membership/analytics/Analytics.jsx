import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Performance from './Performance'
import Statistics from './Statistics'

const Analytics = () => {
    return (
        <div className='text-white/70 space-y-5'>
            <div className='grid gap-5 md:grid-flow-col lg:grid-cols-6'>
                <div className='relative lg:col-span-4'>
                    <MagnifyingGlassIcon className='text-white/70 h-6 absolute top-3 left-2' />
                    <input className='bg-back-back w-full h-12 rounded-lg px-2 text-white/70 pl-12' type="search" name="" id="" />
                </div>
                <div className='flex gap-5 lg:col-span-2'>
                    <button className='py-3 w-full px-4 rounded bg-back-back text-white/70'>Last 10 Days</button>
                    <button className='rounded h-12 px-5 hover:bg-[#66BBDC] text-white bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>Search</button>
                </div>
            </div>
            <div className='grid gap-5 lg:grid-flow-col'>
                <Statistics />
                <Performance />
            </div>
        </div>
    )
}

export default Analytics