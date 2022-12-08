import React from 'react'

const SignalManagementTable = () => {
    return (
        <div className=' overflow-x-scroll'>
            <table className='w-full text-left mb-5'>
                <thead className='h-16'>
                    <th>Symbol</th>
                    <th>Author</th>
                    <th>Exchange</th>
                    <th>Strategy</th>
                    <th>Invest</th>
                    <th>Last Price</th>
                </thead>
                <tbody>
                    <tr>
                        <td className=''>
                            <div className='flex items-center gap-1 w-40'>
                                <div className='rounded-full h-8 w-8 bg-white/70'></div>
                                <p>GALAUSDT</p>
                            </div>
                        </td>
                        <td className=''>
                            <div className='flex items-center gap-1 w-48'>
                                <div className='rounded-full h-8 w-8 bg-white/70'></div>
                                <p>The Money Machine</p>
                            </div>
                        </td>
                        <td>
                            <p className='w-40'>Binance</p>
                        </td>
                        <td>
                            <p className='w-40'>Short</p>
                        </td>
                        <td>
                            <p className='w-40'>10% Over Capital</p>
                        </td>
                        <td>
                            <p className='w-40'>0.03446</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SignalManagementTable