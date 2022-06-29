import React, {useRef} from 'react'
import { Form, Button, Card} from 'react-bootstrap'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
  return (
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' required ref={emailRef}></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' required ref={passwordRef}></Form.Control>
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Password confirmation</Form.Label>
                    <Form.Control type='password' required ref={passwordConfirmRef}></Form.Control>
                </Form.Group>
                <Button className="2-100" type="submit">Sign up</Button>
            </Form>
        </Card.Body>
    </Card>>
    <div className='w-100 text-center mt-2'>Already have an account? log in</div>
  )
}
