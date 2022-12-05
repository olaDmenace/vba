import React from 'react'

const Memberships = () => {
    return (
        <div className='border rounded-lg p-5 h-96 lg:h-full grid'>
            <p>Total Revenue Generated</p>
            <button className='border h-12 px-2 rounded border-primary hover:bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>
                Invite Members
            </button>
            <div className='grid lg:grid-flow-col'>
                <div>
                    <p>Members</p>
                    <p className='font-semibold text-3xl'>78</p>
                </div>
                <div>
                    <p>Connetion Request</p>
                    <p className='font-semibold text-3xl'>5</p>
                </div>
            </div>
        </div>
    )
}

export default Memberships