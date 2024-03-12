import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase} from '@fortawesome/free-solid-svg-icons';

function MyVerticalTimeline() {
  const [num, setNum] = useState('0');

  const educationTimeline = (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2022-2026"
        icon={<FontAwesomeIcon icon={faGraduationCap} style={{ color: "#BF5CAA", border: 'none' }} />}
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Technology</h3>
        <h4 className="vertical-timeline-element-subtitle">IIIT Tiruchirappalli</h4>
        <p>ECE</p>
        <p>SGPA : 6.7 , 7.38 , 8.34</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020-2022"
        icon={<FontAwesomeIcon icon={faGraduationCap} style={{ color: "#BF5CAA", border: 'none' }} />}
      >
        <h3 className="vertical-timeline-element-title">Intermediate</h3>
        <h4 className="vertical-timeline-element-subtitle">Narayana Junior College</h4>
        <p>PCM</p>
        <p>92.8%</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2018-2020"
        icon={<FontAwesomeIcon icon={faGraduationCap} style={{ color: "#BF5CAA", border: 'none' }} />}
      >
        <h3 className="vertical-timeline-element-title">Matric</h3>
        <h4 className="vertical-timeline-element-subtitle">ST.Joseph's School</h4>
        <p>CBSE</p>
        <p>78.4%</p>
      </VerticalTimelineElement>
    </>

  );

  const experienceTimeline = (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Currnetly"
        icon={<FontAwesomeIcon icon={faBriefcase} style={{ color: "#BF5CAA" }} />}
      >
        <h3 className="vertical-timeline-element-title">Looking for Internships</h3>
        <h4 className="vertical-timeline-element-subtitle">Feel free to contact me</h4>
        <p className='mySkills'>Skills : HTML,CSS,JavaScript,Bootstrap,API,
        JQuery(basics),Reactjs,REST API,MongoDB,Node.js 
        and Express.js.Eager to learn new technologies.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan,2024-Feb,2024"
        icon={<FontAwesomeIcon icon={faBriefcase} style={{ color: "#BF5CAA", border: 'none' }} />}
      >
        <h3 className="vertical-timeline-element-title">Web Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Bharat Intern</h4>
        <p>It is an unpaid internship where they will give you a list of tasks and you have to complete any two tasks.I have created a weather application which tells you the current weather of the city using openWeather API and a portfolio site.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan,2024-Feb,2024"
        icon={<FontAwesomeIcon icon={faBriefcase} style={{ color: "#BF5CAA", border: 'none' }} />}
      >
        <h3 className="vertical-timeline-element-title">Web Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Technohacks</h4>
        <p>It is also an unpaid internship similar to Bharat Intern and we have to complete any three tasks.I have created a Currency$ Converter application using API and a to-do-list application</p>
      </VerticalTimelineElement>
    </>
  );

  return (
    <div id='experience'>
      <h2 >My journey</h2>
      <div className='heading'>
      <button onClick={() => setNum("0")}>
          <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '5px' }} />
          Education
        </button>
        {/* Button for Experience */}
        <button onClick={() => setNum("1")}>
          <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '5px' }} />
          Experience
        </button>
      </div>
      <VerticalTimeline>
        {num === '0' ? educationTimeline : experienceTimeline}
      </VerticalTimeline>
    </div>
  );
}

export default MyVerticalTimeline;