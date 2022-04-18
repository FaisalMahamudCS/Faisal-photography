import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  
    return (
        <div className='w-100'>
           
            
            <Carousel>
  
  <Carousel.Item interval={1000}>
  
    <img
      className="d-block w-100"
      src="https://i.ibb.co/ZN89M9L/banner-4.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
  {/* carosel     */}
      <p>I will do photography for you</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/rxmcKmd/banner-2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
   
      <p>I will make your wedding videography</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/WzJBCnN/banner-1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
     
      <p>I will  do  for you with less pricing .</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
    );
};

export default Banner;