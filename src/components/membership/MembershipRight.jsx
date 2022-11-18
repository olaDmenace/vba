import React, { useState } from 'react'
import Socials from './Socials'
import Circle from '../../images/Ellipse.png'


/*

This is the right hand side of the registration screen that is re-rendered on click of link

**/

const MembershipRight = (props) => {
    return (
        <div className='min-h-screen grid gap-32 lg:gap-0 relative'>
            <div className='absolute -top-1/3 lg:-top-1/2 -right-1/3 lg:-right-1/2'>
                <img src={Circle} alt="" />
            </div>
            <div className='grid gap-8'>
                <div className='lg:hidden space-y-6'>
                    <h1 className='text-Heading1 text-primary font-bold'>{props.Heading}</h1>
                    <p className='font-medium text-white'>{props.Desc}</p>
                </div>
                <div className=''>
                    {props.Form()}
                </div>
            </div>
            <div className='self-end'>
                <Socials />
            </div>
        </div>
    )
}

export default MembershipRight