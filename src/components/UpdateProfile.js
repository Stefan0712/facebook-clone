import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert} from 'react-bootstrap'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
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

        
    }
  return (
        <div className='signup'> 
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
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
                        <Button disabled={loading} className="2-100" type="submit">Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'><Link to="/">Cancel</Link></div>
        </div>
  )
}
