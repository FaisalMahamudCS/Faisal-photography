import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    if(user){
        navigate('/');
    }
    return (
        <div>
          <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-dark border-warning w-25 d-block mx-auto my-2'>
                   
                    <span className='px-2'>Google Sign In </span>
                </button>   
        </div>
    );
};

export default SocialLogin;