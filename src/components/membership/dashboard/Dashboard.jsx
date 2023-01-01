import React, { useEffect } from 'react'
// import Balance from './Balance'
import ConnectExchange from './ConnectExchange'
import ExchangeWallet from './ExchangeWallet'
// import Memberships from './Memberships'
// import TradeManager from './VBAProTraders'
import { useState } from 'react'
// import SingleSignalGroup from '../signalGroups/SingleSignalGroup'
// import TotalRevenueTable from '../signalGroups/TotalRevenueTable'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/authSlice'
import { Outlet } from 'react-router-dom'


// Spinner Loader import
import { Oval } from 'react-loader-spinner'

// Import handles the price chart
import { VictoryPie, VictoryLabel } from 'victory'


const Dashboard = () => {

    // Connect Excahnge popup state and handler!!!
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(!isOpen)
    }

    const dispatch = useDispatch()

    // State for collecting and storing balance in pie chart
    const [balance, setBalancce] = useState('')

    // State for showing balance if wallet has been connected
    const [ajite, setAjite] = useState(false)
    useEffect(() => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/exchange/balance', {
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        }).then(res => {
            return res.json()
        }).then(res => {
            console.log(res)
            if (res.status === 'fail' && res?.detail?.toLowerCase() === 'token expired') {
                dispatch(logout())
                return
            } else if (res.status === 'success') {
                setBalancce(res.detail.balances)
                setAjite(true)
            }
        }).catch(err => {
            console.log(err)
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
                    {!ajite && <div className='text-white/70 grid gap-5'>
                        <h3>My Wallet</h3>
                        <h6>Your profile is almost complete!</h6>
                        <button onClick={openModal} className='rounded h-12 px-5 hover:bg-[#66BBDC] text-white bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>Connect Wallet</button>
                    </div>}
                    {ajite && <div className='mx-auto'>
                        <svg width={250} height={250}>
                            <VictoryPie
                                standalone={false}
                                width={250}
                                height={250}
                                padAngle={3}
                                innerRadius={80}
                                data={[{ x: 1, y: 1 }]}
                                colorScale={["#01C063", "#4B4190", "#02695C"]}
                                labels={() => null}
                            />
                            <VictoryLabel
                                textAnchor="middle"
                                verticalAnchor="middle"
                                style={[
                                    {
                                        fontSize: 30,
                                        color: "#28323B",
                                        fontWeight: "600",
                                        lineHeight: 40
                                    },
                                    { fontWeight: "600", fontSize: 16 }
                                ]}
                                x={250 * 0.5}
                                y={250 * 0.525}
                                text={[`$${balance}`, "Total Balance"]}
                            />
                        </svg>
                    </div>}
                </div>
                {ajite && <div className='basis-1/2'>
                    <ExchangeWallet />
                </div>}
            </div>
            <Outlet />
        </div>
    )
}

export default Dashboard