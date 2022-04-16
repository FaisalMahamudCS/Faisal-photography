import React from 'react';

const Services = (props) => {
    const {id,name,image,description}=props.service;
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
    <button className='btn btn-success'>Checkout</button>

      </div>
    </div>
  </div>
        </div>
        </div>
    );
};

export default Services;