import React from 'react'
import ExchangeWalletCoin from './ExchangeWalletCoin'


const ExchangeWallet = () => {
    return (
        <div className='bg-back-back h-full grid items-center rounded-lg pt-4 pb-2 text-white/70'>
            <div className='divide-y'>
                <div className='grid grid-flow-col justify-items-stretch px-6 pb-4'>
                    <p>Exchange Wallet</p>
                    <p className=''>Coin</p>
                    <p className='justify-self-end'>Balance</p>
                </div>
                <ExchangeWalletCoin />
                <ExchangeWalletCoin />
                <ExchangeWalletCoin />
            </div>
        </div>
    )
}

export default ExchangeWallet