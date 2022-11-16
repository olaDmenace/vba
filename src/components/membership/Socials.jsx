import React from 'react'
import Telegram from '../../images/Telegram.png'
import Google from '../../images/Google.png'
import Apple from '../../images/Apple.png'

const Socials = () => {
    return (
        <div className='space-y-5'>
            <div className='flex justify-around items-center text-white/80'>
                <hr className='basis-1/5' />
                <p className='basis-3/5 text-center'>or continue with</p>
                <hr className='basis-1/5' />
            </div>
            <div className='flex justify-evenly'>
                <div className='bg-[#32393C33]/20 h-12 w-12 p-1 cursor-pointer'>
                    <img src={Telegram} alt="" />
                </div>
                <div className='bg-[#32393C33]/20 h-12 w-12 p-1 cursor-pointer'>
                    <img src={Google} alt="" />
                </div>
                <div className='bg-[#32393C33]/20 h-12 w-12 p-1 cursor-pointer'>
                    <img src={Apple} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Socials