import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import CoinCard from './CoinCard'
import Currency from './Currency'
import EditBotHeader from './EditBotHeader'
import SelectedCoin from './SelectedCoin'

const EditBot1 = () => {
    return (
        <div>
            <div className='text-white/70 space-y-10 lg:space-y-0 lg:flex lg:justify-between border-b pb-5'>
                <EditBotHeader number={'1'} title={'Compose Your Portfolio'} desc={'Define the set of coins that your bot should monitor.'} />
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
        </div>
    )
}

export default EditBot1