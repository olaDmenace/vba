import React, { useState } from 'react'
import RegForm1 from './RegForm1'
import RegForm2 from './RegForm2'
import RegForm3 from './RegForm3'
import { Link } from 'react-router-dom'
import { ErrorMessage, Formik, Form } from 'formik'
import * as Yup from 'yup'

// Spinner Loader import
import { Oval } from 'react-loader-spinner'
import FormComponent from './FormComponent'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Enter a valid email'),
    password: Yup.string().min(8, 'Password 8 must be characters long').required('Password is required'),
    confirmPassword: Yup.string().required('Password is compulsory').oneOf([Yup.ref('password')], 'Passwords do not match'),
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Enter your first name'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Enter your first name'),
    country: Yup.string().required('Select your Country'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
})

const RegistrationForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [first_name, setFirst_Name] = useState('')
    const [last_name, setLast_Name] = useState('')
    const [country, setCountry] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [dob, setDob] = useState('')
    // Form data collection
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //     first_name: '',
    //     last_name: '',
    //     country: '',
    //     altEmail: '',
    //     dob: ''

    // })

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (values) => {
        console.log('first')
        console.log(values)
        // e.preventDefault()
        setIsLoading(true)
        fetch('https://server.cryptosignal.metrdev.com/api/v1/auth/createAccount',
            {
                method: 'POST',
                body: JSON.stringify({
                    // 
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
            initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', country: '', dob: '', phoneNumber: '' }}
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
                    <button onClick={() => setForm((form) => (form + 1))}>Next</button>
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
                </Form>}
        </Formik>

    </div>
    )
}

export default RegistrationForm