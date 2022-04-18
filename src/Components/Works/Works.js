import React from 'react';
import './Works.css'

const Works = (props) => {
    const {id,picture}=props.work;
    return (
        <div className='col container'>
            <div className=''>
            <img src={picture} className='img-fluid' alt="" srcset="" />
            </div>
        </div>
    );
};

export default Works;