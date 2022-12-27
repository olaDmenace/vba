import React from 'react'
import DashMenu from './DashMenu'
import Logo from '../../../images/Logo.png'
import { Link, Outlet } from 'react-router-dom'
import { BellIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Boiler = () => {


    const { first_name, last_name } = useSelector(state => state.auth.user)


    return (
        <div className='bg-back'>
            <div className='px-8 bg-back-light border-b border-white/40 flex justify-between items-center text-white/70'>
                <Link>
                    <img src={Logo} alt="VBA Logo" />
                </Link>
                <div className='hidden lg:block'>
                    <div className='flex gap-5 items-center relative'>
                        <span className='bg-[#F32C2C] w-4 h-4 rounded-full absolute left-[6%] -top-[20%] border-[3px] border-back-light'></span>
                        <BellIcon className='h-5' />
                        <div>
                            <img className='rounded-full' src="" alt="" />
                            <p>{`${first_name} ${last_name}`}</p>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-8 text-white md:hidden'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className='grid md:grid-cols-12 min-h-screen'>
                <div className='col-span-2 hidden md:block'>
                    <DashMenu />
                </div>
                <div className='md:col-span-10 bg-back-light m-8 rounded-lg p-6 overflow-hidden'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Boiler