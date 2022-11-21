import React from 'react'
import DashMenu from './DashMenu'
import Logo from '../../../images/Logo.png'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='bg-back'>
            <div className='w-screen px-8 bg-back-light border-b border-white/40'>
                <Link>
                    <img src={Logo} alt="VBA Logo" />
                </Link>
            </div>
            <div className='grid lg:grid-cols-12 min-h-screen'>
                <div className='col-span-2'>
                    <DashMenu />
                </div>
                <div className='lg:col-span-10 bg-back-light m-8 rounded-lg'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard