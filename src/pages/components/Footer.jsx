// Footer.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <h2 className="author">Kuruva Pavani</h2>
      <div className="links">
        <a href="#about" className="footerLinks">About</a>
        <a href="#skills" className="footerLinks">Skills</a>
        <a href="#experience" className="footerLinks">Experience</a>
      </div>
      <div className="copyRight">
        <p>Made with 🩷 &#169; Kuruva Pavani</p>
      </div>
      <div class="iconbutton">
        <a href="#home" class="iconbutton"><FontAwesomeIcon icon={faArrowUp} style={{color:"white"}}/></a>
      </div>
    </div>
  );
}

export default Footer;