import React from "react";
import "./Add_details.css";
const Add_details = () => {
  return (
    <div className="users">
      <div className="add-users-details">
        <div className="title">
          <h1>User Details</h1>
        </div>
        <div className="name-details">
          <div>
            <h2>First Name</h2>
            <input className="details" type="text" placeholder="First Name" name="firstname" />
          </div>
          <div>
            <h2>Last Name</h2>
            <input className="details" type="text" placeholder="Last Name" name="lastname" />
          </div>
        </div>
        <div className="name-details">
            <div className="username">
            <h2>Username</h2>
            <input className="details" type="text" placeholder="Enter username" name="username" />
            </div>
            <div className="username">
            <h2>Phone Number</h2>
            <input className="details" type="text" placeholder="Enter Phone Number" name="username" />
            </div>
        </div>
        <div className="name-details">
            <div className="username">
            <h2>Email Id</h2>
            <input className="details" type="email" placeholder="Enter email id " name="email" />
            </div>
            <div>
            <h2>Password</h2>
            <input className="details" type="password" placeholder="Enter Password" name="password" />
            </div>
        </div>
        <div className="roles-details">
          <h2 className="role">Role</h2>
          <div className="role-option">
            <div className="admin">
                <label htmlFor="#">
                <input type="checkbox" placeholder="Admin" />
                Admin
                </label>
            </div>
            <div className="editor">
                <label htmlFor="#">
                <input type="checkbox" placeholder="Editor" />
                Editor
                </label>
            </div>
            <div className="viewer">
                <label htmlFor="#">
                <input type="checkbox" placeholder="Viewer" />
                Viewer
                </label>
            </div>
          </div>
        </div>
        <div className="roles-details">
          <div>
            <h2>Permision</h2>
          </div>
          <div className="role-option">
            <label htmlFor="#">
              <input type="checkbox" />
              Read/Write
            </label>
            <label htmlFor="#">
              <input type="checkbox" />
              Read
            </label>
            <label htmlFor="#">
              <input type="checkbox" />
              Write
            </label>
          </div>
          <button className="submit">Add Button</button>
        </div>
      </div>
    </div>
  );
};

export default Add_details;
