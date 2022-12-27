import React from 'react'
import RegForm1 from './RegForm1'
import RegForm2 from './RegForm2'
import RegForm3 from './RegForm3'

const FormComponent = ({ form, values, handleChange }) => {


    if (form === 0) {
        return <RegForm1 values={values} handleChange={handleChange} />
    } else if (form === 1) {
        return <RegForm2 values={values} handleChange={handleChange} />
    } else {
        return <RegForm3 values={values} handleChange={handleChange} />
    }

    // return (
    //     <Form className='grid text-lg text-white/70 gap-7'>
    //         {/* {visibleForm()} */}
    //     </Form>}
    // )
}

export default FormComponent