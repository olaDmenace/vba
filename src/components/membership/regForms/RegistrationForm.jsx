import React, { useState } from 'react'
import RegForm1 from './RegForm1'
import RegForm2 from './RegForm2'
import RegForm3 from './RegForm3'
import { Link } from 'react-router-dom'


// Spinner Loader import
import { Oval } from 'react-loader-spinner'


const RegistrationForm = () => {

    // Form data collection
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        // confirmPassword: '',
        // firstName: '',
        // lastName: '',
        // country: '',
        // altEmail: '',
        // dob: ''

    })

    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = (e) => {
        setIsLoading(true)
        fetch('https://server.cryptosignal.metrdev.com/api/v1/auth/createAccount',
            {
                method: 'POST',
                body: JSON.stringify({
                    ...formData
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            setIsLoading(false)
            if (res.ok) {
                alert('Account Created Successfully! Verify Account')
            } else {
                console.log(res)
            }
        })
    }


    // Visible form state 
    const [form, setForm] = useState(0)

    // Visible for Selector
    const visibleForm = () => {
        if (form === 0) {
            return <RegForm1 formData={formData} setFormData={setFormData} />
        } else if (form === 1) {
            return <RegForm2 formData={formData} setFormData={setFormData} />
        } else {
            return <RegForm3 formData={formData} setFormData={setFormData} />
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
        <div onSubmit={submitHandler} className='grid gap-10'>
            <div>
                {visibleForm()}
            </div>
            {!isLoading && <button
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
                    if (form === 2) {
                        submitHandler()
                    } else {
                        setForm((form) => (form + 1))
                    }
                }}
            >
                {text()}
            </button>}
            {isLoading && <div className='mx-auto w-fit text-center'>
                <Oval
                    height={30}
                    width={30}
                    color="#00B6FF"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#24718C"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </div>}
            <p className='text-white text-center'>Already have an account? <Link to={'/'}><span className='text-primary hover:text-[#66BBDC] cursor-pointer'>Sign In</span></Link></p>
        </div>
    )
}

export default RegistrationForm