import React from 'react'
import { BiUser } from 'react-icons/bi'
import { FcDepartment } from 'react-icons/fc'
import { TbAuth2Fa } from 'react-icons/tb'
import {Link} from 'react-router-dom'
import './Sidebar.css'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/add_details'} style={{textDecoration:"none"}}>
            <div className='sidebar-item'>
                <BiUser/>
                <p>Add Details</p>
            </div>
        </Link>
        <Link to={'/users'} style={{textDecoration:"none"}}>
            <div className='sidebar-item'>
                <BiUser/>
                <p>Users</p>
            </div>
        </Link>
        <Link to={'/permission'} style={{textDecoration:"none"}}>
            <div className='sidebar-item'>
                <BiUser/>
                <p>Permission</p>
            </div>
        </Link>
        <Link to={'/roles'} style={{textDecoration:"none"}}>
            <div className='sidebar-item'>
                <BiUser/>
                <p>Roles</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar