import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/authSlice'
import CoinCard from './CoinCard'
import Currency from './Currency'
import EditBotHeader from './EditBotHeader'
import SelectedCoin from './SelectedCoin'

const EditBot1 = ({ formData, setFormData }) => {

    const [coinPair, setCoinPair] = useState([])
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/exchange/FetchTradePairs')
            .then(res => {
                return res.json()
            }).then(data => {
                if (data.status === 'fail' && data?.detail?.toLowerCase() === 'token expired') {
                    dispatch(logout())
                    return
                }
                console.log(data)
                setCoinPair(data.detail)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const [items, setItems] = useState('')
    const [count, setCount] = useState(0)
    const handleSelect = (arg) => {
        // if (items.some(item => item.symbol === arg.symbol)) return;
        setItems(arg)
        setFormData((prev) => ({ ...prev, symbol: arg.symbol }))
        setCount(1)
    }

    const handleDelete = () => {
        setItems('')
        setFormData()
        setCount(count - 1)
    }


    return (
        <div>
            <div className='text-white/70 space-y-10 lg:space-y-0 lg:flex lg:justify-between border-b pb-5'>
                <EditBotHeader number={'2'} title={'Compose Your Portfolio'} desc={'Define the set of coins that your bot should monitor.'} />
                {/* <Currency /> */}
            </div>
            <div className='py-5 grid lg:grid-cols-5 gap-5'>
                <div className='grid gap-5 lg:col-span-3'>
                    <select className='bg-transparent text-white/70 text-lg font-medium block h-8 w-16' name="" id="">
                        <option value="">All</option>
                    </select>
                    <div className='relative'>
                        <MagnifyingGlassIcon className='text-white/70 h-6 absolute top-3 left-2' />
                        <input className='bg-back-back w-full h-12 rounded-lg px-2 text-white/70 pl-12' onChange={(e) => setSearch(e.target.value)} placeholder='Filter Items' type="search" name="" id="" />
                    </div>
                    <div className='grid lg:grid-cols-2 gap-5'>
                        {coinPair?.filter((coinPair) => { return search.toLowerCase() === '' ? coinPair : coinPair.symbol.toLowerCase().includes(search) }).map(coinPair => <CoinCard click={() => handleSelect(coinPair)} key={coinPair.symbol} logo={coinPair.coin_logo} symbol={coinPair.symbol} name={coinPair.name} />)}
                    </div>
                </div>
                <div className='border rounded-lg p-5 text-white/70 space-y-5 lg:col-span-2'>
                    <h4>Select Your Portfolio</h4>
                    <p>You have selected {count} Coins. You have reached the limit.</p>
                    {items && <SelectedCoin key={items.symbol} symbol={items.symbol} name={items.name} img={items.coin_logo} execute={() => handleDelete()} value={formData.symbol} />}
                </div>
            </div>
        </div>
    )
}

export default EditBot1