import React from 'react'

const Memberships = (props) => {
    return (
        <div className='border rounded-lg p-5 h-96 lg:h-full grid'>
            <p>Memberships</p>
            <div>
                <button className='border self-auto mx-auto h-12 px-2 rounded border-primary hover:bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>
                    Invite Members
                </button>
            </div>
            <div>
                <p>Members</p>
                <p className='font-semibold text-3xl'>{props.number}</p>
            </div>
            <div className='grid'>
                {/* <div>
                    <p>Connetion Request</p>
                    <p className='font-semibold text-3xl'>5</p>
                </div> */}
                <p>Active Member Emails</p>
                <div>
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Memberships