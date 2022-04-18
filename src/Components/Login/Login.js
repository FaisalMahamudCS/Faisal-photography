import React,{useRef} from 'react';
import { Button, Form} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errormsg;
    let from = location.state?.from?.pathname || "/";
//sign in destructuring
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);
//going to home when user exist
  if(user){
    navigate(from, { replace: true });
  }
//reset password
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
//reset password
 const resetPassword = async()=>{
  const email=emailRef.current.value;
  await sendPasswordResetEmail(email);
 // alert("password reset")
 //toast added
 toast(" Reset Password Sent");

 }
 //showing error msg
if (error) {
        errormsg = <p className='text-danger mt-3'>Error: {error?.message}</p>
        console.log(errormsg)
    }
    //sign in handler
    const handleSubmit = event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        if(!error){
        signInWithEmailAndPassword(email, password);
        }
    }
    return (
        <div className='container w-25 mx-auto card'>
            
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" ref={emailRef} placeholder="Enter email"  required/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" ref={passwordRef} placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="dark" type="submit">
    Login
  </Button>
{errormsg}
</Form>
<Link className='btn btn-link text-dark pe-auto text-decoration-none' to='/register'>New? Register Now</Link>
<button className='btn btn-link text-dark pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button>
<SocialLogin></SocialLogin>   
<ToastContainer />
    
</div>
      
    );
};

export default Login;