import React from 'react'

const Memberships = () => {
    return (
        <div className='rounded border py-5 h-96'>
            <div className='px-5 flex justify-between gap-5 text-white/70 border-b'>
                <div className='pb-5'>
                    <p className='font-medium'>Memberships</p>
                    <p>Trade Manager Signal Groups You Belong to</p>
                </div>
                <p className='text-primary hover:text-primary-light active:text-primary-dark cursor-pointer'>View All</p>
            </div>
        </div>
    )
}

export default Memberships