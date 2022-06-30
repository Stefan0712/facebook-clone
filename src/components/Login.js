import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert} from 'react-bootstrap'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from '../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'

export default function () {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
            
        } catch {
            console.log(error)
            setError("Failed to sign in")
        }
        setLoading(false)
    }
  return (
        <div className='signup'> 
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required ref={emailRef}></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' required ref={passwordRef}></Form.Control>
                        </Form.Group>
                        
                        <Button disabled={loading} className="2-100" type="submit">Log in</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-3'>Need an account? <Link to="/signup">Sign up</Link></div>
            <div className='w-100 text-center mt-2'>
                <Link to="/forgot-password">Forgot password?</Link>
            </div>
        </div>
  )
}
