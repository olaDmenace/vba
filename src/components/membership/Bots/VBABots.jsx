import React from 'react'
import { useState } from 'react'
import Button from '../../Button'

const VBABots = (props) => {
    // const params = new URLSearchParams({
    //     query: bot_id
    // })
    const botDetails = () => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/user/viewSingleBotConfig?', {
            body: JSON.stringify({
                bot_id: props.id
            }),
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        }).then(res => {
            console.log(localStorage.getItem('accessToken'))
            console.log('')
            return res.json()
        }).then(res => {
            console.log(res)
        })
        console.log('first')
    }


    return (
        <div className='p-5 flex justify-between text-white/70' onClick={botDetails}>
            <div>
                <h6 className='font-semibold'>{props.name}</h6>
                <p>{props.type}</p>
            </div>
        </div>
    )
}

export default VBABots