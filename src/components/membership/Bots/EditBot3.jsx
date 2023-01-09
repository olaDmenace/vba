import React from 'react'
import EditBotHeader from './EditBotHeader'
import EditSummary from './EditSummary'

const EditBot3 = ({ formData, setFormData }) => {
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
                        <p>{formData.bot_action}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Currency:</p>
                        <p>{formData.symbol}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Exchange:</p>
                        <p> Binance</p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Leverage:</p>
                        <p>{formData.leverage}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Entry Mode:</p>
                        <p>{formData.entry_method}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Margin Mode:</p>
                        <p>{formData.margin_mode}</p>
                    </div>
                </div>
            </div>
            <div className='p-5 bg-back-back rounded-lg space-y-5'>
                <h6 className='text-lg font-semibold'>Rename Your Bot</h6>
                <input className='border rounded-lg w-2/3 h-10 px-2 bg-transparent active:outline' type="text" name="" id="" value={formData.bot_name} onChange={(e) => { setFormData({ ...formData, bot_name: e.target.value }) }} />
            </div>
        </div>
    )
}

export default EditBot3