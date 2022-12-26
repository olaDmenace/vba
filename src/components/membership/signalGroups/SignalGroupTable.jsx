import React from 'react'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { logout } from '../../../store/authSlice'
import SingleSignalGroup from './SingleSignalGroup'

const SignalGroupTable = () => {
    return (
        <div className='border rounded-lg divide-y py-3'>
            <p className='pb-3 px-5'>Signal Groups You Belong To:</p>
            <SingleSignalGroup />
        </div>
    )
}

export default SignalGroupTable