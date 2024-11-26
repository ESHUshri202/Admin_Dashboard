import React from 'react'
import { GiCrossMark } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
const ListRoles = () => {
  return (
    <>
      <div className="list-permission">
      <h1>Roles List</h1>
      <div className="listpermission-format-main">
        <p>S.No</p>
        <p>Name</p>
        <p>Role</p>
        <p>Remove/Edit</p>
      </div>
      <div className="listpermission-allusers">
        <hr />
        <div className="listpermission-format-main listpermission-format">
          <p>1</p>
          <p>Admin</p>
          <p>Full Access</p>
          <div className="icon">
            <GiCrossMark/>
            <FaEdit/>
          </div>
        </div>
        <hr />
        <div className="listpermission-format-main listpermission-format">
          <p>2</p>
          <p>Editor</p>
          <p>Edit Content</p>
          <div className="icon">
            <GiCrossMark/>
            <FaEdit/>
          </div>
        </div>
        <hr />
        <div className="listpermission-format-main listpermission-format">
          <p>3</p>
          <p>Viewer</p>
          <p>View Content</p>
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

export default ListRoles