import React from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as Yup from 'yup'


// const schema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Enter a valid email'),
//     password: Yup.string().min(8, 'Password 8 must be characters long').required('Password is required'),
//     confirmPassword: Yup.string().required('Password is compulsory').oneOf([Yup.ref('password')], 'Passwords do not match'),
// })

const RegForm1 = ({ values, handleChange }) => {
    return (
        <>
            <label htmlFor="">
                Email Address
                <Field className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='you@example.com' type="email" name="email" id="email" value={values.email} onChange={handleChange} />
                <ErrorMessage name='email'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
            </label>
            <label htmlFor="">
                Password
                <Field className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Minimum 8 characters' type="password" name="password" id="password" value={values.password} onChange={handleChange} />
                <ErrorMessage name='password'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
            </label>
            <label htmlFor="">
                Confirm Password
                <Field className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Minimum 8 characters' type="password" name="confirmPassword" id="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
                <ErrorMessage name='confirmPassword'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
            </label>
        </>
    )
}

export default RegForm1



// <div>
{/* <form action="" className='grid text-lg text-white/80 gap-7'>
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
            </form> */}
        /* <Formik
initialValues={{ ...formData }}
validationSchema={schema}
>
{({
touched,
errors,
values,
isSubmitting,
handleChange
}) => <Form className='grid text-lg text-white/70 gap-7'>
<label htmlFor="">
Email Address
<Field className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='you@example.com' type="email" name="email" id="email" value={values.email} onChange={handleChange} />
<ErrorMessage name='email'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
</label>
<label htmlFor="">
Password
<Field className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Minimum 8 characters' type="password" name="password" id="password" value={values.password} onChange={handleChange} />
<ErrorMessage name='password'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
</label>
<label htmlFor="">
Confirm Password
<Field className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Minimum 8 characters' type="password" name="confirmPassword" id="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
<ErrorMessage name='confirmPassword'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
</label>
</Form>}
</Formik> */
/* </div> */