import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
// import AutoInvestEditBot2 from './AutoInvestEditBot2'
import Currency from './Currency'
import EditBotHeader from './EditBotHeader'
import EntryMethod from './EntryMethod'
import PositionSze from './PositionSze'
import RiskLimit from './RiskLimit'
import SettingsCard from './SettingsCard'

const EditBot2 = ({ formData, setFormData }) => {
    return (
        <div className='text-white/70 grid gap-5'>
            <div className='text-white/70 space-y-10 lg:space-y-0 lg:flex lg:justify-between border-b pb-5'>
                <EditBotHeader number={'3'} title={'Automate Settings'} desc={'Define the entry and exit automation.'} />
                {/* <Currency /> */}
            </div>
            <div className='grid gap-5 lg:grid-cols-2'>
                <div>
                    <div className='bg-back-back p-5 rounded-lg grid gap-5 h-full'>
                        <div className='space-y-2'>
                            <h5 className='font-medium'>Leverage</h5>
                            <h6 className='font-medium'>Define the leverage allocation</h6>
                            <p>The investment allocation refers to the amount that can be distributed across active positions.</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='flex items-center relative rounded-lg border w-2/5 pr-3'>
                                {/* <p className='text-lg absolute left-2'>$</p> */}
                                <input className='h-10 bg-transparent pl-6 w-full focus:outline-none text-right' placeholder='0' type="number" min={1} max={100} name="leverage" id="leverage" value={formData.leverage} onChange={(e) => { setFormData({ ...formData, leverage: +e.target.value }) }} />
                            </div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <button disabled={formData.leverage === 0} onClick={(e) => { setFormData({ ...formData, leverage: formData.leverage - 5 }) }}><MinusCircleIcon className='h-5' /></button>
                            {/* <input type="range" value='0' min='0' max='100' step='10' name="" id="" /> */}
                            <input className='h-[2px]' type="range" name="leverage" id="leverage" min='0' max='100' step={5} value={formData.leverage} onChange={(e) => { setFormData({ ...formData, leverage: +e.target.value }) }} />
                            <button disabled={formData.leverage === 100} onClick={(e) => { setFormData({ ...formData, leverage: formData.leverage + 5 }) }}><PlusCircleIcon className='h-5' /></button>
                        </div>
                        <div className='flex justify-between border rounded-lg px-3 py-2 w-2/3'>
                            <p className='cursor-pointer' onClick={(e) => { setFormData({ ...formData, leverage: 5 }) }}>5%</p>
                            <p className='cursor-pointer' onClick={(e) => { setFormData({ ...formData, leverage: 10 }) }}>10%</p>
                            <p className='cursor-pointer' onClick={(e) => { setFormData({ ...formData, leverage: 25 }) }}>25%</p>
                            <p className='cursor-pointer' onClick={(e) => { setFormData({ ...formData, leverage: 50 }) }}>50%</p>
                            <p className='cursor-pointer' onClick={(e) => { setFormData({ ...formData, leverage: 100 }) }}>100%</p>
                        </div>
                    </div>
                </div>
                <div><div className='p-5 bg-back-back rounded-lg grid gap-5 h-full'>
                    <div className='space-y-2'>
                        <h6 className='font-medium'>Position Capital</h6>
                        <p>maximum amount allocated to the bot for trading</p>
                    </div>
                    <div>
                        <div className='flex items-center relative rounded-lg border w-2/5 pr-3'>
                            <p className='text-lg absolute left-2'>$</p>
                            <input className='h-10 bg-transparent pl-6 w-full focus:outline-none text-right' placeholder='0' type="number" name="risk_amount" id="risk_amount" value={formData.risk_amount} onChange={(e) => { setFormData({ ...formData, risk_amount: +e.target.value }) }} />
                        </div>
                    </div>
                    <div className='grid gap-5'>
                        <div className='flex gap-3 items-center'>
                            <MinusCircleIcon className='h-5' onClick={(e) => { setFormData({ ...formData, risk_amount: formData.risk_amount - 5 }) }} />
                            <input className='h-[2px]' type="range" name="risk_amount" id="risk_amount" min='' max={''} step={5} value={formData.risk_amount} onChange={(e) => { setFormData({ ...formData, risk_amount: +e.target.value }) }} />
                            <PlusCircleIcon className='h-5' onClick={(e) => { setFormData({ ...formData, risk_amount: formData.risk_amount + 5 }) }} />
                        </div>
                        <div className='flex justify-between border rounded-lg px-3 py-2 w-2/3'>
                            <p className='cursor-pointer' onClick={(e) => { setFormData({ ...formData, risk_amount: 5 }) }}>5%</p>
                            <p className='cursor-pointer' onClick={(e) => { setFormData({ ...formData, risk_amount: 10 }) }}>10%</p>
                            <p className='cursor-pointer' onClick={(e) => { setFormData({ ...formData, risk_amount: 25 }) }}>25%</p>
                            <p className='cursor-pointer' onClick={(e) => { setFormData({ ...formData, risk_amount: 50 }) }}>50%</p>
                            <p className='cursor-pointer' onClick={(e) => { setFormData({ ...formData, risk_amount: 100 }) }}>100%</p>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                    <div className='p-5 bg-back-back grid gap-5 rounded-lg h-full'>
                        <div className='space-y-2'>
                            <h6 className='font-medium'>Margin Mode</h6>
                            <p>Defines the maximum exposure of your allocated capital in active trades. When the limit is hit, new positions will not be opened for this provider until the existing ones are closed or the stop-loss orders shift to lower risk areas.</p>
                        </div>
                        <div className='flex gap-10'>
                            <label className='flex gap-3 items-center' htmlFor="isolated">
                                <input type="radio" name="margin_mode" id="isolated" value={formData.margin_mode} onChange={(e) => { setFormData({ ...formData, margin_mode: e.target.id }) }} />
                                Isolated
                            </label>
                            <label className='flex gap-3 items-center' htmlFor="crossed">
                                <input type="radio" name="margin_mode" id="crossed" value={formData.margin_mode} onChange={(e) => { setFormData({ ...formData, margin_mode: e.target.id }) }} />
                                Crossed
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='p-5 bg-back-back grid gap-5 rounded-lg h-full'>
                        <div className='space-y-2'>
                            <h6 className='font-medium'>Entry Method</h6>
                            <p>Automatically creates an entry order at the moment a new signal is published or sends a message requesting authorization to enter the signal.</p>
                        </div>
                        <div className='flex gap-10'>
                            <label className='flex gap-3 items-center' htmlFor="auto">
                                <input type="radio" name="entry_method" id="auto" value={formData.entry_method} onChange={(e) => { setFormData({ ...formData, entry_method: e.target.id }) }} />
                                Automatic
                            </label>
                            <label className='flex gap-3 items-center' htmlFor="manual">
                                <input type="radio" name="entry_method" id="manual" value={formData.entry_method} onChange={(e) => { setFormData({ ...formData, entry_method: e.target.id }) }} />
                                Manual
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='grid gap-5 lg:flex'>
                <SettingsCard Title={'Auto Stop'} Desc={'Create a specific stop-loss strategy for this bot.'} />
                <SettingsCard Title={'Trailing Take Profit'} Desc={'Create a specific trailing take profit strategy for this bot.'} />
                <SettingsCard Title={'Take Profit'} Desc={'Create a specific liquidation strategy for this bot.'} />
            </div> */}
        </div>
    )
}

export default EditBot2