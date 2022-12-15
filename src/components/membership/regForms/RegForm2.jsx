import React from 'react'

const RegForm2 = ({ formData, setFormData }) => {
    return (
        <div>
            <form action="" className='grid text-lg text-white/80 gap-7'>
                <label htmlFor="">
                    First Name
                    <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="text" name="" id="firstName" placeholder='Your First Name' value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                </label>
                <label htmlFor="">
                    Last Name
                    <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="text" name="" id="lastName" placeholder='Your Last Name' value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                </label>
                <label htmlFor="">
                    Country
                    <select className='rounded w-full h-10 px-2 bg-[#32393C66]/40' name="" id="country" placeholder='' value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}>
                        <option value=""></option>
                    </select>
                </label>
            </form>
        </div>
    )
}

export default RegForm2