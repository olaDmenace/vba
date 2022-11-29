import React from 'react'
import Vector from '../../../images/Vector.png'

const Currency = () => {
    return (
        <div className='flex gap-5'>
            <div className='space-y-3'>
                <p>Currency</p>
                <button className='py-3 px-4 rounded bg-[#76CEF11A]'>Tether (USDT)</button>
            </div>
            <div className='flex gap-5 p-4 bg-[#76CEF10D] rounded'>
                <div className='flex clear-left gap-3 items-start'>
                    <img className='h-6' src={Vector} alt="" />
                    <div>
                        <h4 className='font-medium text-lg'>Binance</h4>
                        <p>Connect Your Wallet</p>
                    </div>
                </div>
                <p className='text-primary hover:text-primary-light active:text-primary-dark'>Change</p>
            </div>
        </div>
    )
}

export default Currency