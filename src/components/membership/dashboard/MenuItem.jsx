import React from 'react'
import { NavLink } from 'react-router-dom'



/**
 * This component is an individual menu item on the dashboard
 * The Icon props handles the image
 * The Title props handles the name of the menu
 */

const MenuItem = (props) => {
    return (
        <div>
            <div className='divide-y divide-white/10'>
                <NavLink to={props.Link} className='text-white/40 flex items-center gap-3 hover:text-primary active:bg-primary'>
                    <div>{props.Icon}</div>
                    <p className='font-semibold'>{props.Title}</p>
                </NavLink>
            </div>
        </div>
    )
}

export default MenuItem