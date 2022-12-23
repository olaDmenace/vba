import { ArrowPathRoundedSquareIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import { UsersIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Button from '../../Button'

const VBABotDetails = (props) => {
    return (
        <div className='border rounded-lg text-white/70'>
            <div className='p-5 border-b gap-5 flex justify-between'>
                <div>
                    <h6 className='font-semibold'>{props.name}</h6>
                    <p>{props.type}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <UsersIcon className='h-6' />
                    <PlayCircleIcon className='h-6' />
                    <Button text={'Edit Bot'} />
                </div>
            </div>
            <div className='grid p-5 gap-3'>
                <span className='flex gap-2'>Exchange: <p>BINANCE</p></span>
                <span className='flex gap-2'>Currency: <p>USDT</p></span>
                <span className='flex gap-2'>Coins: <p className='text-primary'>AVAX, BNB, BTC, ETH, LINK</p></span>
                <span className='flex gap-2'>Last Analysis: <p>November 3, 2022 1:01AM UTC</p></span>
                <span className='flex gap-2'>Strategy: <p className='text-primary'>VBA Algorithms</p></span>
            </div>
            <div className='p-5 space-y-5 md:space-y-0 md:flex gap-5'>
                <Button text={'Active'} />
                <div className='flex gap-3'>
                    <ArrowPathRoundedSquareIcon className='h-6' />
                    <p>Firing Indefinitely</p>
                </div>
            </div>
        </div>
    )
}

export default VBABotDetails