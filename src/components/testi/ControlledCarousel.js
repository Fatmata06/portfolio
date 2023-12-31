import React, { Component } from 'react';
import './Testi.css'; 
import Image1 from '../../assets/images/Image1.png'
import image2 from '../../assets/images/image2.png'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0); 
    
  const handleSelect = (selectedIndex) => {  
    setIndex(selectedIndex);
    return handleSelect;
  };

  return ( 
      <div className="title">
      <h2 style={{marginLeft:'40px', fontSize: '40px',fontWeight: '600'}}className='my'>Testimonials</h2>  
      
    <Carousel activeIndex={index} onSelect={handleSelect} style={{background:'#1A1A1A',  height:'170px',backgroundColor:'#373636', marginLeft:'40px' }}>
      <Carousel.Item style={{width:'100%'}}>
      <img className='imagen2' src={Image1} style={{marginLeft:'4px', marginTop:'20px', float:'left'}} alt=''/><b style={{color:'#fff', marginLeft:'3px', marginTop:'30px', float:'left'}}>Joe brillons   mywebsite.com</b> 
       <p style={{marginLeft:'25%', textAlign:'left'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br></br>dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
      </Carousel.Item>
      <Carousel.Item>  

         
        <Carousel.Caption > 
     
        </Carousel.Caption>
        <img className='imagen2' src={image2} style={{marginLeft:'4px', marginTop:'20px', float:'left'}} alt=''/><b style={{color:'#fff', marginLeft:'3px', marginTop:'30px', float:'left'}}>Mike Pense  thisiswebsite.com</b>
       <p style={{marginLeft:'25%',  textAlign:'left'}} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br></br>dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
      </Carousel.Item >
     
    </Carousel>
    </div>
    
  );
}     

export default ControlledCarousel;
