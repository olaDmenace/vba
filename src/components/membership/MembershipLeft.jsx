import React from 'react'
// import Woman from '../../images/Woman.png'
// import Bg from '../../images /Rectangle.png'

/*

This is the left side of the registration screen that doesn't have to be re-rendered
when a link is is clicked.

**/

const MembershipLeft = (props) => {
    return (
        <div className='relative'>
            <img src="" alt="" />
            <div className='min-h-screen relative'>
                <div className='grid'>
                    <div className='space-y-6'>
                        <h1 className='text-Heading1 text-primary font-bold'>{props.Title}</h1>
                        <p className='font-medium text-white'>{props.Desc}</p>
                    </div>
                </div>
                {/* <div>
                    <img className='absolute top-1/3 left-1/3 h-1/2' src={Woman} alt="" />
                </div> */}
            </div>
        </div >
    )
}

export default MembershipLeft