import { PlusCircleIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../store/authSlice'
import Balance from '../dashboard/Balance'
import ExchangeWallet from '../dashboard/ExchangeWallet'
import img from './../../../images/Altercation.png'
import Memberships from './Memberships'
import SingleSignalGroup from './SingleSignalGroup'
// import SignalGroupTable from './SignalGroupTable'
import TotalRevenueTable from './TotalRevenueTable'

const SignalGroup = () => {
    const [groups, setGroups] = useState(true)

    const changeGroup = () => {
        setGroups(!groups)
    }


    const [groupList, setGroupList] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/user/viewGroupConfiguration', {
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        }).then(res => {
            return res.json()
        }).then(res => {
            if (res.status === 'fail' && res?.detail?.toLowerCase() === 'token expired') {
                dispatch(logout())
                return
            }
            setGroupList(res.detail)
            // console.log(groupList)
            // console.log(res.detail)
        }).catch(err => {

        })
    }, [])


    return (
        <div className='bg-back-back p-5 rounded-lg text-white/70 grid gap-5'>
            {/* <div className='grid gap-5'>
                <h5 className='font-semibold'>Signal Groups</h5>
                <div className='lg:flex items-center space-y-5 lg:space-y-0 justify-between'>
                    <div className='space-y-5 lg:space-y-0 lg:flex gap-5 items-center'>
                        <p >Other Signal Groups</p>
                        <button className='py-3 px-4 rounded bg-back-back text-white/70'>Groups You Manage</button>
                    </div>
                    <p className='hover:text-[#66BBDC] text-primary active:text-primary-dark ease-in-out transition-colors duration-500'>Create a New Signal Group</p>
                </div>
            </div> */}
            {/* <div className='grid lg:grid-flow-col gap-5 lg:grid-cols-2'>
                <div className='border rounded-lg mx-auto w-full'>
                    <Balance />
                </div>
                <div>
                    <ExchangeWallet />
                </div>
            </div> */}
            <div className='grid gap-5'>
                <div className='flex gap-5'>
                    <button className={groups ? `text-white/70 bg-[#00B6FF33] py-2 px-2 rounded` : `text-white/70`} disabled={groups ? true : false} onClick={changeGroup}>Groups You Manage</button>
                    <button className={!groups ? `text-white/70 bg-[#00B6FF33] py-2 px-2 rounded` : `text-white/70`} disabled={!groups ? true : false} onClick={changeGroup}>Other Signal Groups</button>
                </div>
                {groups && <div className='grid lg:grid-flow-col gap-5 lg:grid-cols-2'>
                    <div className='border rounded-lg p-5 grid gap-5'>
                        <img className='mx-auto' src={img} alt="" />
                        <p className='text-center mx-auto'>You do not manage any signal group at the moment</p>
                    </div>
                    <div className='border rounded-lg p-5 h-96 lg:h-full grid'>
                        <p>We've pre-selected a few premium partners for a trial of their service.</p>
                        <div className='grid justify-items-center gap-5'>
                            <Link to={'/dashboard/SignalPage'} className='border h-12 px-2 flex items-center gap-1 rounded border-primary hover:bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>
                                <PlusCircleIcon className='h-6' />
                                Connect With a Signal Group
                            </Link>
                            {/* <p>or</p>
                            <p className='hover:text-[#66BBDC] text-primary active:text-primary-dark ease-in-out transition-colors duration-500'>Create a New Signal Group</p> */}
                        </div>
                    </div>
                </div>}
                {!groups && <div className='grid lg:grid-flow-col lg:grid-cols-3 gap-5'>
                    <div className='border rounded-lg divide-y py-3'>
                        <p className='pb-3 px-5'>Signal Groups You Belong To:</p>
                        {groupList.map(groupList => <SingleSignalGroup
                            key={groupList?.group_data?.group_id}
                            img={groupList?.group_data?.group_url}
                            name={groupList?.group_data?.group_name}
                            desc={groupList?.group_data?.group_desc}
                        />)}
                    </div>
                    {groupList.map(groupList => <TotalRevenueTable
                        key={groupList?.group_data?.group_id}
                        img={groupList?.group_data?.group_url}
                        name={groupList?.group_data?.group_name}
                        visibility={groupList?.group_data?.visibility}
                        min={`${groupList?.group_data?.min_allocation} USDT`}
                        max={`${groupList?.group_data?.max_allocation} USDT`}
                        pfee={groupList?.group_data?.pricing_fee}
                    />)}
                    <Memberships />
                </div>}
            </div>
        </div>
    )
}

export default SignalGroup