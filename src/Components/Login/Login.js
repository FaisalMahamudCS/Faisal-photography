import React,{useRef} from 'react';
import { Button, Form} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
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
  alert("password reset")
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
        <div className='container'>
            
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" ref={emailRef} placeholder="Enter email"  required/>
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
    Login
  </Button>
{errormsg}
</Form>
<Link className='btn btn-link text-primary pe-auto text-decoration-none' to='/register'>New? Register Now</Link>
<button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> 
        </div>
    );
};

export default Login;