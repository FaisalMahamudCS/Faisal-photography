import React from 'react';
import './Works.css'

const Works = (props) => {
    const {id,picture}=props.work;
    return (
        <div className=''>
            <div className=''>
            <img src={picture} className=' ' alt="" srcset="" />
            </div>
        </div>
    );
};

export default Works;