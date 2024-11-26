import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import ListUsers from '../../Components/ListUsers/ListUsers'
import ListPermission from '../../Components/ListPermission/ListPermission'
import ListRoles from '../../Components/ListRoles/ListRoles'
import Add_details from '../../Components/Add_details/Add_details'
import './Admin.css'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
            <Route path='/add_details' element={<Add_details/>}/>
            <Route path='/users' element={<ListUsers/>}/>
            <Route path='/permission' element={<ListPermission/>}/>
            <Route path='/roles' element={<ListRoles/>}/>
        </Routes>
    </div>
  )
}

export default Admin