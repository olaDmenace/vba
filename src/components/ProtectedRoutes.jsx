import React from 'react'
import { useSelector } from 'react-redux'
import SignIn from './membership/SignIn'

const ProtectedRoutes = (props) => {

    const authenticated = useSelector((state) => state.auth.isAuthenticated)
    return (
        <>
            {authenticated ? props.children : <SignIn />}
        </>
    )
}

export default ProtectedRoutes