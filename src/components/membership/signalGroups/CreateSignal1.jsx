import React from 'react'
import EditBotHeader from '../Bots/EditBotHeader'

const CreateSignal1 = ({ formData, setFormData }) => {
    return (
        <div className='grid gap-10 text-white/70'>
            <EditBotHeader number={'2'} title={'Group Configuration'} desc={'Define how your service is seen and charged.'} />
            <div className='divide-y divide-white/70 border-white/70 border-y'>
                <div className='space-y-5 p-5'>
                    <p>Privacy</p>
                    <div className='flex gap-10'>
                        <label className='flex gap-3 justify-start' htmlFor="private">
                            <input type="radio" name="privacy" id="private" value={formData.privacy} onChange={(e) => setFormData({ ...formData, privacy: e.target.id })} />
                            Private
                        </label>
                        <label className='flex gap-3 justify-start' htmlFor="public">
                            <input type="radio" name="privacy" id="public" value={formData.privacy} onChange={(e) => setFormData({ ...formData, privacy: e.target.id })} />
                            Public
                        </label>
                    </div>
                </div>
                <div className='space-y-5 p-5'>
                    <p>Subscription Type</p>
                    <div className='flex gap-10'>
                        <label className='flex gap-3 justify-start' htmlFor="free">
                            <input type="radio" name="pricing_type" id="free" value={formData.pricing_type} onChange={(e) => setFormData({ ...formData, pricing_type: e.target.id })} />
                            Free
                        </label>
                        <label className='flex gap-3 justify-start' htmlFor="monthly">
                            <input type="radio" name="pricing_type" id="monthly" value={formData.pricing_type} onChange={(e) => setFormData({ ...formData, pricing_type: e.target.id })} />
                            Monthly
                        </label>
                        <label className='flex gap-3 justify-start' htmlFor="yearly">
                            <input type="radio" name="pricing_type" id="yearly" value={formData.pricing_type} onChange={(e) => setFormData({ ...formData, pricing_type: e.target.id })} />
                            Yearly
                        </label>
                    </div>
                </div>
                <div className='grid gap-5 p-5'>
                    <p>Subscription</p>
                    <label htmlFor="pricing_fee">
                        Subscription Price <br />
                        <input className='h-10 w-2/3 lg:w-1/3 px-2 rounded-lg bg-transparent border border-white/70' type="text" name="pricing_fee" id="pricing_fee" value={formData.pricing_fee} onChange={(e) => setFormData({ ...formData, pricing_fee: e.target.value })} />
                    </label>
                </div>
                <div className='grid gap-5 p-5'>
                    <p>Allocation</p>
                    <div className='flex gap-10'>
                        <label htmlFor="min_allocation">
                            Minimum Allocation <br />
                            <input className='h-10 text-right px-2 rounded-lg bg-transparent border border-white/70' type="number" min={1} name="min_allocation" id="min_allocation" value={formData.min_allocation} onChange={(e) => setFormData({ ...formData, min_allocation: e.target.value })} />
                        </label>
                        <label htmlFor="max_allocation">
                            Maxximum Allocation <br />
                            <input className='h-10 text-right px-2 rounded-lg bg-transparent border border-white/70' type="number" min={formData.min_allocation + 1} name="max_allocation" id="max_allocation" value={formData.max_allocation} onChange={(e) => setFormData({ ...formData, max_allocation: e.target.value })} />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateSignal1