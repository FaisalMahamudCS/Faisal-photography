import React from 'react';
import {Spinner} from 'react-bootstrap';
const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-content-center'>
             <Spinner animation="border" variant="dark" />
        </div>
    );
};

export default Loading;