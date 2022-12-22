import { PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useState } from 'react'
import Balance from '../dashboard/Balance'
import ExchangeWallet from '../dashboard/ExchangeWallet'
import img from './../../../images/Altercation.png'
import Memberships from './Memberships'
import SignalGroupTable from './SignalGroupTable'
import TotalRevenueTable from './TotalRevenueTable'

const SignalGroup = () => {
    const [groups, setGroups] = useState(true)
    return (
        <div className='bg-back-back p-5 rounded-lg text-white/70 grid gap-5'>
            <div className='grid gap-5'>
                <h5 className='font-semibold'>Signal Groups</h5>
                <div className='lg:flex items-center space-y-5 lg:space-y-0 justify-between'>
                    <div className='space-y-5 lg:space-y-0 lg:flex gap-5 items-center'>
                        <p >Other Signal Groups</p>
                        <button className='py-3 px-4 rounded bg-back-back text-white/70'>Groups You Manage</button>
                    </div>
                    <p className='hover:text-[#66BBDC] text-primary active:text-primary-dark ease-in-out transition-colors duration-500'>Create a New Signal Group</p>
                </div>
            </div>
            <div className='grid lg:grid-flow-col gap-5 lg:grid-cols-2'>
                <div className='border rounded-lg mx-auto w-full'>
                    <Balance />
                </div>
                <div>
                    <ExchangeWallet />
                </div>
            </div>
            <div className='grid gap-5'>
                <div className='flex gap-5'>
                    <button className={groups ? `text-white/70 bg-[#00B6FF33] py-2 px-2 rounded` : `text-white/70`} disabled={groups ? true : false} onClick={''}>Groups You Manage</button>
                    <button className={!groups ? `text-white/70 bg-[#00B6FF33] py-2 px-2 rounded` : `text-white/70`} disabled={!groups ? true : false} onClick={''}>Other Signal Groups</button>
                </div>
                <div className='grid lg:grid-flow-col gap-5 lg:grid-cols-2'>
                    <div className='border rounded-lg p-5 grid gap-5'>
                        <img className='mx-auto' src={img} alt="" />
                        <p className='text-center mx-auto'>You do not manage any signal group at the moment</p>
                    </div>
                    {groups && <div className='border rounded-lg p-5 h-96 lg:h-full grid'>
                        <p>We've pre-selected a few premium partners for a trial of their service.</p>
                        <div className='grid justify-items-center gap-5'>
                            <button className='border h-12 px-2 flex items-center gap-1 rounded border-primary hover:bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>
                                <PlusCircleIcon className='h-6' />
                                Connect With a Signal Group
                            </button>
                            {/* <p>or</p>
                            <p className='hover:text-[#66BBDC] text-primary active:text-primary-dark ease-in-out transition-colors duration-500'>Create a New Signal Group</p> */}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default SignalGroup