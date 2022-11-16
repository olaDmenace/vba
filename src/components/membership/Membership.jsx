import React from 'react'
import Left from './MembershipLeft'
import Right from './MembershipRight'
import Menu from '../Menu'

const Membership = () => {
    return (
        <div className='grid bg-[#131313] min-h-screen'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-8'>
                <Menu />
            </div>
            <div className='w-11/12 lg:w-10/12 lg:flex mx-auto py-10'>
                <div className='hidden lg:block basis-1/2'>
                    <Left />
                </div>
                <div className='basis-1/2'>
                    <Right />
                </div>
            </div>
        </div>
    )
}

export default Membership