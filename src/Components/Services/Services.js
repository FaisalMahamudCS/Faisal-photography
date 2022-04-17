import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = (props) => {
    const {id,name,image,price,description}=props.service;
    const navigate=useNavigate();

  const checkout=()=>{
 
    navigate('/checkout');
  }
    return (
        <div>
            

            <div className=''>
            <div className="col ">
    <div className="card">
        <div className='pt-4'>
            
      <img src={image}  className="card-img-top img" alt="..."/>
   </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}</p>
    <button className='btn btn-success' onClick={checkout}>Checkout</button>

      </div>
    </div>
  </div>
        </div>
        </div>
    );
};

export default Services;