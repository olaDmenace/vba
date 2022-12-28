import React, { useState } from 'react'
import RegForm1 from './RegForm1'
import RegForm2 from './RegForm2'
import RegForm3 from './RegForm3'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

// Spinner Loader import
import { Oval } from 'react-loader-spinner'
import FormComponent from './FormComponent'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Enter a valid email'),
    password: Yup.string().min(8, 'Password 8 must be characters long').required('Password is required'),
    confirmPassword: Yup.string().required('Password is compulsory').oneOf([Yup.ref('password')], 'Passwords do not match'),
    first_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Enter your first name'),
    last_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Enter your first name'),
    country: Yup.string().required('Select your Country'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
})

// https://server.cryptosignal.metrdev.com/api/v1/auth/createAccount

const RegistrationForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState('')
    const handleSubmit = ({ last_name, first_name, email, password, country, dob }) => {
        // e.preventDefault()
        setIsLoading(true)
        fetch('https://server.cryptosignal.metrdev.com/api/v1/auth/createAccount',
            {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    first_name,
                    last_name,
                    country,
                    dob
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            setIsLoading(false)
            return res.json()
        }).then(data => {
            console.log(data)
            setResponse(data)
        }).catch(err => {
            console.log(err)
        })

        console.log(last_name, first_name, email, password, country, dob)
    }


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
    // form === 2 ? submitHandler() : setForm((form) => (form + 1))
    return (<div className='grid gap-10 text-white/70'>
        <Formik className='grid gap-10'
            initialValues={{ last_name: '', first_name: '', email: '', password: '', country: '', dob: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({
                touched,
                errors,
                isSubmitting,
                values,
                handleSubmit,
                handleChange
            }) => <Form onSubmit={handleSubmit} className='grid gap-10'>
                    <FormComponent values={values} form={form} handleChange={handleChange} />
                    {/* {!isLoading && <button
                        className='rounded
                mx-auto
                w-1/2
                py-3
                hover:bg-[#66BBDC]
                text-white
                bg-primary
                active:bg-primary-dark
                ease-in-out transition-colors duration-500'
                        type='button'
                        onClick={handleSubmit}
                    >
                        {text()}
                    </button>} */}
                    {!isLoading && <button disabled={form === 0 || form === 1} className={form === 2 ? 'bg-primary hover:bg-primary-light active:bg-primary-dark mx-auto px-3 py-2 rounded' : 'border-primary border mx-auto px-3 py-2 rounded'} type='submit'>Submit</button>}
                    {/* <button type='submit'>Submit</button> */}
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
                </Form>}
        </Formik>
        {!isLoading && <div className='mx-auto'>
            <button className={form === 0 ? 'border-primary border mx-auto px-3 py-2 rounded-l' : 'bg-primary border-primary hover:bg-primary-light active:bg-primary-dark mx-auto px-3 py-2 rounded-l'} disabled={form === 0} onClick={() => setForm((form) => (form - 1))}>Prev</button>
            <button className={form === 2 ? 'border-primary border mx-auto px-3 py-2 rounded-r' : 'bg-primary border-primary hover:bg-primary-light active:bg-primary-dark mx-auto px-3 py-2 rounded-r'} disabled={form === 2} onClick={() => setForm((form) => (form + 1))}>Next</button>
        </div>}
        <p className='text-primary text-center'>{response.detail}</p>
        <p className='text-white text-center'>Already have an account? <Link to={'/'}><span className='text-primary hover:text-[#66BBDC] cursor-pointer'>Sign In</span></Link></p>

    </div>
    )
}

export default RegistrationForm