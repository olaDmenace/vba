import React from 'react'
import EditBotHeader from './EditBotHeader'
import EditSummary from './EditSummary'

const EditBot3 = () => {
    return (
        <div className='grid gap-5 text-white/70'>
            <div className='text-white/70 space-y-10 lg:space-y-0 border-b pb-5'>
                <EditBotHeader number={'4'} title={'Launch'} desc={'Review your data, define the recurrency and your bot will be ready to be launched'} />
            </div>
            <div className='p-5 bg-back-back rounded-lg space-y-5'>
                <h6 className='text-lg font-semibold'>Review your strategy</h6>
                <div className='border border-white/70 rounded-lg p-5 grid grid-cols-2 gap-2'>
                    <div className='flex gap-2'>
                        <p>Action:</p>
                        <p>Invest</p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Currency:</p>
                        <p>USDT</p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Exchange:</p>
                        <p> Binance</p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Leverage:</p>
                        <p>BTC, ETH, ADA, Link, AVAX</p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Entry Mode:</p>
                        <p>Long</p>
                    </div>
                </div>
            </div>
            <div className='p-5 bg-back-back grid gap-5 rounded-lg h-full'>
                <div className='space-y-2'>
                    <h6 className='font-medium'>Margin Mode</h6>
                    {/* <p>Defines the maximum exposure of your allocated capital in active trades. When the limit is hit, new positions will not be opened for this provider until the existing ones are closed or the stop-loss orders shift to lower risk areas.</p> */}
                </div>
                <div className='flex gap-10'>
                    <label className='flex gap-3' htmlFor="isolated">
                        <input type="radio" name="margin_mode" id="isolated" />
                        Isolated
                    </label>
                    <label className='flex gap-3' htmlFor="crossed">
                        <input type="radio" name="margin_mode" id="crossed" />
                        Cross
                    </label>
                </div>
            </div>
            <div className='p-5 bg-back-back rounded-lg space-y-5'>
                <h6 className='text-lg font-semibold'>Rename Your Bot</h6>
                <input className='border rounded-lg w-2/3 h-10 px-2 bg-transparent active:outline' type="text" name="" id="" />
            </div>
        </div>
    )
}

export default EditBot3