import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, NavigationType, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const RequireAuth = ({children}) => {
   const [user,loading]=useAuthState(auth);
   const location =useLocation();
   //error handle
if(loading){
    return <Loading></Loading>
}
//protected
   if(!user){

    return <Navigate to="/login" state={{ from: location }} replace />;


   }
    return  children;
    
};

export default RequireAuth;