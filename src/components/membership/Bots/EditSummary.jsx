import React from 'react'

const EditSummary = () => {
    return (
        <div className='border border-white/70 rounded-lg p-5 grid grid-cols-2 gap-2'>
            <div className='flex gap-2'>
                <p>Action:</p>
                <p>Invest</p>
            </div>
            <div className='flex gap-2'>
                <p>Currency:</p>
                <p>USDT</p>
            </div>
            <div className='flex gap-2'>
                <p>Exchange:</p>
                <p> Binance</p>
            </div>
            <div className='flex gap-2'>
                <p>Leverage:</p>
                <p>BTC, ETH, ADA, Link, AVAX</p>
            </div>
            <div className='flex gap-2'>
                <p>Entry Mode:</p>
                <p>Long</p>
            </div>
        </div>
    )
}

export default EditSummary