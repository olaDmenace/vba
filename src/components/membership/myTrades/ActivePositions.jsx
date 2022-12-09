import { UserCircleIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React from 'react'

const ActivePositions = () => {
    return (
        <div>
            <table className='text-left overflow-x-scroll divide-y'>
                <thead className='h-16'>
                    <th>Issue Date</th>
                    <th>Manager</th>
                    <th>Symbol</th>
                    <th>Status</th>
                    <th>Yield</th>
                    <th>PnL</th>
                    <th>Stop Postion</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr className='h-20'>
                        <td><p className='w-24'>26/10/22</p></td>
                        <td>
                            <div className='flex gap-2 text-center w-28'>
                                <UserCircleIcon className='h-6 text-primary' />
                                <p>Hadar</p>
                            </div>
                        </td>
                        <td>
                            <div className='w-28'>
                                <p>GALA/USDT</p>
                                <p>Binance | Short</p>
                            </div>
                        </td>
                        <td>
                            <p className='w-28'>No Investment</p>
                        </td>
                        <td>
                            <div className='flex gap-2 items-center w-36'>
                                <ChevronDownIcon className='h-4' />
                                <p>11.27%</p>
                            </div>
                            1.01% over capital
                        </td>
                        <td>
                            <div className='flex gap-2 items-center w-36'>
                                <ChevronDownIcon className='h-4' />
                                <p>11.27%</p>
                            </div>
                            1.01% over capital
                        </td>
                        <td>
                            <div className='flex gap-2 items-center w-36'>
                                <ChevronDownIcon className='h-4' />
                                <p>11.27%</p>
                            </div>
                            1.01% over capital
                        </td>
                        <td>
                            <button className='rounded-lg border px-3 py-3 w-32'>Close Trade</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ActivePositions