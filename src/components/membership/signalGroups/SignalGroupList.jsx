import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../../../store/authSlice'
import SignalGroup from '../tradeManagers/SignalGroup'
import { CheckIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import Popup from '../../utils/Popup'
import { XMarkIcon } from '@heroicons/react/24/solid'




// Spinner Loader import
// import { Oval } from 'react-loader-spinner'


const SignalGroupList = () => {

    const [popup, setPopup] = useState(false)


    // Get user Subscribed Signal Groups
    const [userGroups, setUserGroups] = useState([])

    // State for loading
    const [isLoading, setIsLoading] = useState(true)

    // State for signal_id for POST Request
    const [signal, setSignal] = useState()

    // Dispatch for token expiry
    const dispatch = useDispatch()

    // useEffect(() => {
    //     fetch('https://server.cryptosignal.metrdev.com/api/v1/user/sigGroups', {
    //         method: 'GET',
    //         headers: {
    //             Authorization: localStorage.getItem('accessToken')
    //         }
    //     }).then(res => {
    //         return res.json()
    //     }).then(res => {
    //         if (res.status === 'fail' && res?.detail?.toLowerCase() === 'token expired') {
    //             dispatch(logout())
    //             return
    //         }
    //         setUserGroups(res.detail)
    //         setIsLoading(false)
    //         console.log(res)
    //     }).catch(err => {
    //     })
    // }, [])

    const location = useLocation()

    const title = location.pathname === '/dashboard/SignalPage' ? 'Signal Group' : ''

    const connect = function (arg) {
        console.log(arg)
        // console.log(userGroups?.signal_id)
        fetch('https://server.cryptosignal.metrdev.com/api/v1/user/connectToSignalGroup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('accessToken')
            },
            body: JSON.stringify({
                signal_id: arg
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            if (data.status === 'error') {
                setResponse(data.status)
                setSummary(data.detail)
                setIcon(<XMarkIcon className='bg-red-500 h-10 rounded place-self-center mx-auto' />)
                setPopup(true)
            } else if (data.status === 'success') {
                setResponse(data.status)
                setSummary('You have sent a connection request to Fortune Crypto Signals')
                setIcon(<CheckIcon className='bg-green-600 h-10 rounded place-self-center mx-auto' />)
                setPopup(true)
            }
            console.log(data)
            console.log(data.detail)
        }).catch(err => {
            console.log(err)
        })
    }

    const [response, setResponse] = useState('')
    const [summary, setSummary] = useState('')
    const [icon, setIcon] = useState()
    const navigate = useNavigate()

    const closePopup = () => {
        setPopup(false)
        setTimeout(() => {
            navigate(-1)
        }, 2000);
    }

    return (
        <div className='overflow-x-scroll lg:overflow-hidden'>
            <div className='flex gap-5'>
                <ChevronLeftIcon className='text-white/70 h-8 cursor-pointer' onClick={() => navigate('/dashboard')} />
                <p className='text-white/70 text-xl'>{title}</p>
            </div>
            {/* {isLoading && <div className='mx-auto w-fit text-center pt-10'>
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
            </div>} */}
            <SignalGroup execute={connect} />
            {/* {!isLoading && <div className={location.pathname === '/dashboard/SignalPage' ? 'overflow-x-scroll lg:overflow-x-hidden' : ''}>
                {userGroups.map(userGroups => <SignalGroup
                    key={userGroups?.group_data?.group_id}
                    img={userGroups?.group_url}
                    Name={userGroups?.group_name}
                    visibility={userGroups?.group_visibility}
                    type={userGroups?.pricing_type}
                    minAll={`Min Allocation: ${userGroups?.min_allocation}`}
                    signals={userGroups?.group_data?.signals}
                    win_rate={`${userGroups?.win_rate}%`}
                    execute={() => connect(userGroups?.signal_id)}
                />)}
            </div>} */}
            {popup && <Popup status={response} icon={icon} summary={summary} click={closePopup} />}
        </div>
    )
}

export default SignalGroupList