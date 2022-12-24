import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/authSlice'
import SignalGroup from '../tradeManagers/SignalGroup'

const SignalGroupList = ({ ...props }) => {


    // Get user Subscribed Signal Groups
    const [userGroups, setUserGroups] = useState([])
    // const authenticated = useSelector((state) => state.auth.isAuthenticated)

    const dispatch = useDispatch()

    const url = 'https://server.cryptosignal.metrdev.com/api/v1/user/subscribe'

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
            setUserGroups(res.detail)
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <p className='text-white/70 text-lg'>Signal Group</p>
            {userGroups.map(userGroups => <SignalGroup
                key={userGroups?.group_id}
                Name={userGroups?.group_data?.group_name}
                desc={userGroups?.group_data?.group_desc}
                type={userGroups?.group_data?.pricing_type}
                minAll={`Min Allocation: ${userGroups?.group_data?.min_allocation}`}
                signals={userGroups?.group_data?.signals}
                win_rate={`${userGroups?.group_data?.win_rate}%`}

            />)}
        </div>
    )
}

export default SignalGroupList