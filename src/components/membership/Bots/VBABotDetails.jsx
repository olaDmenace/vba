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
                    <PlayCircleIcon className='h-6' />
                    <Button text={'Edit Bot'} />
                </div>
            </div>
            <div className='grid md:grid-cols-2'>
                <div className='grid p-5 gap-3'>
                    <span className='flex gap-2'>Exchange: <p>BINANCE</p></span>
                    <span className='flex gap-2'>Currency: <p>{props.symbol}</p></span>
                    <span>Stop Loss: <button className='text-primary hover:text-primary-light active:text-primary-dark'>Trading View</button></span>
                    <span>Bot ID: <button className='text-primary hover:text-primary-light active:text-primary-dark'>VBA Algorithms</button></span>
                    <span>Configuration: <button className='text-primary hover:text-primary-light active:text-primary-dark'>VBA Algorithms</button></span>
                </div>
                <div className='grid p-5 gap-3'>
                    <p>Stop Loss</p>
                    <p>Take Profit</p>
                    <span>Stop Loss: <button className='text-primary hover:text-primary-light active:text-primary-dark'>Trading View</button></span>
                    <span>Bot ID: <button className='text-primary hover:text-primary-light active:text-primary-dark'>VBA Algorithms</button></span>
                    <span>Configuration: <button className='text-primary hover:text-primary-light active:text-primary-dark'>VBA Algorithms</button></span>
                </div>
            </div>
            <div className='p-5 space-y-5 md:space-y-0 md:flex items-center gap-5'>
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