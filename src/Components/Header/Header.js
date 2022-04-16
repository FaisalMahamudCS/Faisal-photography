import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
 
<nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center">

  <div className=" ">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <NavLink
          className={({ isActive }) => (isActive ? "nav-link text-success" : "nav-link text-dark")}
          to='/'
        >Faisal Photography
            </NavLink>

     
            <NavLink
            className={({ isActive }) => (isActive ? "nav-link   text-success " : "nav-link text-dark")}
          to='/blogs'
        >Blogs
            </NavLink>
            <NavLink
           className={({ isActive }) => (isActive ? "nav-link   text-success" : "nav-link text-dark")}
          to='/about'
        >About
            </NavLink>
         
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;