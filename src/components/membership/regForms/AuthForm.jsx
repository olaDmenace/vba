import React from 'react'
import Button from '../../Button'

const AuthForm = () => {
    return (
        <div className='grid text-white/70 gap-5'>
            <p className='w-2/3 justify-self-center text-center'>Please  enter the 4 digit code sent to your number +xxx xxxxxxxxx56</p>
            <div className='flex gap-2 justify-center'>
                <input className='h-10 p-2 bg-transparent border border-white/70 rounded w-10 text-center' type="text" name="" id="" />
                <input className='h-10 p-2 bg-transparent border border-white/70 rounded w-10 text-center' type="text" name="" id="" />
                <input className='h-10 p-2 bg-transparent border border-white/70 rounded w-10 text-center' type="text" name="" id="" />
                <input className='h-10 p-2 bg-transparent border border-white/70 rounded w-10 text-center' type="text" name="" id="" />
            </div>
            <Button text={'Submit'} />
            <p className='text-primary hover:text-primary-light active:text-primary-dark justify-self-center'>Resend Code</p>
        </div>
    )
}

export default AuthForm