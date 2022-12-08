import React from 'react'

const OrderBook = () => {
    return (
        <div className='bg-back-back rounded-lg p-5 spae-y-5 lg:col-span-3'>
            <h6 className='font-semibold'>OrderBook</h6>
            <div className='flex justify-between border-b pb-3'>
                <p>Price</p>
                <p>Quantity</p>
            </div>
            <div className='flex justify-between'>
                <p>38774.33</p>
                <p>38774.33</p>
            </div>
        </div>
    )
}

export default OrderBook