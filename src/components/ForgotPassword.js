import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert} from 'react-bootstrap'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from '../context/AuthContext'
import {Link} from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        
        try {
            setMessage("")
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        
            
        } catch {
            console.log(error)
            setError("Failed to reset password")
        }
        setLoading(false)
    }
  return (
        <div className='signup'> 
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required ref={emailRef}></Form.Control>
                        </Form.Group>
                        
                        
                        <Button disabled={loading} className="2-100" type="submit">Reset Password</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-3'>Need an account? <Link to="/signup">Sign up</Link></div>
            <div className='w-100 text-center mt-2'>
                <Link to="/login">Log in</Link>
            </div>
        </div>
  )
}
