import React from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as Yup from 'yup'


// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// const schema = Yup.object().shape({
//     phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
//     // dob: Yup.date().min(?)
//     // phoneNumber: Yup.string().email('Invalid email').required('Enter a valid email'),
//     // dob: Yup.string().required('Password is compulsory').oneOf([Yup.ref('password')], 'Passwords do not match'),
//     // dob: Yup.string().required("DOB is Required").test("DOB", "Please choose a valid date of birth", (value) => {
//     //     return moment().diff(moment(value), "years") >= 18;
//     // }),
// })

const RegForm3 = ({ values, handleChange }) => {
    return (
        <>
            <label htmlFor="">
                Phone Number
                <Field className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Phone Number' type="text" name="phoneNumber" id="phoneNumber" value={values.phoneNumber} onChange={handleChange} />
                <ErrorMessage name='phoneNumber'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
            </label>
            <label htmlFor="">
                Date of Birth
                <Field className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="date" name="dob" id="dob" value={values.dob} onChange={handleChange} />
                <ErrorMessage name='password'>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
            </label>
        </>
    )
}

export default RegForm3



//     < div >
// {/* <form action="" className='grid text-lg text-white/80 gap-7'>
//                 <label htmlFor="">
//                     Alternate Email
//                     <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="email" name="" id="altMail" placeholder='you@example.com' value={formData.altEmail} onChange={(e) => setFormData({ ...formData, altEmail: e.target.value })} />
//                 </label>
//                 <label htmlFor="">
//                     Date of Birth
//                     <input className='rounded w-full h-10 bg-[#32393C66]/40 px-2' type="date" name="" id="dob" value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
//                 </label>
//                 <p>By clicking on submit, you agree to the <span className='text-primary hover:text-[#66BBDC] cursor-pointer'>Terms of Use</span> and <span className='text-primary hover:text-[#66BBDC] cursor-pointer'>Privacy Policy</span> of VBA</p>
//             </form> */}
//         </div >