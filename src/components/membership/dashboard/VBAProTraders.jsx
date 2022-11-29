import React from 'react'
import TradeManager from './TradeManager'

const VBAProTraders = () => {
    return (
        <div className='rounded border divide-y py-5 h-96'>
            <div className='px-5 flex justify-between gap-5 text-white/70'>
                <div className='pb-5'>
                    <p className='font-medium'>VBA Pro Traders</p>
                    <p>Private Trade Manager</p>
                </div>
                <p className='text-primary hover:text-primary-light active:text-primary-dark cursor-pointer'>View All</p>
            </div>
            <TradeManager />
            <TradeManager />
            <TradeManager />
            <TradeManager />
        </div>
    )
}

export default VBAProTraders