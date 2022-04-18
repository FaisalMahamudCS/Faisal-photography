import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css'

const Services = (props) => {
    const {id,name,image,price,description}=props.service;
    const navigate=useNavigate();

  const checkout=()=>{
 
    navigate('/checkout');
  }
    return (
        <div>
            

            <div className='service'>
            <div className="col  shadow-lg">
    <div className="">
        <div className='pt-4 shadow-'>
            
      <img src={image}  className="card-img-top img-fluid img" alt="..."/>
   </div>
      <div className="p-2">
        <h5 className="">{name}</h5>
        <p className="">{description}</p>
        <p className="">{price}</p>
    <button className='btn btn-dark border-warning' onClick={checkout}>Checkout</button>

      </div>
    </div>
  </div>
        </div>
        </div>
    );
};

export default Services;