import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert} from 'react-bootstrap'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { doc, setDoc, getFirestore } from "firebase/firestore"; 
import app from "../firebase"

export default function UpdateProfile() {
    const db = getFirestore(app);
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const usernameRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value!==passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        const promises = [];
        setLoading(true)
        setError('')
        if(emailRef.current.value){
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value!==currentUser.password){
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises).then(()=>{
            navigate("/")
        }).catch(()=>{setError("Failed to update account")}).finally(()=>{
            setLoading(false)
        })
        setDoc(doc(db, "Users",usernameRef.current.value), {
            "username": usernameRef.current.value
          });

        
    }
  return (
    <div className='signup-body'>
        <div className='signup'> 
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type='text' ref={usernameRef}></Form.Control>
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required ref={emailRef} defaultValue={currentUser.email}></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password'  ref={passwordRef} placeholder="Leave blank to keep the same"></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password confirmation</Form.Label>
                            <Form.Control type='password'  ref={passwordConfirmRef} placeholder="Leave blank to keep the same"></Form.Control>
                        </Form.Group>
                        <div className='button-container-update'>

                            <Button disabled={loading} className="2-100 updateProfileBtn" type="submit">Update</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            
        </div>
    </div>
  )
}
