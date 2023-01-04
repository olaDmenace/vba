import React from 'react'
import AutoInvestEditBot2 from './AutoInvestEditBot2'
import Currency from './Currency'
import EditBotHeader from './EditBotHeader'
import EntryMethod from './EntryMethod'
import PositionSze from './PositionSze'
import RiskLimit from './RiskLimit'
import SettingsCard from './SettingsCard'

const EditBot2 = () => {
    return (
        <div className='text-white/70 grid gap-5'>
            <div className='text-white/70 space-y-10 lg:space-y-0 lg:flex lg:justify-between border-b pb-5'>
                <EditBotHeader number={'2'} title={'Automate Settings'} desc={'Define the entry and exit automation.'} />
                {/* <Currency /> */}
            </div>
            <div className='grid gap-5 lg:grid-cols-2'>
                <AutoInvestEditBot2 />
                <PositionSze />
                <RiskLimit />
                <EntryMethod />
            </div>
            <div className='grid gap-5 lg:flex'>
                <SettingsCard Title={'Auto Stop'} Desc={'Create a specific stop-loss strategy for this bot.'} />
                <SettingsCard Title={'Trailing Take Profit'} Desc={'Create a specific trailing take profit strategy for this bot.'} />
                <SettingsCard Title={'Take Profit'} Desc={'Create a specific liquidation strategy for this bot.'} />
            </div>
        </div>
    )
}

export default EditBot2