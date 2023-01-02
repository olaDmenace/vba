import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/authSlice'
import ExchangeWalletCoin from './ExchangeWalletCoin'


const ExchangeWallet = () => {

    const dispatch = useDispatch()

    const [balance, setBalance] = useState([])

    useEffect(() => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/exchange/balance', {
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        }).then(res => {
            return res.json()
        }).then(res => {
            console.log(res)
            if (res.status === 'fail' && res?.detail?.toLowerCase() === 'token expired') {
                dispatch(logout())
                return
            } else if (res.status === 'success') {
                setBalance(res.detail.balances)
            }
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className='bg-back-back h-full grid items-center rounded-lg pt-4 pb-2 text-white/70'>
            <div className='divide-y'>
                <div className='grid grid-flow-col justify-items-stretch px-6 pb-4'>
                    <p>Exchange Wallet</p>
                    <p className=''>Coin</p>
                    <p className='justify-self-end'>Balance</p>
                </div>
                {balance.map(balance => <ExchangeWalletCoin coin={balance.coin} balance={balance.balance} />)}
            </div>
        </div>
    )
}

export default ExchangeWallet