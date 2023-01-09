import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/authSlice'
import EditBotHeader from './EditBotHeader'

const EditBot0 = ({ formData, setFormData, minmax, setMinMax }) => {

    const [userGroups, setUserGroups] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/managers/manageSignalGroups', {
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            if (data.status === 'fail' && data?.detail?.toLowerCase() === 'token expired') {
                dispatch(logout())
                return
            }
            console.log(data.detail)
            setUserGroups(data.detail)
        })
    }, [])



    return (
        <div className='text-white/70 grid gap-5'>
            <EditBotHeader number={'1'} title={'Define Your Bot'} desc={'Let us know some initial information about your new bot, like what it will do, and how it will help you. 🤝'} />
            <p>What Should Your Bot Do?</p>
            <div className='grid gap-5 lg:grid-cols-2'>
                <div className='border rounded-lg p-5'>
                    <label className='flex gap-3' htmlFor="notify">
                        <input type="radio" name="bot_action`" id="notify" value={formData.bot_action} onChange={(e) => { setFormData({ ...formData, bot_action: e.target.id }) }} />
                        Notify
                    </label>
                    <p className='w-2/3'>Get notified via Push Notification or Email</p>
                </div>
                <div className='border rounded-lg p-5'>
                    <label className='flex gap-3' htmlFor="distribute">
                        <input type="radio" name="bot_action`" id="distribute" value={formData.bot_action} onChange={(e) => { setFormData({ ...formData, bot_action: e.target.id }) }} />
                        Distribute
                    </label>
                    <p className='w-2/3'>Distribute investment signals to members of your signal group.</p>
                </div>
            </div>
            <div className='grid gap-5'>
                <label className='grid gap-3' htmlFor="bot_name">
                    Name Your Bot
                    <input className='h-10 px-2 bg-transparent border rounded-lg' type="text" name="bot_name" id="bot_name" value={formData.bot_name} onChange={(e) => { setFormData({ ...formData, bot_name: e.target.value }) }} />
                </label>
                <label className='grid gap-3' htmlFor="group_id">
                    What Signal Group are you creating this Bot for?
                    <select className='h-10 px-2 bg-transparent border rounded-lg text-white/70' name="group_id" onChange={(e) => { setFormData({ ...formData, group_id: e.target.value }); }}>
                        <option value=""></option>
                        {userGroups.map(item => <option className='text-black' value={item?.signal_id} key={item?.signal_id}>{item.group_name}</option>)}
                    </select>
                    {/* <input className='h-10 px-2 bg-transparent border rounded-lg' type="text" name="" id="" /> */}
                </label>
            </div>
        </div>
    )
}

export default EditBot0