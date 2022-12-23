import React from 'react'
import { useState } from 'react'
import Button from '../../Button'

const VBABots = (props) => {
    return (
        <div className='p-5 flex justify-between text-white/70'>
            <div>
                <h6 className='font-semibold'>{props.name}</h6>
                <p>{props.type}</p>
            </div>
            <Button text={'Edit Bot'} />
        </div>
    )
}

export default VBABots