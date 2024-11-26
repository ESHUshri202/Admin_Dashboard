import React from 'react'
import { GiCrossMark } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import './List.Users.css'
const ListUsers = () => {
  return (
    <>
      <div className="list-permission">
      <h1>Users List</h1>
      <div className="listpermission-format-main">
        <p>S.No</p>
        <p>Name</p>
        <p>Username</p>
        <p>Email</p>
        <p>Permission</p>
        <p>Status</p>
        <p>Remove/Edit</p>
      </div>
      <div className="listpermission-allusers">
        <hr />
        <div className="listpermission-format-main listpermission-format">
          <p>1</p>
          <p>John Doe</p>
          <p>John12</p>
          <p>john12@example.com</p>
          <p>Full Access</p>
          <p className='act'>Active</p>
          <div className="icon">
            <GiCrossMark/>
            <FaEdit/>
          </div>
        </div>
        <hr />
        <div className="listpermission-format-main listpermission-format">
          <p>1</p>
          <p>John Doe</p>
          <p>John12</p>
          <p>john12@example.com</p>
          <p>Full Access</p>
          <p className='act'>Active</p>
          <div className="icon">
            <GiCrossMark/>
            <FaEdit/>
          </div>
        </div>
        <hr />
        <div className="listpermission-format-main listpermission-format">
          <p>1</p>
          <p>John Doe</p>
          <p>John12</p>
          <p>john12@example.com</p>
          <p>Full Access</p>
          <p className='act'>Active</p>
          <div className="icon">
            <GiCrossMark/>
            <FaEdit/>
          </div>
        </div>
        <hr />
        <div className="listpermission-format-main listpermission-format">
          <p>1</p>
          <p>John Doe</p>
          <p>John12</p>
          <p>john12@example.com</p>
          <p>Full Access</p>
          <p className='act'>Active</p>
          <div className="icon">
            <GiCrossMark/>
            <FaEdit/>
          </div>
        </div>
        <hr />
        <div className="listpermission-format-main listpermission-format">
          <p>1</p>
          <p>John Doe</p>
          <p>John12</p>
          <p>john12@example.com</p>
          <p>Full Access</p>
          <p className='act'>Active</p>
          <div className="icon">
            <GiCrossMark/>
            <FaEdit/>
          </div>
        </div>
        <hr />
        <div className="listpermission-format-main listpermission-format">
          <p>1</p>
          <p>John Doe</p>
          <p>John12</p>
          <p>john12@example.com</p>
          <p>Full Access</p>
          <p className='act'>Active</p>
          <div className="icon">
            <GiCrossMark/>
            <FaEdit/>
          </div>
        </div>
        <hr />
        <div className="listpermission-format-main listpermission-format">
          <p>1</p>
          <p>John Doe</p>
          <p>John12</p>
          <p>john12@example.com</p>
          <p>Full Access</p>
          <p className='act'>Active</p>
          <div className="icon">
            <GiCrossMark/>
            <FaEdit/>
          </div>
        </div>
        <hr />
      </div>
    </div>
    </>
  )
}

export default ListUsers