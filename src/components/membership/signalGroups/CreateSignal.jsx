import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useState } from 'react'
import CreateSignal0 from './CreateSignal0'


const CreateSignal = () => {

    const [form, setForm] = useState(0)
    return (
        <div className='grid gap-10'>
            <div className="grid gap-5 lg:flex justify-between">
                <div className="flex items-center gap-3 text-white/70">
                    <div>
                        <ChevronLeftIcon className='h-6' />
                    </div>
                    <div>
                        <h6 className="font-bold text-2xl">New Signal Group</h6>
                        {/* <p>You are editing Bot EMA Cross 50  200 + ADX (Long)</p> */}
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="flex gap-5 text-white/70">
                        <div className="grid justify-items-center">
                            <p className={form === 0 ? `rounded-full bg-primary h-10 w-10 text-center text-3xl` : `rounded-full bg-[#FFFFFF1A] h-10 w-10 text-center text-3xl`}>1</p>
                            <p>Description</p>
                        </div>
                        <div className="grid justify-items-center">
                            <p className={form === 1 ? `rounded-full bg-primary h-10 w-10 text-center text-3xl` : `rounded-full bg-[#FFFFFF1A] h-10 w-10 text-center text-3xl`}>2</p>
                            <p>Configuration</p>
                        </div>
                        <div className="grid justify-items-center">
                            <p className={form === 2 ? `rounded-full bg-primary h-10 w-10 text-center text-3xl` : `rounded-full bg-[#FFFFFF1A] h-10 w-10 text-center text-3xl`}>3</p>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <CreateSignal0 />
            </div>
            <div className='flex gap-5'>
                <button onClick={() => { setForm((form) => form - 1) }} disabled={form === 0} className='py-3 px-4 rounded bg-back-back text-white/70'>Back</button>
                <button onClick={() => { setForm((form) => form + 1) }} className='rounded h-12 px-5 hover:bg-[#66BBDC] text-white bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>
                    {form === 2 ? 'Submit' : 'Next'}
                </button>
            </div>
        </div>
    )
}

export default CreateSignal