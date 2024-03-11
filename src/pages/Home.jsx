import React, { useEffect, useState, useRef } from 'react';
import profile from "./images/profile1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

function Home() {
  const [imageWidth, setImageWidth] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className='homestarting' id='home'>
      <div className='grid-container'>
        <div className='image-container' ref={imageRef}>
          <img src={profile} alt='profile'/>
        </div>
        <div className='socialIcons'>
          <a href="mailto:pavanikuruva2109@gmail.com" className='social-link' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: `${imageWidth * 0.07}px` ,color :"#BF5CAA "}} /></a>
          <a href='https://github.com/kuruvapavani' className='social-link' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} style={{ fontSize: `${imageWidth * 0.07}px`,color :"#BF5CAA " }} /></a>
          <a href='https://www.linkedin.com/in/kuruva-pavani-10388b27b' className='social-link' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: `${imageWidth * 0.07}px` ,color :"#BF5CAA "}} /></a>
        </div>
      </div>
      
      <div className='text-container'>
        <p>Hello 👋🏻 I'm</p>
        <section class="animation">
          <div class="first"><div>Kuruva Pavani</div></div>
          <div class="second"><div>Web Developer</div></div>
        </section>
      <h3>A creative and passionate web developer who loves building beautiful and functional websites.I have always been fascinated by the power of the web and how it connects people and information. </h3>
      <button type="button" className="btn"><a href="mailto:pavanikuruva2109@gmail.com" >Hire Me <FontAwesomeIcon icon={faHandshake} style={{color:"white"}}/></a></button>
      </div>
    </div>
  );
}

export default Home;