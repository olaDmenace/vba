import React from 'react'

const PopUp = (props) => {
    return (
        <>
            <div className='h-screen w-full bg-black/70 top-0 left-0 absolute grid place-content-center'>
                {/* {props.children} */}
            </div>
            <div className='h-3/4 w-2/3 top-[15%] left-[18%] bg-[#32393C] relative'></div>
        </>
    )
}

export default PopUp