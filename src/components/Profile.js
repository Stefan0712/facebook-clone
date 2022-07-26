import React from "react";
import { useAuth } from '../context/AuthContext'
import { Link } from "react-router-dom"
import "./profile.css"


const Profile = () => {
    const { currentUser, logout } = useAuth()
    return ( 
        <div className="profile-body">
            <div className="profile-img-container">
                <img id="profile-img" alt="Profile image"></img>
            </div>
            <div className="profile-info">Name:</div>
            <div className="profile-info">Last name:</div>
            <div className="profile-info">Email: {currentUser.Email}</div>
        </div>
     );
}
 
export default Profile;