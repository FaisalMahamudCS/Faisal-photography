import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css'
const Header = () => {
  const [user]=useAuthState(auth);
  const handleSignOut =()=>{
    signOut(auth);
  }
    return (
        <div>
 
<nav className="navbar navbar-expand-lg  navbar-dark bg-dark   d-flex justify-content-center">

  <div className=" ">
    
    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="text-white navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <NavLink
          className={({ isActive }) => (isActive ? "nav-link  text-warning" : "nav-link text-light")}
          to='/'
        >Faisal Photography
            </NavLink>

     
            <NavLink
            className={({ isActive }) => (isActive ? "nav-link    text-warning" : "nav-link text-white")}
          to='/blog'
        >Blog
            </NavLink>
            <NavLink
           className={({ isActive }) => (isActive ? "nav-link   text-warning" : "nav-link text-white")}
          to='/about'
        >About
            </NavLink>
            <NavLink
           className={({ isActive }) => (isActive ? "nav-link    text-warning" : "nav-link text-white")}
          to='/service'
        >Service
            </NavLink>

   {
     user ?
     <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
    :
    <NavLink
    className={({ isActive }) => (isActive ? "nav-link    text-warning" : "nav-link text-white")}
   to='/login'
 >Login
     </NavLink>
   }
            
           

            
         

         
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;