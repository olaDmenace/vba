import React from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import Button from '../../Button'


const ConnectExchange = ({ openModal }) => {

    // Controls the selection of the dropdown
    const [exchange, setExchange] = useState(false)
    // Collects the value of the drop down
    const [drop, setDrop] = useState('Binance')

    // const showKeys = () => {
    //     setExchange(true)
    // }


    return (
        <div>
            <div className='bg-[#32393C] pt-8 pb-10 w-full divide-y divide-white/20 relative rounded'>
                <div className='flex justify-between px-8 pb-8'>
                    <p className='text-white/70 text-lg font-semibold'>Connect Exchange</p>
                    <XCircleIcon onClick={() => openModal()} className='text-white/60 h-6 cursor-pointer' />
                </div>
                <div className='grid px-8 pt-8 gap-5'>
                    <div className='border border-[#00B6FF] bg-[#76CEF10D] flex gap-2 p-4'>
                        <InformationCircleIcon className='h-6 text-primary' />
                        <div>
                            <p>Connect With Binance</p>
                            <span>Difficult getting the API keys? <p className='text-primary hover:text-primary-light active:text-primary-dark'>See this tutorial</p></span>
                            <span>You can also create a new account <p className='text-primary hover:text-primary-light active:text-primary-dark'>here</p></span>
                        </div>
                    </div>
                    <div className='grid gap-3'>
                        <label className='text-[#FFFFFFCC]' htmlFor="">
                            Preferred Exchange
                            <select onChange={e => setDrop(e.target.value)} value={drop} className='w-full h-10 bg-[#32393C] border rounded px-2' name="" id="">
                                <option>Binance</option>
                                <option>Bybit</option>
                            </select>
                        </label>
                        {!exchange && <button className='bg-[#F9B520] rounded px-3 py-2 w-2/3'>Conect With {drop}</button>}
                    </div>
                    {exchange && <div className='text-white/70 grid gap-3'>
                        <label htmlFor="">
                            API Key
                            <input type="text" name="" id="" placeholder='Enter the API key' className='w-full h-10 bg-transparent border rounded px-2 text-white/70' />
                        </label>
                        <label htmlFor="">
                            Secret Key
                            <input type="text" name="" id="" placeholder='Enter the Secret key' className='w-full h-10 bg-transparent border rounded px-2 text-white/70' />
                        </label>
                        <Button text={'Connect'} />
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ConnectExchange