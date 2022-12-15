import React from 'react'

const RegForm1 = ({ formData, setFormData }) => {
    return (
        <div>
            <form action="" className='grid text-lg text-white/80 gap-7'>
                <label htmlFor="">
                    Email Address
                    <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='you@example.com' type="email" name="" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </label>
                <label htmlFor="">
                    Password
                    <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Minimum 8 characters' type="password" name="" id="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </label>
                <label htmlFor="">
                    Confirm Password
                    <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Minimum 8 characters' type="password" name="" id="confirmPassword" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                </label>
            </form>
        </div>
    )
}

export default RegForm1