import React from 'react'

const RegForm1 = () => {
    return (
        <div>
            <form action="" className='grid text-lg text-white/80 gap-7'>
                <label htmlFor="">
                    Email Address
                    <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='you@example.com' type="email" name="" id="" />
                </label>
                <label htmlFor="">
                    Password
                    <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Minimum 8 characters' type="password" name="" id="" />
                </label>
                <label htmlFor="">
                    Confirm Password
                    <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Minimum 8 characters' type="password" name="" id="" />
                </label>
            </form>
        </div>
    )
}

export default RegForm1