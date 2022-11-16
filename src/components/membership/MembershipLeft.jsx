import React from 'react'
// import Woman from '../../images/Woman.png'
// import Bg from '../../images /Rectangle.png'

/*

This is the left side of the registration screen that doesn't have to be re-rendered
when a link is is clicked.

**/

const MembershipLeft = () => {
    return (
        <div className='relative'>
            <img src="" alt="" />
            <div className='min-h-screen relative'>
                <div className='grid min-h-screen content-auto'>
                    <div className='space-y-6'>
                        <h1 className='text-Heading1 text-primary font-bold'>Welcome to our community</h1>
                        <p className='font-medium text-white'>Your journey to successful crypto  trading starts here!</p>
                    </div>
                </div>
                {/* <div className='relative'>
                    <img className='absolute ' src={Woman} alt="" />
                </div> */}
            </div>
        </div>
    )
}

export default MembershipLeft