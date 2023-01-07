import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

const RegistrationForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState('')
    const navigate = useNavigate()
    const handleSubmit = ({ last_name, first_name, email, password, country, dob }) => {
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
            setResponse(data)
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }).catch(err => {
        })
    }


    // Visible form state 
    const [form, setForm] = useState(0)

    // Visible for Selector
    // const visibleForm = () => {
    //     if (form === 0) {
    //         return <RegForm1 />
    //     } else if (form === 1) {
    //         return <RegForm2 />
    //     } else {
    //         return <RegForm3 />
    //     }
    // }

    // // Text on Button
    // const text = () => {
    //     if (form === 0) {
    //         return 'Sign Up'
    //     } else if (form === 1) {
    //         return 'Next'
    //     } else {
    //         return 'Submit'
    //     }
    // }

    return (<div className='grid gap-10 text-white/70'>
        <Formik className='grid gap-10'
            initialValues={{ last_name: '', first_name: '', email: '', password: '', country: 'afghanistan', dob: '' }}
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