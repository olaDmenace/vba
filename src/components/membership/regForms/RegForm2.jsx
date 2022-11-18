import React from 'react'

const RegForm2 = () => {
    return (
        <div>
            <form action="" className='grid text-lg text-white/80 gap-7'>
                <label htmlFor="">
                    First Name
                    <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="text" name="" id="" placeholder='Your First Name' />
                </label>
                <label htmlFor="">
                    Last Name
                    <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="text" name="" id="" placeholder='Your Last Name' />
                </label>
                <label htmlFor="">
                    Country
                    <select className='rounded w-full h-10 px-2 bg-[#32393C66]/40' name="" id="" placeholder=''>
                        <option value=""></option>
                    </select>
                </label>
            </form>
        </div>
    )
}

export default RegForm2