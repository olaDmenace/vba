import React, { useEffect, useState } from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as Yup from 'yup'



// const schema = Yup.object().shape({
//     firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Enter your first name'),
//     lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Enter your first name'),
//     country: Yup.string().required('Select your Country')
// })

const RegForm2 = ({ values, handleChange }) => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/')
            .then(res => {
                return res.json()
            }).then(res => {
                setCountry(res.data)
            }).catch(err => {
            })
    }, [])

    return (
        <>
            <label htmlFor="">
                Firstname
                <Field className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Your First Name' type="text" name="first_name" id="first_name" value={values.first_name} onChange={handleChange} />
                <ErrorMessage name='email'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
            </label>
            <label htmlFor="">
                Lastname
                <Field className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Your Last Name' type="text" name="last_name" id="last_name" value={values.last_name} onChange={handleChange} />
                <ErrorMessage name='password'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
            </label>
            <label htmlFor="">
                Country
                <Field className='rounded w-full h-10 px-2 bg-[#32393C]' as='select' name='country' id="country" placeholder='Select Country' onChange={handleChange}>
                    {country.map(country => <option key={values.country.iso3} value={values.country.country}>{country.country}</option>)}
                    <ErrorMessage name='country'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
                </Field>
            </label>
        </>
    )
}

export default RegForm2

//     < div >
// {/* <form action="" className='grid text-lg text-white/80 gap-7'>
//                 <label htmlFor="">
//                     First Name
//                     <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="text" name="" id="firstName" placeholder='Your First Name' value={formData.first_Name} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
//                 </label>
//                 <label htmlFor="">
//                     Last Name
//                     <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="text" name="" id="lastName" placeholder='Your Last Name' value={formData.last_Name} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
//                 </label>
//                 <label htmlFor="">
//                     Country
//                     <select className='rounded w-full h-10 px-2 bg-[#32393C66]/40' name="" id="country" placeholder='' value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}>
//                         <option value=""></option>
//                     </select>
//                 </label>
//             </form> */}
// {/* <Formik
//                 initialValues={{ ...formData }}
//                 validationSchema={schema}
//             >
//                 {({
//                     touched,
//                     errors,
//                     values,
//                     isSubmitting,
//                     handleChange
//                 }) => <Form className='grid text-lg text-white/70 gap-7'>
//                         <label htmlFor="">
//                             Firstname
//                             <Field className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Your First Name' type="text" name="firstName" id="firstName" value={values.firstName} onChange={handleChange} />
//                             <ErrorMessage name='email'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
//                         </label>
//                         <label htmlFor="">
//                             Lastname
//                             <Field className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Your Last Name' type="text" name="lastName" id="lastName" value={values.lastName} onChange={handleChange} />
//                             <ErrorMessage name='password'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
//                         </label>
//                         <label htmlFor="">
//                             Country
//                             <Field className='rounded w-full h-10 px-2 bg-[#32393C]' as='select' name='country' id="country" placeholder='Select Country' onChange={handleChange}>
//                                 {country.map(country => <option key={values.country.iso3} value={values.country.country}>{country.country}</option>)}
//                                 <ErrorMessage name='country'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
//                             </Field>
//                         </label>
//                     </Form>}
//             </Formik> */}
//         </div >