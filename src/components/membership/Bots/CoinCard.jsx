import { PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
// import Vector from '../../../images/Vector.png'

const CoinCard = (props) => {
    return (
        <div className='p-5 bg-back-back rounded-lg text-white/70 flex justify-between'>
            <div className='flex gap-3'>
                <img className='h-10 rounded-full' src={props.logo} alt="" />
                <div className=''>
                    <h4>{props.symbol}</h4>
                    <p>{props.name}</p>
                </div>
            </div>
            <PlusCircleIcon onClick={props.click} className='h-6' />
        </div>
    )
}

export default CoinCard