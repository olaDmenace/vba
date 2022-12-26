import React from 'react'
import { Link } from 'react-router-dom'
import TradeManager from './TradeManager'

const VBAProTraders = () => {
    return (
        <div className='rounded border divide-y py-5 min-h-96 basis-1/2'>
            <div className='px-5 flex justify-between gap-5 text-white/70'>
                <div className='pb-5'>
                    <p className='font-medium'>VBA Pro Traders</p>
                    <p>Private Trade Manager</p>
                </div>
                <Link to={'/dashboard/TradeManagers'} className='text-primary hover:text-primary-light active:text-primary-dark cursor-pointer'>View All</Link>
            </div>
            <TradeManager />
        </div>
    )
}

export default VBAProTraders