import React from 'react'

const SingleTradeManager = () => {
    return (
        <div className='text-white/70'>
            <div className='flex gap-1 items-center'>
                <div className='rounded-full h-8 w-8 bg-white/70'></div>
                <p>CryptoMAs</p>
            </div>
            <div>
                {/* <ul>
                    <li>Profit Sharing 25% (over net monthly gains)</li>
                    <li>Min Allocation: $1,000,000 USDT</li>
                </ul> */}
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Subscription</th>
                        <th>Analytics</th>
                        <th>Signaks</th>
                        <th></th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default SingleTradeManager