import { PlayCircleIcon } from '@heroicons/react/24/outline'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/authSlice'
import Button from '../../Button'
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
            setIsLoading(false)
        }).catch(err => {

        })
    }, [])

    // const params = new URLSearchParams({
    //     query: bot_id
    // })
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
            setBotSummary(res)
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
                    {isLoading && <div className='mx-auto w-fit text-center'>
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
                    <div className='divide-y'>
                        {data.map(data => <div className='px-5 py-3' key={data.bot_id} id={data.bot_id} onClick={() => botDetails(data.bot_id)}>
                            <h6>{data.bot_name}</h6>
                            <p>{`${data.bot_action} Bot`}</p>
                        </div>)}
                    </div>
                </div>
                <div className='border rounded-lg divide-y'>
                    <div className='p-5 gap-5 flex justify-between'>
                        <div>
                            {/* <h6 className='font-semibold'>{botSummary?.detail?.bot_name}</h6> */}
                            {/* <p>{`${botSummary?.detail?.bot_action} Bot`}</p> */}
                        </div>
                        <div className='flex items-center gap-3'>
                            <PlayCircleIcon className='h-6' />
                            <button className='bg-[#76CEF11A] px-3 py-2 rounded'>Edit Bot</button>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2'>
                        <div className='grid p-5 gap-3'>
                            <span className='flex gap-2'>Exchange: <p>BINANCE</p></span>
                            {/* <span className='flex gap-2'>Coin Pair: <p>{botSummary.detail.symbol}</p></span> */}
                            <span>Take Profit: <button className='text-primary hover:text-primary-light active:text-primary-dark'>Trading View</button></span>
                            <span>Stop Loss: <button className='text-primary hover:text-primary-light active:text-primary-dark'>Trading View</button></span>
                            <span>Margin Mode: <button className='text-primary hover:text-primary-light active:text-primary-dark'>Trading View</button></span>
                        </div>
                        <div className='grid p-5 gap-3'>
                            <p>Leverage: 213</p>
                            <p>Entry Mode: Automatic</p>
                            <span>Win Rate: <button className='text-primary hover:text-primary-light active:text-primary-dark'>65%</button></span>
                        </div>
                    </div>
                    <div className='p-5 space-y-5 md:space-y-0 md:flex items-center gap-5'>
                        <button className='bg-[#76CEF11A] px-3 py-2 rounded'>Edit Bot</button>
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