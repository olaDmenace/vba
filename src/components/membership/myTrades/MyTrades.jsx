import React from 'react'
import ActivePositions from './ActivePositions'

const MyTrades = () => {
    return (
        <div className='text-white/70 grid gap-5'>
            <div className='grid gap-5 bg-back-back p-5 rounded-lg'>
                <div className='flex gap-5'>
                    <button>My Trades</button>
                    <button>Manage Bots</button>
                </div>
                <div className='grid gap-3'>
                    <p>Your performance in the last 30 days</p>
                    <p>Total Investment: <span className='font-semibold'>72.59 USD</span></p>
                    <p>Capital Allocation: <span className='font-semibold'>72.59 USD</span></p>
                    <p>Return: <span className='font-semibold'>72.59 USD</span></p>
                </div>
            </div>
            <div className='bg-back-back p-5 rounded-lg grid gap-5'>
                <div className='flex flex-col gap-5 md:flex-row justify-between'>
                    <p className='font-semibold'>Active Positions</p>
                    <p className='text-primary hover:text-primary-light active:text-primary-dark'>View all Active Positions</p>
                </div>
                <div className='overflow-x-scroll'>
                    <ActivePositions />
                </div>
            </div>
            <div className='bg-back-back p-5 rounded-lg grid gap-5'>
                <p className='font-semibold'>Closed Positions</p>
                <p className='bg-[#32393C33] h-12 grid items-center rounded-lg px-2'>
                    There are no recently closed positions
                </p>
            </div>
        </div>
    )
}

export default MyTrades