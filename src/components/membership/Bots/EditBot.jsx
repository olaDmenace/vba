import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Button from '../../Button'
import CoinCard from './CoinCard'
import Currency from './Currency'
import SelectedCoin from './SelectedCoin'

const EditBot = () => {
    return (
        <div>
            <div className='text-white/70 space-y-10 lg:space-y-0 lg:flex lg:justify-between border-b pb-5'>
                <div className='flex items-center gap-3'>
                    <p className='rounded-full bg-primary h-10 w-10 text-center text-3xl'>1</p>
                    <div className='space-y-2'>
                        <h3 className='font-medium text-lg'>Compose Your Portfolio</h3>
                        <p>Define the set of coins that your bot should monitor.</p>
                    </div>
                </div>
                <Currency />
            </div>
            <div className='py-5 grid lg:grid-cols-5 gap-5'>
                <div className='grid gap-5 lg:col-span-3'>
                    <select className='bg-transparent text-white/70 text-lg font-medium block h-8 w-16' name="" id="">
                        <option value="">All</option>
                    </select>
                    <div className='relative'>
                        <MagnifyingGlassIcon className='text-white/70 h-6 absolute top-3 left-2' />
                        <input className='bg-back-back w-full h-12 rounded-lg px-2 text-white/70 pl-12' placeholder='Filter Items' type="search" name="" id="" />
                    </div>
                    <div className='grid lg:grid-cols-2 gap-5'>
                        <CoinCard />
                        <CoinCard />
                        <CoinCard />
                        <CoinCard />
                    </div>
                </div>
                <div className='border rounded-lg p-5 text-white/70 grid gap-5 lg:col-span-2'>
                    <h4>Select Your Portfolio</h4>
                    <p>You have selected 5 Coins. You have reached the limit.</p>
                    <SelectedCoin />
                </div>
            </div>
            <div className='flex gap-5'>
                <button className='py-3 px-4 rounded bg-back-back text-white/70'>Back</button>
                <Button text={'Next'} />
            </div>
        </div>
    )
}

export default EditBot