import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/authSlice'
import Button from '../../Button'

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

    // const dispatch = useDispatch()
    // const [res, setRes] = useState('')



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
                    <tr>
                        <td className='flex gap-1 items-center w-48'>
                            <img className='rounded-full h-8 w-8' src={props.img} alt="" />
                            <div>
                                <p className='font-semibold'>{props.Name}</p>
                                <p>{props.visibility}</p>
                            </div>
                        </td>
                        <td>
                            <ul className='list-disc w-60'>
                                <li className='font-semibold'>{props.type}</li>
                                <li>{props.minAll}</li>
                            </ul>
                        </td>
                        <td>
                            <ul className='list-disc font-semibold w-56'>
                                <li>{props.win_rate}</li>
                                <li>Member Counter: 1:1.25</li>
                            </ul>
                        </td>
                        <td className='font-semibold'>
                            <p className='w-32'>{props.signals}</p>
                        </td>
                        <td>
                            <Button Execute={props.execute} text={'Connect'} />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default SignalGroup