import React from 'react'

const PopUp = (props) => {
    return (
        <div className='h-screen w-full bg-black/70 -top-5 left-0 absolute grid place-content-center'>
            {props.children}
        </div>
    )
}

export default PopUp