import React from 'react'
import { useState } from 'react'
// import Button from '../../Button'
import SignalGroup from './SignalGroup'
import TradeManager from './SingleTradeManager'

const TradeManagers = () => {

    const [tradeManager, setTradeManager] = useState(true)


    const hideTrade = (args) => {
        setTradeManager(!tradeManager)
    }

    return (
        <div className='grid gap-14'>
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