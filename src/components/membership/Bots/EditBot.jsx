import { ChevronLeftIcon, XCircleIcon } from "@heroicons/react/24/outline"
import EditBot0 from "./EditBot0"
import EditBot1 from './EditBot1'
import EditBot2 from './EditBot2'
import EditBot3 from "./EditBot3"
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { logout } from "../../../store/authSlice"
import Popup from "../../utils/Popup"
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { useNavigate } from "react-router-dom"

const EditBot = () => {



    const [formData, setFormData] = useState({
        symbol: '',
        group_id: '',
        bot_name: '',
        leverage: '',
        bot_action: '',
        margin_mode: '',
        risk_amount: '',
        entry_method: ''
    })

    const dispatch = useDispatch()


    const [show, setShow] = useState(false)
    const [response, setResponse] = useState('')

    const handleSubmit = () => {
        console.log(typeof (formData))
        fetch('https://server.cryptosignal.metrdev.com/api/v1/managers/manageBotConfiguration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('accessToken')
            },
            body: JSON.stringify({
                ...formData
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            if (data.status === 'fail' && data?.detail?.toLowerCase() === 'token expired') {
                dispatch(logout())
                return
            }
            setResponse(data)
            setShow(true)
            if (data.detail === "bot created" && data.status === "success") {
                setTimeout(() => {
                    navigate('/dashboard/Bots')
                }, 3000);
            }
            console.log(data)
        }).catch(err => {

        })
        console.log(formData)
    }

    const [form, setForm] = useState(0)
    const navigate = useNavigate()

    const showForm = () => {
        if (form === 0) {
            return (<EditBot0 formData={formData} setFormData={setFormData} />)
        } else if (form === 1) {
            return (<EditBot1 formData={formData} setFormData={setFormData} />)
        } else if (form === 2) {
            return (<EditBot2 formData={formData} setFormData={setFormData} />)
        } else {
            return (<EditBot3 formData={formData} setFormData={setFormData} />)
        }
    }

    return (
        <div className="grid gap-10">
            <div className="grid gap-5 lg:flex justify-between">
                <div className="flex items-center gap-3 text-white/70">
                    <div>
                        <ChevronLeftIcon onClick={() => navigate(-1)} className='h-6 cursor-pointer' />
                    </div>
                    <div>
                        <h6 className="font-bold text-2xl">Create Bot</h6>
                        {/* <p>You are editing Bot EMA Cross 50  200 + ADX (Long)</p> */}
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="flex gap-5 text-white/70">
                        <div className="grid justify-items-center">
                            <p className={form === 0 ? `rounded-full bg-primary h-10 w-10 text-center text-3xl` : `rounded-full bg-[#FFFFFF1A] h-10 w-10 text-center text-3xl`}>1</p>
                            <p>Bot Type</p>
                        </div>
                        <div className="grid justify-items-center">
                            <p className={form === 1 ? `rounded-full bg-primary h-10 w-10 text-center text-3xl` : `rounded-full bg-[#FFFFFF1A] h-10 w-10 text-center text-3xl`}>2</p>
                            <p>Portfolio</p>
                        </div>
                        <div className="grid justify-items-center">
                            <p className={form === 2 ? `rounded-full bg-primary h-10 w-10 text-center text-3xl` : `rounded-full bg-[#FFFFFF1A] h-10 w-10 text-center text-3xl`}>3</p>
                            <p>Strategy</p>
                        </div>
                        <div className="grid justify-items-center">
                            <p className={form === 3 ? `rounded-full bg-primary h-10 w-10 text-center text-3xl` : `rounded-full bg-[#FFFFFF1A] h-10 w-10 text-center text-3xl`}>4</p>
                            <p>Launch</p>
                        </div>
                    </div>
                </div>
            </div>
            {showForm()}
            <div className='flex gap-5'>
                <button onClick={() => { setForm((form) => form - 1) }} className='py-3 px-4 rounded bg-back-back text-white/70'>Back</button>
                <button onClick={() => { form === 3 ? handleSubmit() : setForm((form) => form + 1) }} className='rounded h-12 px-5 hover:bg-[#66BBDC] text-white bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>
                    {form === 3 ? 'Launch' : 'Next'}
                </button>
            </div>
            {/* {show && <Popup summary={response.detail} icon={response.status === 'success' ? <CheckIcon className='h-10 mx-auto bg-green-600 rounded' /> : <XMarkIcon className='h-10 mx-auto bg-red-500 rounded' />} status={response.status} click={() => setShow(false)} />} */}
            {show && <Popup>
                <div className='grid gap-10'>
                    < div className='flex justify-between items-center' >
                        <p className='text-2xl'>{response}</p>
                        <XCircleIcon onClick={() => (setShow(false))} className='h-6 cursor-pointer' />
                    </div >
                    <div className='space-y-10 pb-10'>
                        <span>{response.status === 'success' ? <CheckIcon className='h-10 mx-auto bg-green-600 rounded' /> : <XMarkIcon className='h-10 mx-auto bg-red-500 rounded' />}</span>
                        <p className='text-center w-2/3 mx-auto'>{response.status}</p>
                    </div>
                </div>
            </Popup>}
        </div>
    )
}

export default EditBot