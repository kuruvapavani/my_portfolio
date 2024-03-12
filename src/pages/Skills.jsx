// Skills.jsx

import React from "react";
function Skills(){
  return(
    <div>
        <h2>Skills</h2> 
      <div className="skills-container">
        <div className="block">
        <h3>Frontend</h3>
          <ul>
            <li>
              <div className="skill-wrapper">
                <span>HTML</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "80%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>CSS</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "60%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>JavaScript</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "70%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>Reactjs</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "70%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>jQuery</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "50%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>Bootstrap</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "70%"}}></div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Backend Skills Block */}
        <div className="block">
          <h3>Backend</h3>
          <ul>
            <li>
              <div className="skill-wrapper">
                <span>Node.js</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "70%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>MongoDB</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "70%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>Expressjs</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "70%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>Rest API</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "60%"}}></div>
                </div>
              </div>
            </li>
            <li>
              <div className="skill-wrapper">
                <span>Jwt</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: "60%"}}></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills;