import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const Service = () => {
const [service,setService]=useState([])
 useEffect(()=>{
fetch('service.json')
.then(response =>response.json())
.then(data=>setService(data))
 },[])
    return (
        <div className='row row-cols-1 row-cols-md-3  g-4'>
            {
                service.map(service=><Services service={service} key={service.id}></Services>)
            }
        </div>
    );
};

export default Service;