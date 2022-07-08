import React from "react";
import { useAuth } from '../context/AuthContext'


const Profile = () => {
    const { currentUser, logout } = useAuth()
    return ( 
        <div className="profile-body">
            <img id="profile-img" alt="Profile image"></img>
            <div>Name:</div>
            <div>Last name:</div>
            <div>Email: {currentUser.Email}</div>
        </div>
     );
}
 
export default Profile;