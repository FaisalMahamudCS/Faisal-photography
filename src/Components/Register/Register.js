import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form} from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';


const Register = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});
    console.log(auth);
   
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    
    if (user) {
     console.log('user', user);  
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
   
    

        await createUserWithEmailAndPassword(email, password);
    
       
        navigate('/');
    }

    return (
        <div className='container'>
            
        <Form onSubmit={handleRegister}>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" ref={emailRef} placeholder="Enter email" required/>
<Form.Text className="text-muted">
  We'll never share your email with anyone else.
</Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" ref={passwordRef} placeholder="Password" required/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
</Form>
<Link to='/register'>Alrady have account? Login Now</Link>
    </div>
    );
};

export default Register;