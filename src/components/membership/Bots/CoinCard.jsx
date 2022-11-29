import { PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Vector from '../../../images/Vector.png'

const CoinCard = () => {
    return (
        <div className='p-5 bg-back-back rounded-lg text-white/70 flex justify-between'>
            <div className='flex gap-3'>
                <img className='h-6' src={Vector} alt="" />
                <div className=''>
                    <h4>BTC</h4>
                    <p>Bitcoin</p>
                </div>
            </div>
            <PlusCircleIcon className='h-6' />
        </div>
    )
}

export default CoinCard