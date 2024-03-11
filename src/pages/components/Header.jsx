import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function Header(){

  const [isCollapsed, setIsCollapsed] = useState(true); // State to track navbar collapse

  // Function to toggle navbar collapse
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Function to handle link click
  const handleLinkClick = () => {
    setIsCollapsed(true); // Collapse the navbar when a link is clicked
  };

  return(
    <div>
      <nav className={`navbar navbar-expand-lg fixed-top ${isCollapsed ? '' : 'show'}`}>
        <div className="container">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="/">KURUVA PAVANI</a>
          </div>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} style={{ color: 'white', border: 'none' }} />
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${isCollapsed ? '' : 'show'}`}>
            <ul className="navbar-nav">
              <li><a className="nav-link active" aria-current="page" href="#home" onClick={handleLinkClick}>Home</a></li>
              <li><a className="nav-link" href="#about" onClick={handleLinkClick}>About me</a></li>
              <li><a className="nav-link" href="#skills" onClick={handleLinkClick}>Skills</a></li>
              <li><a className="nav-link" href="#projects" onClick={handleLinkClick}>Projects</a></li>
              <li><a className="nav-link" href="#experience" onClick={handleLinkClick}>Experience</a></li>
              <li><a className="nav-link" href="#contact" onClick={handleLinkClick}>Contact me</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;