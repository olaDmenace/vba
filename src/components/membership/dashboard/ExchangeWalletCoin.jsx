import React from 'react'

const ExchangeWalletCoin = (props) => {
    return (
        <div>
            <div className='grid grid-flow-col grid-cols-3 px-6 py-4'>
                <p className=''>Binance</p>
                <p className='justify-self-center'>{props.coin}</p>
                <p className='justify-self-end'>{props.balance}</p>
            </div>
        </div>
    )
}

export default ExchangeWalletCoin