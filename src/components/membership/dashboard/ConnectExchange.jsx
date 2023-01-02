import React from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import Button from '../../Button'
// Spinner Loader import
import { Oval } from 'react-loader-spinner'


const ConnectExchange = ({ openModal }) => {

    // Response State
    const [response, setResponse] = useState('')

    // Loading state
    const [isLoading, setIsLoading] = useState(false)

    // Controls the selection of the dropdown
    const [exchange, setExchange] = useState(false)
    // Collects the value of the drop down
    const [platform, setPlatform] = useState('Binance')

    // Collects values from both API and secret key input
    const [api_key, setAPI] = useState('')
    const [api_secret, setSecret] = useState('')

    // hide fields when dropdown changes
    const showKeys = () => {
        setExchange(true)
    }

    const connectHandle = (e) => {
        setIsLoading(true)
        fetch('https://server.cryptosignal.metrdev.com/api/v1/exchange/connectUserExchange', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('accessToken')
            },
            body: JSON.stringify({
                platform,
                api_key,
                api_secret
            })
        }).then(res => {
            setIsLoading(false)
            if (res.ok) {
                return res.json()
            } else if (!res.ok) {
                setResponse('Please chek your details or try again later')
                return
            }
        }).then(data => {
            if (data) {
                setResponse(data.detail)
            }
            setTimeout(() => {
                window.location.reload()
            }, 3000);
            return console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
            <div className='bg-[#32393C] pt-8 pb-10 w-full divide-y divide-white/20 relative rounded'>
                <div className='flex justify-between px-8 pb-8'>
                    <p className='text-white/70 text-lg font-semibold'>Connect Exchange</p>
                    <XCircleIcon onClick={() => openModal()} className='text-white/60 h-6 cursor-pointer' />
                </div>
                <div className='grid px-8 pt-8 gap-5'>
                    <div className='border border-[#00B6FF] bg-[#76CEF10D] flex gap-2 p-4'>
                        <InformationCircleIcon className='h-6 text-primary' />
                        <div>
                            <p>Connect With Binance</p>
                            <span>Difficult getting the API keys? <p className='text-primary hover:text-primary-light active:text-primary-dark'>See this tutorial</p></span>
                            <span>You can also create a new account <p className='text-primary hover:text-primary-light active:text-primary-dark'>here</p></span>
                        </div>
                    </div>
                    <div className='grid gap-3'>
                        <label className='text-[#FFFFFFCC]' htmlFor="">
                            Preferred Exchange
                            <select onClick={() => setExchange(false)} onChange={e => setPlatform(e.target.value)} value={platform} className='w-full h-10 bg-[#32393C] border rounded px-2' name="" id="platform">
                                <option>Binance</option>
                                <option>Bybit</option>
                            </select>
                        </label>
                        {!exchange && <button onClick={showKeys} className='bg-[#F9B520] rounded px-3 py-2 w-2/3'>Conect With {platform}</button>}
                    </div>
                    {exchange && <div className='text-white/70 grid gap-3'>
                        <label htmlFor="">
                            API Key
                            <input type="text" onChange={(e) => setAPI(e.target.value)} value={api_key} name="" id="api_key" placeholder='Enter the API key' className='w-full h-10 bg-transparent border rounded px-2 text-white/70' />
                        </label>
                        <label htmlFor="">
                            Secret Key
                            <input type="text" value={api_secret} name="" onChange={(e) => setSecret(e.target.value)} id="api_secret" placeholder='Enter the Secret key' className='w-full h-10 bg-transparent border rounded px-2 text-white/70' />
                        </label>
                        {isLoading && <div className='mx-auto w-fit text-center'>
                            <Oval
                                height={30}
                                width={30}
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
                        {!isLoading && <Button Execute={connectHandle} text={'Connect'} />}
                    </div>}
                    <div className='text-primary text-center'>{response}</div>
                </div>
            </div>
        </div>
    )
}

export default ConnectExchange