import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/authSlice'
import Button from '../../Button'


// Spinner Loader import
import { Oval } from 'react-loader-spinner'

const SignalGroup = (props) => {

    // const connect = fetch('https://server.cryptosignal.metrdev.com/api/v1/user/subscribe', {
    //     method: 'POST',
    //     headers: {
    //         Authorization: localStorage.getItem('accessToken')
    //     }
    // }).then(res => {
    //     return res.json()
    // }).then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.log(err)
    // })

    // const [res, setRes] = useState('')

    const dispatch = useDispatch()


    // State for loading
    const [isLoading, setIsLoading] = useState(true)

    // Get user Subscribed Signal Groups
    const [userGroups, setUserGroups] = useState([])

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
            setIsLoading(false)
            console.log(res)
        }).catch(err => {
        })
    }, [])



    return (
        <div>
            <div className='text-white/70 py-5'>
                <table className='w-full'>
                    <thead className='h-16'>
                        <tr className='text-left'>
                            <th>Name</th>
                            <th>Pricing</th>
                            <th>Analytics</th>
                            <th>Signals</th>
                            <th></th>
                        </tr>
                    </thead>
                    {userGroups.map(userGroups => <tr key={userGroups?.group_data?.group_id} className='h-24 border-y'>
                        <td className='grid gap-1 grid-flow-col h-24 w-48 content-center'>
                            <img className='rounded-full h-8 w-8' src={userGroups?.group_url} alt="" />
                            <div>
                                <p className='font-semibold'>{userGroups?.group_name}</p>
                                <p>{`${userGroups?.privacy} Group`}</p>
                            </div>
                        </td>
                        <td>
                            <ul className='list-disc w-60'>
                                <li className='font-semibold'>{`$${userGroups.pricing_fee} ${userGroups?.pricing_type}`}</li>
                                <li>{`Min Allocation: ${userGroups?.min_allocation}`}</li>
                            </ul>
                        </td>
                        <td>
                            <ul className='list-disc font-semibold w-56'>
                                <li>Win Rate: {`${userGroups?.win_rate}%`}</li>
                                <li>Member Counter: 1:1.25</li>
                            </ul>
                        </td>
                        <td className='font-semibold'>
                            <p className='w-32'>{userGroups?.signals}</p>
                        </td>
                        <td>
                            <Button text={'Connect'} Execute={() => props.execute(userGroups?.signal_id)} />
                        </td>
                    </tr>)}
                </table>
                {isLoading && <div className='mx-auto w-fit pt-10'>
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
            </div>
        </div>
    )
}

export default SignalGroup