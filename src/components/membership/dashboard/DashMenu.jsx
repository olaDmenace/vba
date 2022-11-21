import React from 'react'
import DashMenuBottom from './DashMenuBottom'
import DashMenuTop from './DashMenuTop'
import MenuItem from './MenuItem'


const DashMenu = () => {
    return (
        <div className='bg-back-light h-full'>
            <div className='grid gap-6 divide-y divide-white/40 border-y border-white/40 py-6'>
                <div className='w-4/5 mx-auto'>
                    <DashMenuTop />
                </div>
                <div className='pt-6'>
                    <DashMenuBottom />
                </div>
            </div>
            <div className='py-20 w-4/5 mx-auto'>
                <MenuItem
                    Icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>}
                    Title={'Dark Mode'}
                />
            </div>
        </div>
    )
}

export default DashMenu