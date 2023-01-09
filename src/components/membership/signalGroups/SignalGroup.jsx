import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../store/authSlice'
import Balance from '../dashboard/Balance'
import ExchangeWallet from '../dashboard/ExchangeWallet'
import img from './../../../images/Altercation.png'
import Memberships from './Memberships'
import SingleSignalGroup from './SingleSignalGroup'
// import SignalGroupTable from './SignalGroupTable'
import TotalRevenueTable from './TotalRevenueTable'
import Popup from '../../utils/Popup'
import Button from '../../Button'


// Spinner Loader import
import { Oval } from 'react-loader-spinner'
import { CheckIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'

const SignalGroup = () => {
    const [groups, setGroups] = useState(true)

    const changeGroup = () => {
        setGroups(!groups)
    }


    const [groupList, setGroupList] = useState([])

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)

    const role = useSelector(state => state.auth.user.trade_manager)

    useEffect(() => {
        const URL = role === true ? 'https://server.cryptosignal.metrdev.com/api/v1/managers/viewOtherSignalGroups' : 'https://server.cryptosignal.metrdev.com/api/v1/user/viewGroupConfiguration'
        fetch(URL, {
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        }).then(res => {
            return res.json()
        }).then(res => {
            if (res.status === 'fail' && res?.detail?.toLowerCase() === 'token expired') {
                dispatch(logout())
                return
            }
            // if (role === false) {
            //     setGroups(false)
            // }
            setSummaryGroups(res.detail[0])
            setGroupList(res.detail)
            // setGroupDetail(res.detail)
            setIsLoading(false)
            // console.log(groupList)
            // console.log(res.detail)
        }).catch(err => {

        })
    }, [])


    const [summaryGroups, setSummaryGroups] = useState([])
    const getDetails = (arg) => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/user/viewSingleGroupConfig?' + new URLSearchParams({ group_id: arg }), {
            // body: JSON.stringify({
            //     bot_id: props.id
            // }),
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        }).then(res => {
            console.log(localStorage.getItem('accessToken'))
            return res.json()
        }).then(res => {
            setSummaryGroups(res.detail)
            setShow(true)
            console.log(res)
        })
        console.log('first')
    }


    // fetch for trade manager's signal group
    const [groupDetail, setGroupDetail] = useState([])
    const [exist, setExist] = useState(true)
    useEffect(() => {
        const URL = role === true ? 'https://server.cryptosignal.metrdev.com/api/v1/managers/manageSignalGroups' : 'https://server.cryptosignal.metrdev.com/api/v1/user/viewGroupConfiguration'
        fetch(URL, {
            method: 'GET',
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        }).then(res => {
            return res.json()
        }).then(res => {
            if (res.status === 'fail' && res?.detail?.toLowerCase() === 'token expired') {
                dispatch(logout())
                return
            }
            // setGroupList(res.detail)
            if (role === true && res.detail.length > 0) {
                setExist(false)
                setShow(true)
                setMemmberSum(res.detail[0])
                setMems(res.detail[0])
                setGroupDetail(res.detail)
                setIsLoading(false)
            } else if (role === false && res.detail.length > 0) {
                console.log(res)
                setExist(false)
                setSummaryGroups(res.detail[0])
                setShow(true)
                setGroupDetail(res.detail)
                setIsLoading(false)
                setGroups(false)
            }
            // setUserGroups(res.detail)
            // setIsLoading(false)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    // Become a trade manager request
    // Popup will be refactored later
    const [tradeRequest, setTraderequest] = useState('Confirm')
    const [requestSummary, setRequestSummary] = useState('Are you sure you want to become a trade manager?')
    const [icon, setIcon] = useState(<QuestionMarkCircleIcon className='h-10 rounded-full text-white/70 mx-auto bg-primary' />)
    const tradeManager = () => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/user/becomeTradeManager', {
            method: 'POST',
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        }).then(res => {
            return res.json()
        }).then(res => {
            setPopup(true)
            setTraderequest(res.detail)
            if (res.detail === 'success') {
                setRequestSummary('Please, login again to continue')
                setIcon(<CheckIcon className='h-10 mx-auto bg-green-600 rounded' />)
                setTimeout(() => {
                    dispatch(logout())
                }, 3000);
            } else {
                setRequestSummary('Please, try again')
                setIcon(<XMarkIcon className='h-10 mx-auto bg-red-500 rounded' />)
            }
            console.log(res)
        }).catch(res => {
            console.log(res)
        })
    }

    // Popup Control
    const [popup, setPopup] = useState(false)
    const [show, setShow] = useState(false)

    // Fetch for memberships list and group summary created by the group manager
    const [mems, setMems] = useState()
    const [memberSum, setMemmberSum] = useState()
    const listMembers = (arg) => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/managers/viewSingleGroupConfig?' + new URLSearchParams({ group_id: arg }), {
            // body: JSON.stringify({
            //     bot_id: props.id
            // }),
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        }).then(res => {
            console.log(localStorage.getItem('accessToken'))
            return res.json()
        }).then(res => {
            console.log(res.detail.members)
            setMemmberSum(res.detail.group_data)
            setMems(res.detail.members)
            setShow(true)
        }).catch(err => {
            console.log(err)
        })
    }



    return (
        <div className='bg-back-back p-5 rounded-lg text-white/70 grid gap-5'>
            <div className='grid gap-5'>
                <div className='flex justify-between'>
                    {role === true ?
                        <div className='flex gap-5'>
                            <button className={groups ? `text-white/70 bg-[#00B6FF33] py-2 px-2 rounded` : `text-white/70`} disabled={groups ? true : false} onClick={changeGroup}>Groups You Manage</button>
                            <button className={!groups ? `text-white/70 bg-[#00B6FF33] py-2 px-2 rounded` : `text-white/70`} disabled={!groups ? true : false} onClick={changeGroup}>Other Signal Groups</button>
                        </div> : <p>Signal Groups</p>}
                    <div className='grid lg:grid-flow-col gap-5'>
                        <Link to={role === true ? '/dashboard/CreateSignal' : ''} className='text-primary hover:text-primary-light active:text-primary-dark'>{role === true ? 'Create a New Signal Group' : <button onClick={() => setPopup(true)}>Become a Trade Manager</button>}</Link>
                        {role === false ? <Link to={'/dashboard/SignalPage'} className='text-primary hover:text-primary-light active:text-primary-dark'>Connect to Signal Group</Link> : ''}
                    </div>
                </div>
                {/* {popup && <Popup
                    status={tradeRequest}
                    summary={requestSummary}
                    icon={icon} click={() => setPopup(!popup)}
                />} */}
                {popup && <Popup>
                    <div className='grid gap-10'>
                        < div className='flex justify-between items-center' >
                            <p className='text-2xl'>{tradeRequest}</p>
                            <XCircleIcon onClick={() => setPopup(!popup)} className='h-6 cursor-pointer' />
                        </div >
                        <div className='space-y-10 pb-10'>
                            <span>{icon}</span>
                            <p className='text-center w-2/3 mx-auto'>{requestSummary}</p>
                        </div>
                        <Button text={'Confirm'} Execute={() => tradeManager()} />
                    </div>
                </Popup>}
                {/* {groups && <div className='grid lg:grid-flow-col gap-5 lg:grid-cols-2'> */}
                {groups && <div className={role === false ? `grid grid-flow-col lg:grid-cols-2 gap-5` : 'grid lg:grid-flow-col lg:grid-cols-3 gap-5'}>
                    <div className='border rounded-lg p-5 grid gap-5'>
                        {/* <div>
                            {setGroupList.map(item => <SingleSignalGroup
                                img={item.group_url}
                                name={item.group_name}
                            />)}
                        </div> */}
                        {exist && <img className='mx-auto' src={img} alt="" />}
                        {role === true ? <div>
                            {!exist && <div>{
                                groupDetail.map(list => <SingleSignalGroup
                                    onClick={() => listMembers(list?.signal_id)}
                                    img={list?.group_url}
                                    name={list?.group_name}
                                />)
                            }</div>}
                        </div> :
                            <div>
                                {!exist && <div>{
                                    groupDetail.map(list => <SingleSignalGroup
                                        img={list?.group_data?.group_url}
                                        name={list?.group_data?.group_name}
                                    />)
                                }
                                </div>}
                            </div>}
                    </div>
                    {exist && <div className='border rounded-lg p-5 h-96 lg:h-full grid'>
                        <p>We've pre-selected a few premium partners for a trial of their service.</p>
                        <div className='grid justify-items-center gap-5'>
                            <Link to={'/dashboard/SignalPage'} className='border h-12 px-2 flex items-center gap-1 rounded border-primary hover:bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>
                                <PlusCircleIcon className='h-6' />
                                Connect With a Signal Group
                            </Link>
                            {/* <p>or</p>
                            <p className='hover:text-[#66BBDC] text-primary active:text-primary-dark ease-in-out transition-colors duration-500'>Create a New Signal Group</p> */}
                        </div>
                    </div>}
                    {!exist && <TotalRevenueTable
                        show={show}
                        key={''}
                        img={memberSum?.group_url}
                        name={memberSum?.group_name}
                        min={`${memberSum?.min_allocation} USDT`}
                        max={`${memberSum?.max_allocation} USDT`}
                        pfee={memberSum?.pricing_fee}
                        win={memberSum?.win_rate}
                    />}
                    {role === false ? '' : <Memberships number={mems?.length} />}
                </div>}
                {!groups && <div className='grid grid-flow-col lg:grid-cols-2 gap-5'>
                    <div className='border rounded-lg divide-y py-3'>
                        <p className='pb-3 px-5'>Signal Groups You Belong To:</p>
                        {isLoading && <div className='mx-auto w-fit text-center pt-5'>
                            <Oval
                                height={50}
                                width={50}
                                color="#00B6FF"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#24718C"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                            />
                        </div>}
                        {!isLoading && <div>
                            {groupList.map(groupList => <SingleSignalGroup
                                onClick={() => getDetails(groupList.group_data.group_id)}
                                key={groupList?.group_data?.group_id}
                                img={groupList?.group_data?.group_url}
                                name={groupList?.group_data?.group_name}
                                desc={groupList?.group_data?.group_desc}
                            />)}
                        </div>}
                    </div>
                    {!isLoading && <TotalRevenueTable
                        show={show}
                        key={summaryGroups?.group_data?.group_id}
                        img={summaryGroups?.group_data?.group_url}
                        name={summaryGroups?.group_data?.group_name}
                        visibility={summaryGroups?.group_data?.visibility}
                        min={`${summaryGroups?.group_data?.min_allocation} USDT`}
                        max={`${summaryGroups?.group_data?.max_allocation} USDT`}
                        pfee={summaryGroups?.group_data?.pricing_fee}
                        win={memberSum?.win_rate}
                    // key={groupList[0]?.group_data?.group_id}
                    // img={groupList[0]?.group_data?.group_url}
                    // name={groupList[0]?.group_data?.group_name}
                    // visibility={groupList[0]?.group_data?.visibility}
                    // min={`${groupList[0]?.group_data?.min_allocation} USDT`}
                    // max={`${groupList[0]?.group_data?.max_allocation} USDT`}
                    // pfee={groupList[0]?.group_data?.pricing_fee}
                    />}
                </div>}
            </div>
        </div>
    )
}

export default SignalGroup