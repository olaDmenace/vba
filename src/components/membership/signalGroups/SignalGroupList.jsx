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
        fetch('https://server.cryptosignal.metrdev.com/api/v1/user/viewGroupConfiguration', {
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
            console.log(res)
            setUserGroups(res.detail)
            setSignal(userGroups?.group_id)
        }).catch(err => {
        })
    }, [])

    const location = useLocation()

    const title = location.pathname === '/dashboard/SignalPage' ? 'Signal Group' : ''

    return (
        <div>
            <p className='text-white/70 text-lg'>{title}</p>
            <div className={location.pathname === '/dashboard/SignalPage' ? 'overflow-x-scroll lg:overflow-x-hidden' : ''}>
                {userGroups.map(userGroups => <SignalGroup
                    key={userGroups?.group_id}
                    img={userGroups?.group_data?.group_url}
                    Name={userGroups?.group_data?.group_name}
                    desc={userGroups?.group_data?.group_desc}
                    type={userGroups?.group_data?.pricing_type}
                    minAll={`Min Allocation: ${userGroups?.group_data?.min_allocation}`}
                    signals={userGroups?.group_data?.signals}
                    win_rate={`${userGroups?.group_data?.win_rate}%`}
                // execute={connect}
                />)}
            </div>
        </div>
    )
}

export default SignalGroupList