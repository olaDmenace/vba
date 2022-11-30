import React from 'react'

const EditBotHeader = (props) => {
    return (
        <div>
            <div className='flex items-center gap-3'>
                <p className='rounded-full bg-primary h-10 w-10 text-center text-3xl'>{props.number}</p>
                <div className='space-y-2'>
                    <h3 className='font-medium text-lg'>{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default EditBotHeader