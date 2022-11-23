import React from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { InformationCircleIcon } from '@heroicons/react/24/solid'


const ConnectExchange = () => {
    return (
        <div className='bg-[#32393C] pt-8 pb-10 block min-w-96 min-h-min divide-y divide-white/20'>
            <div className='flex justify-between px-8 pb-8'>
                <p className='text-white/70'>Connect Exchange</p>
                <XCircleIcon className='text-white/60 h-6' />
            </div>
            <div className='grid pl-8 pt-8'>
                <div className='border border-[#00B6FF] w-10/12 bg-[#76CEF10D]'>
                    <InformationCircleIcon className='h-6 text-primary' />
                    <div>
                        <p>Connect With Binance</p>
                        <span>Difficult getting the API keys? <p className='text-primary hover:text-primary-light active:text-primary-dark'>See this tutorial</p></span>
                        <span>You can also create a new account <p>here</p></span>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ConnectExchange