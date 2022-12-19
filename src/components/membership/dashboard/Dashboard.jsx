import React from 'react'
import Balance from './Balance'
import ConnectExchange from './ConnectExchange'
import ExchangeWallet from './ExchangeWallet'
import Memberships from './Memberships'
import TradeManager from './VBAProTraders'
import { useState } from 'react'


const Dashboard = () => {

    // Connect Excahnge popup state and handler!!!
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(!isOpen)
    }

    // Trade Managers state and handler
    const [tradeManagers, setTradeManager] = useState(false)

    const showTrade = (arg) => {
        setTradeManager(!tradeManagers)
    }

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
            <div className='text-white/70 space-y-6 bg-back-back rounded-lg p-6'>
                <div className='flex justify-between gap-5'>
                    <h3>Trade Managers</h3>
                    <p className='text-primary hover:text-primary-light active:text-primary-dark cursor-pointer'>Become a Trade Manager</p>
                </div>
                <div className='grid lg:flex gap-5'>
                    {!tradeManagers && <div className='border rounded divide-y md:basis-1/2 h-96'>
                        <div className='p-5 space-y-2'>
                            <h3>Trades</h3>
                            <p>Trade Managr Signal Groups You Manage</p>
                        </div>
                        <div className='p-5 space-y-10'>
                            <h5>Welcome Johnson</h5>
                            <p>You do not manage any group yet. You could become a trade manager by creating signal groups</p>
                            <button onClick={showTrade} className='border h-12 px-4 rounded border-primary hover:bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>Connect With Trade Managers</button>
                        </div>
                    </div>}
                    {tradeManagers &&
                        <TradeManager />
                    }
                    {tradeManagers && <div className='md:basis-1/2'>
                        <Memberships />
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Dashboard