import React from 'react'
import { RiAdminLine } from 'react-icons/ri'
import { SlLogin } from 'react-icons/sl'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <RiAdminLine className='logo'/>
            <p className=''>Admin Panel</p>
        </div>
        <SlLogin className='navbar-admin-login'/>
    </div>
  )
}

export default Navbar