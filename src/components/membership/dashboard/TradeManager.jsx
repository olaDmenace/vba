import React from 'react'

const TradeManager = () => {
    return (
        <div className='py-3 px-5'>
            <div className='flex justify-between items-center gap-5'>
                <div className='flex gap-2'>
                    <div className='h-6 w-6 bg-white rounded-full'></div>
                    <p className='text-white/70'>CryptoMas</p>
                </div>
                <button className='rounded h-10 px-5 hover:bg-[#66BBDC] text-white bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>Connect</button>
            </div>
        </div>
    )
}

export default TradeManager