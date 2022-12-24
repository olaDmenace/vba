import React, { useEffect } from 'react'
import { useState } from 'react'
// import Button from '../../Button'
import SignalGroup from '../signalGroups/SignalGroupList'
import TradeManager from './SingleTradeManager'

const TradeManagers = () => {
    const token = localStorage.getItem('accessToken');
    const url = 'https://server.cryptosignal.metrdev.com/api/v1/'

    useEffect(() => {
        fetch(`${url}user/sigGroups`, {
            method: 'GET',
            headers: {
                Authorization: `${token}`
            }
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }, [])



    // const joinGroup = () => {

    //     fetch(`${url}signals/connect`,
    //         {
    //             method: 'POST',
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         })
    //         .then(response => {
    //             console.log(response)
    //             return response.json
    //         }).then(response => {
    //             console.log(response.data)
    //         }).catch(err => {
    //             console.log(err)
    //         })
    // }

    const [tradeManager, setTradeManager] = useState(true)


    const hideTrade = (args) => {
        setTradeManager(!tradeManager)
    }

    return (
        <div className='grid gap-8'>
            <div className='space-x-5'>
                {/* <Button text={'Trade Manager'} />
                <Button text={'Signal Group'} /> */}
                <button className={tradeManager ? `text-white/70 bg-[#00B6FF33] py-2 px-2 rounded` : `text-white/70`} disabled={tradeManager ? true : false} onClick={hideTrade}>Trade Manager</button>
                <button className={!tradeManager ? `text-white/70 bg-[#00B6FF33] py-2 px-2 rounded` : `text-white/70`} disabled={!tradeManager ? true : false} onClick={hideTrade}>Signal Group</button>
            </div>
            <div className='overflow-x-scroll lg:overflow-hidden'>
                {tradeManager && <TradeManager />}
                {!tradeManager && <SignalGroup />}
            </div>
        </div>
    )
}

export default TradeManagers