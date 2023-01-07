import { PlayCircleIcon } from '@heroicons/react/24/outline'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/authSlice'
import Button from '../../Button'
import img from './../../../images/Altercation.png'
import { useParams } from 'react-router-dom'


// Spinner Loader import
import { Oval } from 'react-loader-spinner'

const VBABots = (props) => {

    // State for collecting a list of bots
    const [data, setData] = useState([])

    // State for collecting bot summary after click
    const [botSummary, setBotSummary] = useState([])


    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch()
    //State for bot summary
    const [botData, setBotData] = useState(false)

    //Toggle for botData
    const toggleData = () => {
        setBotData(true)
    }

    const [exist, setExist] = useState(true)

    const role = ''
    const URL = 'https://server.cryptosignal.metrdev.com/api/v1/managers/viewBots'

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
            setBotSummary(res.detail[0])
            setIsLoading(false)
            if (res.detail.length !== 0) {
                setExist(false)
            }
        }).catch(err => {

        })
    }, [])

    // const params = new URLSearchParams({
    //     query: bot_id
    // })

    // Bot Summary State
    const [mikey, setMikey] = useState(false)
    const botDetails = (arg) => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/user/viewSingleBotConfig?' + new URLSearchParams({ bot_id: arg }), {
            // body: JSON.stringify({
            //     bot_id: props.id
            // }),
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        }).then(res => {
            console.log(localStorage.getItem('accessToken'))
            console.log('')
            return res.json()
        }).then(res => {
            setBotSummary(res.detail)
            setMikey(true)
            console.log(res)
        })
        console.log('first')
    }


    return (
        <>
            <div className='grid lg:grid-cols-2 gap-5 w-full h-full text-white/70'>
                <div className='border rounded-lg h-full'>
                    <div className='border-b-white/70 border-b'>
                        <p className='font-semibold px-5 py-3'>Your VBA Bots</p>
                    </div>
                    {isLoading && <div className='mx-auto w-fit text-center pt-5'>
                        <Oval
                            height={50}
                            width={50}
                            color="#00B6FF"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#24718C"
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                        />
                    </div>}
                    <div className='py-10'>
                        {data.map(data => <div className='px-5 py-3' key={data.bot_id} id={data.bot_id} onClick={() => botDetails(data.bot_id)}>
                            <h6>{data.bot_name}</h6>
                            <p>{`${data.bot_action} Bot`}</p>
                        </div>)}
                        {exist && <div>
                            <img className='mx-auto' src={img} alt="" />
                            <p className='text-center px-auto'>You have not joined any signal group at the moment</p>
                        </div>}
                    </div>
                </div>
                <div className='border rounded-lg divide-y'>
                    <div className='p-5 gap-5 flex justify-between'>
                        <div>
                            <h6 className='font-semibold'>{botSummary?.bot_name}</h6>
                            <p>{`${botSummary?.bot_action} Bot`}</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <PlayCircleIcon className='h-6' />
                            <button className='bg-[#76CEF11A] px-3 py-2 rounded'>Edit Bot</button>
                        </div>
                    </div>
                    {mikey && <div className='grid md:grid-cols-2'>
                        <div className='grid p-5 gap-3'>
                            <span className='flex gap-2'>Signal Group: <p>BINANCE</p></span>
                            <span className='flex gap-2'>Symbol: <p>{botSummary?.symbol}</p></span>
                            <span>Risk Amount: <button className='text-primary hover:text-primary-light active:text-primary-dark'>{botSummary?.risk_amount}</button></span>
                            <span>Position Capital: <button className='text-primary hover:text-primary-light active:text-primary-dark'>Trading View</button></span>
                            <span>Margin Mode: <button className='text-primary hover:text-primary-light active:text-primary-dark'>{botSummary?.margin_mode}</button></span>
                        </div>
                        <div className='grid p-5 gap-3'>
                            <span className='flex gap-2'>Leverage: <p>{botSummary?.leverage}</p></span>
                            <apan className='flex gap-2'>Entry Mode: <p>{botSummary?.entry_method}</p></apan>
                            <span>Win Rate: <button className='text-primary hover:text-primary-light active:text-primary-dark'>65%</button></span>
                        </div>
                    </div>}
                    <div className='p-5 space-y-5 md:space-y-0 md:flex items-center gap-5'>
                        <button className='bg-[#76CEF11A] px-3 py-2 rounded'>{botSummary?.bot_active === false ? 'Inactive' : 'Active'}</button>
                        <div className='flex gap-3'>
                            <ArrowPathRoundedSquareIcon className='w-10 h-6' />
                            <p>Firing Indefinitely</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <div className='p-5 flex justify-between text-white/70' onClick={botDetails}>
        //     <div>
        //         <h6 className='font-semibold'>{props.name}</h6>
        //         <p>{props.type}</p>
        //     </div>
        // </div>
    )
}

export default VBABots