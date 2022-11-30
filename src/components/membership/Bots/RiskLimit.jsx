import { InformationCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const RiskLimit = () => {
    return (
        <div className='p-5 bg-back-back rounded-lg grid gap-5'>
            <div className='space-y-2'>
                <h6 className='font-medium'>Risk Limit</h6>
                <p>Defines the maximum exposure of your allocated capital in active trades. When the limit is hit, new positions will not be opened for this provider until the existing ones are closed or the stop-loss orders shift to lower risk areas.</p>
            </div>
            <div className='flex gap-5'>
                <label className='flex gap-2' htmlFor="">
                    <input type="radio" name="risk_limit" id="" />
                    No Limit
                </label>
                <label className='flex gap-2' htmlFor="">
                    <input type="radio" name="risk_limit" id="" />
                    Define Risk Limit
                    <InformationCircleIcon className='h-6' />
                </label>
            </div>
        </div>
    )
}

export default RiskLimit