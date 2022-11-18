import React, { useState } from 'react'
import RegForm1 from './RegForm1'
import RegForm2 from './RegForm2'
import RegForm3 from './RegForm3'
import { Link } from 'react-router-dom'


const RegistrationForm = () => {

    // Visible form state 
    const [form, setForm] = useState(0)

    // Visible for Selector
    const visibleForm = () => {
        if (form === 0) {
            return <RegForm1 />
        } else if (form === 1) {
            return <RegForm2 />
        } else {
            return <RegForm3 />
        }
    }

    // Text on Button
    const text = () => {
        if (form === 0) {
            return 'Sign Up'
        } else if (form === 1) {
            return 'Next'
        } else {
            return 'Submit'
        }
    }

    return (
        <div className='grid gap-10'>
            <div>
                {visibleForm()}
            </div>
            <button
                className='rounded
                mx-auto
                w-1/2
                py-3
                hover:bg-[#66BBDC]
                text-white
                bg-primary
                active:bg-primary-dark
                ease-in-out transition-colors duration-500'
                type="submit"
                onClick={() => {
                    setForm((form) => (form + 1))
                }}
            >
                {text()}
            </button>
            <p className='text-white text-center'>Already have an account? <Link to={'/'}><span className='text-primary hover:text-[#66BBDC] cursor-pointer'>Sign In</span></Link></p>
        </div>
    )
}

export default RegistrationForm