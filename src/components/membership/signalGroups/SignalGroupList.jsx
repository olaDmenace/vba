import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { logout } from '../../../store/authSlice'
import SignalGroup from '../tradeManagers/SignalGroup'

const SignalGroupList = ({ ...props }) => {


    // Get user Subscribed Signal Groups
    const [userGroups, setUserGroups] = useState([])

    // State for signal_id for POST Request
    const [signal, setSignal] = useState()

    // Dispatch for token expiry
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/user/sigGroups', {
            method: 'GET',
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
            setUserGroups(res.detail)
            console.log(res)
        }).catch(err => {
        })
    }, [])

    const location = useLocation()

    const title = location.pathname === '/dashboard/SignalPage' ? 'Signal Group' : ''

    const connect = function (arg) {
        console.log('first')
        // fetch('https://server.cryptosignal.metrdev.com/api/v1/user/connectToSignalGroup', {
        //     method: 'POST',
        //     headers: {
        //         Authorization: localStorage.getItem('accessToken')
        //     },
        //     body: JSON.stringify({
        //         signal_id: arg
        //     })
        // }).then(res => {
        //     return res.json()
        // }).then(res => {
        //     if (res.status === 'fail' && res?.detail?.toLowerCase() === 'token expired') {
        //         dispatch(logout())
        //         return
        //     }
        //     console.log(res)
        // }).catch(err => {
        // })

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
            console.log(data)
            setResponse(data)
            console.log(data.detail)
        }).catch(err => {
            // console.log(err)
        })
    }

    const [response, setResponse] = useState('')

    return (
        <div>
            <p className='text-white/70 text-lg'>{title}</p>
            <div className={location.pathname === '/dashboard/SignalPage' ? 'overflow-x-scroll lg:overflow-x-hidden' : ''}>
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
            </div>
        </div>
    )
}

export default SignalGroupList