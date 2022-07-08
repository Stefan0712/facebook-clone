import React, {useState} from 'react'
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from '../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import Profile from './Profile'
import Feed from './Feed'
import CreatePost from './CreatePost'

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const [currentMain, setCurrentMain] = useState(<Feed />)
    const navigate = useNavigate()
    async function handleLogout(){
        setError("")
        try{
            await logout()
            navigate("/login")

        }catch{
            setError("Failed to log out")
        }
    }
    function switchMain(page){
        setCurrentMain(page)
    }
  return (
    <>
        <div className='navbar'>
            <div className='nav-buttons' id='profile-button-nav' onClick={()=>{switchMain(<Profile />)}}>Profile</div>
            <div className='nav-buttons' id='feed-button-nav' onClick={()=>{switchMain(<Feed />)}}>Feed</div>
            <div className='nav-buttons' id="logout-button-nav" onClick={handleLogout}>Log Out</div>
        </div>
        <div className='content'>
            <div className='menu'>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className='top-menu-container'>

                    <strong>Email:</strong>{currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update profile</Link>
                </div>
                <div className='bottom-menu-container'>

                    <CreatePost />
                </div>
            </div>
            <div className='main'>
                {currentMain}
            </div>
            <div className='friends'>

            </div>
        </div>
        
        

    </>
  )
}
