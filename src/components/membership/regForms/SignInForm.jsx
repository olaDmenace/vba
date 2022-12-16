import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Spinner Loader import
import { Oval } from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/Oval'

const SignInForm = () => {

    //Collecting data from the input fields
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const submitHandler = (e) => {
        e.preventDefault()
        if (!email && !password) return;

        setIsLoading(true)
        fetch('http://130.185.118.52:1234/api/v1/auth/signin',
            {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            setIsLoading(false)
            if (res.ok) {
                return res.json()
            } else if (res.status === 401) {
                setMessage('Incorrect details, please check and correct')
                throw new Error('incorrect details')
            } else {
                setMessage('Account Not Found')
            }
        }).then(data => {
            if (data.status === 'success' && data.detail.verified === true) {
                setMessage('Login Successful, wait while we redirect to your dashboard')
            } else if (data.status === 'success' && data.detail.verified === false) {
                setMessage('Account Not Verified. Please check your mail')
            }
            console.log(data.detail.token)
        }).catch(err => {
            // console.log(err)
        })
    }

    return (
        <div className='space-y-10'>
            <form onSubmit={submitHandler} action="" className='grid text-lg text-white/80 gap-7'>
                <label htmlFor="">
                    Email Address
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='you@example.com' type="email" name="" id="email" />
                </label>
                <label htmlFor="">
                    Password
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='rounded w-full h-10 bg-[#32393C66]/40 px-2' placeholder='Minimum 8 characters' type="password" name="" id="password" />
                </label>
                <p className='text-primary text-center'>{message}</p>
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
                // disabled={!email && !password}

                >
                    Sign In
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
            </form>
            <p className='text-white text-center'>Do not have an account yet? <Link to={'/SignUp'}><span className='text-primary hover:text-[#66BBDC] cursor-pointer'>Create account</span></Link></p>
        </div>
    )
}

export default SignInForm