import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form} from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';


const Register = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    //error
    let registerError;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});
    //mail varification
    console.log(auth);
   
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    
   

    const handleRegister = async (event) => {
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
   
    
        
        await createUserWithEmailAndPassword(email, password);
        navigate('/');
       //navigate to home
    
    }
   

    return (
        <div className='container mt-5 col-lg-6 col-sm-12  mx-auto card'>
            
        <Form onSubmit={handleRegister} className='m-5'>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" ref={emailRef} placeholder="Enter email" required/>

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" ref={passwordRef} placeholder="Password" required/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" className='btn btn-dark border-warning' type="submit">
Register
</Button>
</Form>
{/* /go to login  */}
<Link to='/login' className='btn btn-link text-dark pe-auto text-decoration-none '>Alrady have account? Login Now</Link>
    </div>
    );
};

export default Register;