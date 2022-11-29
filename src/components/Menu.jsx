import React from 'react'
import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <div className='flex justify-between items-center text-white z-50'>
                <Link to={'/'}>
                    <img src={Logo} alt="" />
                </Link>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 lg:hidden cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <div className='hidden lg:block'>
                        <div className='flex gap-8 items-center'>
                            <div className='flex gap-8'>
                                <Link to={'/dashboard'}>Home</Link>
                                <p>Marketplace</p>
                                <p>Help Center</p>
                                <p>Pricing</p>
                                <p>About Us</p>
                            </div>
                            <p className='cursor-pointer rounded border border-primary hover:bg-primary hover:text-white active:bg-primary-dark ease-in-out transition-colors duration-500 px-4 py-2'>Login</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu