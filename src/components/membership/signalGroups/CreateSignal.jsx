import { CheckIcon, ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/authSlice'
import CreateSignal0 from './CreateSignal0'
import CreateSignal1 from './CreateSignal1'
import Popup from '../../utils/Popup'
import { useNavigate } from 'react-router-dom'
import { XCircleIcon } from '@heroicons/react/24/outline'


const CreateSignal = () => {

    const [form, setForm] = useState(0)
    const activeform = () => {
        if (form === 0) {
            return <CreateSignal0 formData={formData} setFormData={setFormData} />
        } else {
            return <CreateSignal1 formData={formData} setFormData={setFormData} />
        }
    }

    const [formData, setFormData] = useState({
        group_name: '',
        group_desc: '',
        group_url: 'https://res.cloudinary.com/dgpnmwhra/image/upload/v1655242003/neutron_images/dash_mqaxfv.png',
        pricing_fee: 0,
        min_allocation: 0,
        max_allocation: '',
        pricing_type: '',
        privacy: ''
    })

    const [response, setResponse] = useState('')
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const submitHandler = () => {
        console.log(formData)
        fetch('https://server.cryptosignal.metrdev.com/api/v1/managers/manageSignalGroups',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('accessToken')
                },
                body: JSON.stringify({
                    ...formData
                })
            }
        ).then(res => {
            return res.json()
        }).then(data => {
            setResponse(data)
            setShow(true)
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }

    const navigate = useNavigate()
    const closeModal = () => {
        setShow(false)
        setTimeout(() => {
            navigate('/dashboard')
        }, 2000);
    }


    return (
        <div className='grid gap-10'>
            <div className="grid gap-5 lg:flex justify-between">
                <div className="flex items-center gap-3 text-white/70">
                    <div>
                        <ChevronLeftIcon onClick={() => navigate(-1)} className='h-6 cursor-pointer' />
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
                        {/* <div className="grid justify-items-center">
                            <p className={form === 2 ? `rounded-full bg-primary h-10 w-10 text-center text-3xl` : `rounded-full bg-[#FFFFFF1A] h-10 w-10 text-center text-3xl`}>3</p>
                            <p>Contact</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div>
                {activeform()}
            </div>
            <div className='flex gap-5'>
                <button onClick={() => { setForm((form) => form - 1) }} disabled={form === 0} className='py-3 px-4 rounded bg-back-back text-white/70'>Back</button>
                <button onClick={() => { form === 1 ? submitHandler() : setForm((form) => form + 1) }} className='rounded h-12 px-5 hover:bg-[#66BBDC] text-white bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>
                    {form === 1 ? 'Submit' : 'Next'}
                </button>
            </div>
            {/* {show && <Popup summary={response.detail} icon={response.status === 'success' ? <CheckIcon className='h-10 mx-auto bg-green-600 rounded' /> : <XMarkIcon className='h-10 mx-auto bg-red-500 rounded' />} status={response.status} click={() => closeModal()} />} */}
            {show && <Popup>
                <div className='grid gap-10'>
                    < div className='flex justify-between items-center' >
                        <p className='text-2xl'>{response}</p>
                        <XCircleIcon onClick={() => (closeModal())} className='h-6 cursor-pointer' />
                    </div >
                    <div className='space-y-10 pb-10'>
                        <span>{response.status === 'success' ? <CheckIcon className='h-10 mx-auto bg-green-600 rounded' /> : <XMarkIcon className='h-10 mx-auto bg-red-500 rounded' />}</span>
                        <p className='text-center w-2/3 mx-auto'>{response.detail}</p>
                    </div>
                </div>
            </Popup>}
        </div>
    )
}

export default CreateSignal