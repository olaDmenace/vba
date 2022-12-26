import React, { useEffect } from 'react'
import Balance from './Balance'
import ConnectExchange from './ConnectExchange'
import ExchangeWallet from './ExchangeWallet'
import Memberships from './Memberships'
import TradeManager from './VBAProTraders'
import { useState } from 'react'
import SingleSignalGroup from '../signalGroups/SingleSignalGroup'
import TotalRevenueTable from '../signalGroups/TotalRevenueTable'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/authSlice'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {

    // Connect Excahnge popup state and handler!!!
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(!isOpen)
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
        <div className='space-y-5'>
            {isOpen && <div className='fixed w-full h-screen top-0 left-0'>
                <div className='h-screen w-full bg-black/70 top-0 left-0 absolute grid place-content-center'>
                    <ConnectExchange openModal={openModal} />
                </div>
            </div>}
            <div className='grid gap-5 lg:flex'>
                <div className='grid md:flex md:justify-between bg-back-back basis-1/2 p-6 rounded-lg'>
                    <div className='text-white/70 grid gap-5 md:gap-0'>
                        <h3>My Wallet</h3>
                        <h6>Your profile is almost complete!</h6>
                        <button onClick={openModal} className='rounded h-12 px-5 hover:bg-[#66BBDC] text-white bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>Connect Wallet</button>
                    </div>
                    <div className='mx-auto'>
                        <Balance />
                    </div>
                </div>
                <div className='basis-1/2'>
                    <ExchangeWallet />
                </div>
            </div>
            <Outlet />
            {/* <div className='text-white/70 space-y-6 bg-back-back rounded-lg p-6'>
                <div className='flex justify-between gap-5'>
                    <h3>Trade Managers</h3>
                    <p className='text-primary hover:text-primary-light active:text-primary-dark cursor-pointer'>Become a Trade Manager</p>
                </div>
                <div className='grid lg:grid-flow-col lg:grid-cols-3 gap-5 h-96'>
                    <div className='border rounded-lg py-3'>
                        <p className='pb-3 px-5 border-b'>Signal Groups You Belong To:</p>
                        {groupList.map(groupList => <SingleSignalGroup
                            key={groupList?.group_data?.group_id}
                            img={groupList?.group_data?.group_url}
                            name={groupList?.group_data?.group_name}
                            desc={groupList?.group_data?.group_desc}
                        />)}
                    </div>
                    <div className='border rounded-lg py-3 px-5 text-white/70 grid gap-5'>
                        {groupList.map(groupList => <TotalRevenueTable
                            key={groupList?.group_data?.group_id}
                            img={groupList?.group_data?.group_url}
                            name={groupList?.group_data?.group_name}
                            visibility={groupList?.group_data?.visibility}
                            min={`${groupList?.group_data?.min_allocation} USDT`}
                            max={`${groupList?.group_data?.max_allocation} USDT`}
                            pfee={groupList?.group_data?.pricing_fee}
                        />)}
                    </div>
                    <Memberships />
                </div>
            </div> */}
        </div>
    )
}

export default Dashboard