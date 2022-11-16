import React from 'react'
import Socials from './Socials'

/*

This is the right hand side of the registration screen that is re-rendered on click of link

**/

const MembershipRight = (props) => {
    return (
        <div className='min-h-screen grid'>
            <div className='grid mih-screen content-center'>
                <div className='lg:hidden space-y-6'>
                    <h1 className='text-Heading1 text-primary font-bold'>Welcome to our community</h1>
                    <p className='font-medium text-white'>Your journey to successful crypto  trading starts here!</p>
                </div>
                <div>
                    <form action="" className='grid text-lg text-white/80 gap-7'>
                        <label htmlFor="">
                            Email Address
                            <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="email" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Password
                            <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="password" name="" id="" />
                        </label>
                        <label htmlFor="">
                            Confirm Password
                            <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="password" name="" id="" />
                        </label>
                        <button className='rounded w-1/3 mx-auto bg-primary text-white active:bg-primary-dark ease-in-out transition-colors duration-500 px-4 py-2' type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
            <div className='self-end'>
                <Socials />
            </div>
        </div>
    )
}

export default MembershipRight