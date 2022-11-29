import React from 'react'
import Button from '../../Button'
import TradeManager from './SingleTradeManager'

const TradeManagers = () => {
    return (
        <div className='grid gap-14'>
            <div className='space-x-5'>
                <Button text={'Trade Manager'} />
                <Button text={'Signal Group'} />
            </div>
            <div className='text-white/70 overflow-x-scroll'>
                <table className='w-full'>
                    <thead className='w-40 h-16'>
                        <tr className='text-left'>
                            <th>Name</th>
                            <th>Subscription</th>
                            <th>Analytics</th>
                            <th>Signals</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tr className=''>
                        <td className='flex gap-1 items-center w-44'>
                            <div className='rounded-full h-8 w-8 bg-white/70'></div>
                            <p>CryptoMAs</p>
                        </td>
                        <td>
                            <ul className='list-disc w-52'>
                                <li className='font-semibold'>Profit sharing 25% (over net monthly gains)</li>
                                <li>Min allocation: $1,000.00 USDT</li>
                            </ul>
                        </td>
                        <td>
                            <ul className='list-disc font-semibold w-52'>
                                <li>Win rate: 65%</li>
                                <li>Risk-to-Reward ration: 1:1.25</li>
                            </ul>
                        </td>
                        <td className='font-semibold w-56'>
                            <p>93</p>
                        </td>
                        <td>
                            <Button text={'Connect'} />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default TradeManagers