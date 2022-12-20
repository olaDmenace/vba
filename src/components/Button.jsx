import React from 'react'

const Button = (props) => {
    return (
        <>
            <button onClick={props.Execute} className='rounded h-12 px-5 hover:bg-[#66BBDC] text-white bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>{props.text}</button>
        </>
    )
}

export default Button