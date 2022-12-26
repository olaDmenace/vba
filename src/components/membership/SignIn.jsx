import React, { useEffect } from 'react'
import Menu from '../Menu'
import MembershipLeft from './MembershipLeft'
import MembershipRight from './MembershipRight'
import SignInForm from './regForms/SignInForm'


const SignIn = () => {
    return (
        <div className='grid bg-[#131313] min-h-screen overflow-hidden'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-8 z-20'>
                <Menu />
            </div>
            <div className='w-11/12 md:w-4/5 lg:w-10/12 lg:flex gap-10 lg:pt-[10%] xl:pt-[15%] mx-auto py-10'>
                <div className='hidden lg:block basis-1/2'>
                    <MembershipLeft
                        Title={'Jump right back into your trade'}
                        Desc={'Your journey to successful crypto  trading starts here!'}
                    />
                </div>
                <div className='basis-1/2'>
                    <MembershipRight
                        Heading={'Jump right back into your trade'}
                        Desc={'Your journey to successful crypto  trading starts here!'}
                        Form={(() => (SignInForm()))}
                    />
                </div>
            </div>
        </div>
    )
}

export default SignIn