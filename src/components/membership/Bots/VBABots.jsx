import React from 'react'
import Button from '../../Button'

const VBABots = () => {

    const botsList = () => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/user/viewBotConfiguration', {
            headers: {
                Authorization: localStorage.getItem('accssToken')
            }
        })
            .then(res => {
                return res.json
            })
            .then(res => {
                return console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='p-5 flex justify-between text-white/70'>
            <div>
                <h6 className='font-semibold'>EMA Cross 50 200 +ADX (Long)</h6>
                <p>Distribution Bot</p>
            </div>
            <Button text={'Edit Bot'} />
        </div>
    )
}

export default VBABots