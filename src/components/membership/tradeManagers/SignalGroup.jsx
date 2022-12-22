import React from 'react'
import Button from '../../Button'

const SignalGroup = () => {
    const token = localStorage.getItem('accessToken');
    const url = 'https://server.cryptosignal.metrdev.com/api/v1/'

    const listGroup = () => {
        fetch(`${url}user/sigGroups`, {
            method: 'GET',
            headers: {
                Authorization: `${token}`
            }
        }).then(res => {
            return res.json
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    const joinGroup = () => {

        fetch(`${url}signals/connect`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response)
                return response.json
            }).then(response => {
                console.log(response.data)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
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
                    <td className='flex gap-1 items-center w-44'>
                        <div className='rounded-full h-8 w-8 bg-white/70'></div>
                        <p>CryptoMAs</p>
                    </td>
                    <td>
                        <ul className='list-disc w-60'>
                            <li className='font-semibold'>Free</li>
                            <li>Min allocation: $1,000.00 USDT</li>
                        </ul>
                    </td>
                    <td>
                        <ul className='list-disc font-semibold w-56'>
                            <li>Win rate: 65%</li>
                            <li>Risk-to-Reward ration: 1:1.25</li>
                        </ul>
                    </td>
                    <td className='font-semibold'>
                        <p className='w-32'>93</p>
                    </td>
                    <td>
                        <Button Execute={listGroup} text={'Connect'} />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default SignalGroup