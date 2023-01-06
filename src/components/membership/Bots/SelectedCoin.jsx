import { TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Vector from '../../../images/Vector.png'

const SelectedCoin = (props) => {
    return (
        <div className='grid gap-8 p-5 bg-back-back rounded-lg text-white/70'>
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <img className='h-10 rounded-full' src={props.img} alt="" />
                    <div className=''>
                        <h4>{props.symbol}</h4>
                        <p>{props.name}</p>
                    </div>
                </div>
                <TrashIcon onClick={props.execute} className='h-6 cursor-pointer' />
            </div>
            {/* <div className='flex justify-between items-baseline'>
                <div className='flex gap-3'>
                    <button className='py-3 px-4 rounded bg-[#76CEF11A]'>Mineable</button>
                    <button className='py-3 px-4 rounded bg-[#76CEF11A]'>+6</button>
                </div>
                <p className='text-lg font-medium'>#Rank 7</p>
            </div> */}
        </div>
    )
}

export default SelectedCoin