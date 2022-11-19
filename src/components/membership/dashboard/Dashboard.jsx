import React from 'react'
import DashMenu from './DashMenu'

const Dashboard = () => {
    return (
        <div className='bg-back min-h-screen'>
            <div className='w-1/5 fixed top-0 left-0 hidden lg:block'>
                <DashMenu />
            </div>
        </div>
    )
}

export default Dashboard