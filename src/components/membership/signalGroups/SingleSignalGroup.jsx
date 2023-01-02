import React from 'react'

const SingleSignalGroup = (props) => {
    return (
        <div className='px-5 py-3 cursor-pointer' onClick={props.onClick}>
            <div className='flex gap-3 items-center'>
                {/* <div className='rounded-full bg-back-back h-6 w-6'></div> */}
                <img className='rounded-full h-6 w-6' src={props.img} alt="" />
                <div>
                    <p>{props.name}</p>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleSignalGroup