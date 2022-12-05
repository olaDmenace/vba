import React from 'react'

const Statistics = () => {
    return (
        <div className='divide-y bg-back-back rounded-lg h-full'>
            <div className='p-5'>
                <h5 className='font-semibold'>Statistics</h5>
            </div>
            <div className='p-5 grid gap-8'>
                <div className='space-y-3'>
                    <h6 className='text-lg font-semibold'>Trading Volume</h6>
                    <h1 className='text-4xl'>0.00%</h1>
                </div>
                <div className='space-y-3'>
                    <h6 className='text-lg font-semibold'>Allocated Capital</h6>
                    <h1 className='text-4xl'>0.00%</h1>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='font-semibold text-lg'>Total Allocation</p>
                    <div className='border border-white/70 p-5 rounded-lg'>
                        <p>Trades in BTC: 0.000000</p>
                        <p>Trades in USDT: 0.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics