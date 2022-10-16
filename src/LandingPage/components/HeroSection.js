import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import {useState} from 'react'
function HeroSection(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(true);
    props.down(modal);
  };

  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>BERI</h1>
      <p>What are you waiting for?</p>
      
        
      <div className='hero-btns'>
      <div  className='btnStart'
          
          onClick={toggleModal}
         
        >
          GET STARTED
        </div>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          // onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
     
    </div>
    
  );
}

export default HeroSection;