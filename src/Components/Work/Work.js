
import React, { useEffect, useState } from 'react';
import Works from '../Works/Works';
import './Work.css'
const Work = () => {
    
    const [work,setWork]=useState([]);
    //fetch data
    useEffect(()=>{
        fetch('work.json')
        .then(response =>response.json())
        .then(data=>setWork(data))
         },[])

    return (
        //My album
        <div  className='mt-5 container w-100'>
            <h5 className='text-center mt-3'>My Album </h5>
        <div className="work row row-cols-1 row-cols-md-3  g-4">
            {
                work.map(work=><Works work={work} key={work.id}></Works>)
            }
        </div>
        </div>
    );
};

export default Work;