import React from 'react'

const RegForm3 = ({ formData, setFormData }) => {
    return (
        <div>
            <form action="" className='grid text-lg text-white/80 gap-7'>
                <label htmlFor="">
                    Alternate Email
                    <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="email" name="" id="altMail" placeholder='you@example.com' value={formData.altEmail} onChange={(e) => setFormData({ ...formData, altEmail: e.target.value })} />
                </label>
                <label htmlFor="">
                    Date of Birth
                    <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="date" name="" id="dob" value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
                </label>
                <p>By clicking on submit, you agree to the <span className='text-primary hover:text-[#66BBDC] cursor-pointer'>Terms of Use</span> and <span className='text-primary hover:text-[#66BBDC] cursor-pointer'>Privacy Policy</span> of VBA</p>
            </form>
        </div>
    )
}

export default RegForm3