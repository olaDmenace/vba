import React from 'react'
import AutoInvestEditBot2 from './AutoInvestEditBot2'
import Currency from './Currency'
import EditBotHeader from './EditBotHeader'
import EntryMethod from './EntryMethod'
import PositionSze from './PositionSze'
import RiskLimit from './RiskLimit'

const EditBot2 = () => {
    return (
        <div className='text-white/70 grid gap-5'>
            <div className='text-white/70 space-y-10 lg:space-y-0 lg:flex lg:justify-between border-b pb-5'>
                <EditBotHeader number={'2'} title={'Automate Settings'} desc={'Define the entry and exit automation.'} />
                <Currency />
            </div>
            <AutoInvestEditBot2 />
            <PositionSze />
            <RiskLimit />
            <EntryMethod />
        </div>
    )
}

export default EditBot2