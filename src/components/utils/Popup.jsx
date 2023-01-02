import { XCircleIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Popup = () => {
    return (
        <div className='fixed h-screen w-full top-0 left-0'>
            <div className='h-screen w-full grid absolute top-0 left-0 bg-black/50'>
                <div className='bg-[#32393C] space-y-20 w-2/3 relative place-self-center rounded-lg p-5 text-white/70'>
                    <div className='flex justify-between items-center'>
                        <p className='text-2xl'>Successful</p>
                        <XCircleIcon className='h-6 cursor-pointer' />
                    </div>
                    <div className='space-y-10 pb-10'>
                        <CheckIcon className='bg-green-600 h-10 rounded place-self-center mx-auto' />
                        <p className='text-center w-2/3 mx-auto'>You have sent a connection request to Fortune Crypto Signals</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup