import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../store/authSlice'
import Balance from '../dashboard/Balance'
import ExchangeWallet from '../dashboard/ExchangeWallet'
import VBABotDetails from './VBABotDetails'
import VBABots from './VBABots'



const Bots = () => {

    const [data, setData] = useState([])

    const dispatch = useDispatch()
    //State for bot summary
    const [botData, setBotData] = useState(false)

    //Toggle for botData
    const toggleData = () => {
        setBotData(true)
    }

    useEffect(() => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/user/viewBotConfiguration', {
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
            console.log(res)
            setData(res.detail)
        }).catch(err => {

        })
    }, [])



    return (
        <div className='space-y-5'>
            <div className='grid lg:flex gap-5'>
                <div className='basis-1/2 bg-[#32393C33] rounded-lg'>
                    <Balance />
                </div>
                <div className='basis-1/2'>
                    <ExchangeWallet />
                </div>
            </div>
            <div className='bg-[#32393C33] p-5 rounded-lg space-y-5'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-white/70'>VBA Bots</p>
                    <Link to='/dashboard/Edit' className='text-primary hover:text-primary-light active:text-primary-dark cursor-pointer'>Create New Bot</Link>
                </div>
                <div className='grid gap-5 lg:flex'>
                    <div className='basis-1/2'>
                        <div className='rounded border py-5 h-full'>
                            <div className='px-5 text-white/70 border-b'>
                                <div className='pb-5'>
                                    <p className='font-medium'>Your VBA Bots</p>
                                </div>
                            </div>
                            <div onClick={toggleData} className='divide-y'>
                                {data.map(data => <VBABots key={data.bot_id} name={data.bot_name} type={data.bot_action} />)}
                            </div>
                        </div>
                    </div>
                    {botData && <div className='basis-1/2'>
                        {data.map(data =>
                            <VBABotDetails
                                key={data.bot_id}
                                name={data.bot_name}
                                type={data.bot_action}
                                symbol={data.symbol}
                            />)
                        }
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Bots