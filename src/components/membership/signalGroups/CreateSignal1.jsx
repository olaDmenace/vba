import React from 'react'
import EditBotHeader from '../Bots/EditBotHeader'

const CreateSignal1 = () => {
    return (
        <div className='grid gap-10 text-white/70'>
            <EditBotHeader number={'2'} title={'Group Configuration'} desc={'Define how your service is seen and charged.'} />
            <div className='divide-y divide-white/70 border-white/70 border-y'>
                <div className='space-y-5 p-5'>
                    <p>Privacy</p>
                    <div className='flex gap-10'>
                        <label className='flex gap-3 justify-start' htmlFor="">
                            <input type="radio" name="privacy" id="" />
                            Private
                        </label>
                        <label className='flex gap-3 justify-start' htmlFor="">
                            <input type="radio" name="privacy" id="" />
                            Public
                        </label>
                    </div>
                </div>
                <div className='space-y-5 p-5'>
                    <p>Subscription Type</p>
                    <div className='flex gap-10'>
                        <label className='flex gap-3 justify-start' htmlFor="">
                            <input type="radio" name="pricing_type" id="" />
                            Free
                        </label>
                        <label className='flex gap-3 justify-start' htmlFor="">
                            <input type="radio" name="pricing_type" id="" />
                            Monthly
                        </label>
                        <label className='flex gap-3 justify-start' htmlFor="">
                            <input type="radio" name="pricing_type" id="" />
                            Yearly
                        </label>
                    </div>
                </div>
                <div className='grid gap-5 p-5'>
                    <p>Subscription</p>
                    <label htmlFor="">
                        Subscription Price <br />
                        <input className='h-10 w-2/3 lg:w-1/3 px-2 rounded-lg bg-transparent border border-white/70' type="text" name="pricing_fee" id="" />
                    </label>
                </div>
                <div className='grid gap-5 p-5'>
                    <p>Allocation</p>
                    <div className='flex gap-10'>
                        <label htmlFor="">
                            Minimum Allocation <br />
                            <input className='h-10 text-right px-2 rounded-lg bg-transparent border border-white/70' type="number" name="min_allocation" id="" />
                        </label>
                        <label htmlFor="">
                            Maxximum Allocation <br />
                            <input className='h-10 text-right px-2 rounded-lg bg-transparent border border-white/70' type="number" name="max_allocation" id="" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateSignal1