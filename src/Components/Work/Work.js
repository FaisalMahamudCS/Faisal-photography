
import React, { useEffect, useState } from 'react';
import Works from '../Works/Works';
import './Work.css'
const Work = () => {
    const [work,setWork]=useState([]);
    useEffect(()=>{
        fetch('work.json')
        .then(response =>response.json())
        .then(data=>setWork(data))
         },[])

    return (
        <div  className='mt-5'>
            <h5 className='text-center'>My Works</h5>
        <div className="work">
            {
                work.map(work=><Works work={work} key={work.id}></Works>)
            }
        </div>
        </div>
    );
};

export default Work;