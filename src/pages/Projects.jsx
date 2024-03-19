import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import diceGame from "./images/diceGame.png";
import drumKit from "./images/drumKit.png";
import keep from "./images/Keep.png";
import rps from "./images/rockPaperScissors.png";
import tdl from "./images/toDoList.png";
import mbs from "./images/blogsite.png"
const images = [
  { id: 1,
    image: diceGame,
    url:"https://kuruvapavani.github.io/Dice_Game/",
    description:"This project is a simple and fun game of dice.The game involves two players: you and the computer.When you refresh the page, the computer will generate two random numbers between 1 and 6. The dice images will change according to the numbers. The player with the higher number wins the game. The game also displays a message that announces the result. This project illustrates my ability to use random functions and manipulate the DOM.Skills-Html,Css,JavaScript"},
  { id: 2,
    image: drumKit,
    url:"https://kuruvapavani.github.io/Drum_Kit/",
    description:"This project is a virtual drum kit that lets you play different sounds and rhythms.The drum kit consists of seven drum pads, each with a corresponding letter on the keyboard. You can play the drums by either clicking on the pads with your mouse or pressing the keys on your keyboard. The project showcases my skills in JavaScript and my creativity in making music.Skills-Html,Css,JavaScript"},
  { id: 3,
    image: keep,
    url:"https://x7lvlt.csb.app/",
    description:"The Keep Note App is a web application that empowers users to create, edit, and organize notes across various topics. Similar to Google Keep Notes, it offers a user-friendly interface, but with distinctive features and design choices. While it currently relies on previous packages, I intend to enhance it by incorporating a database and implementing user authentication in the future.Skills-React,Nodejs,Html,Css"},
  { id: 4,
    image: rps,
    url:"https://kuruvapavani.github.io/Rock_Paper_Scissors_Game/",
    description:"This project is a simple and fun game of rock, paper, and scissors.The game allows you to play against the computer, which randomly chooses one of the three options. You can choose your option by clicking on the icons. The game follows the standard rules: rock beats scissors, scissors beats paper, and paper beats rock. The game also keeps track of your score and displays the result of each round. Skills - Html,Css,Javascript"},
  { id: 5,
    image: tdl,
    url:"https://kuruvapavani-to-do-list.onrender.com",
    description:"This project is a to-do list application that helps users organize tasks and goals. It allows the creation of multiple lists with distinct names and items. By appending /<listname> to the URL, users can create new lists. However, currently, this functionality is the same for all users, and I plan to enhance it by creating separate lists for individual users through user accounts.Skills- Html,Css,Nodejs,Expressjs,MongoDb"},
    {
      id:6,
      image:mbs,
      url:"https://kuruvapavani-mern-blog.netlify.app/",
      description:"This project is a dynamic and interactive blog site. It provides users with a seamless experience, allowing them to log in, personalize their profiles, and create, edit, and publish posts effortlessly. With a user-friendly interface and responsive design, readers can explore a variety of content from diverse authors. Additionally, I have created dummy authors and posts filled with Lorem Ipsum text to enhance the platform's content. Skills: MongoDB, Node.js, React, User Authentication, Responsive Design, Bootstrap, Html & Css."
    }
];

const Banner = ({ images, speed = 1000 }) => {
  const [flippedCard, setFlippedCard] = useState(null);

  const flipCard = (id, event) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div className="inner">
      <div className="wrapper">
        <section className={flippedCard ? 'paused section' : 'section'} style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image, url, description }) => (
            <div
              className={`card ${flippedCard === id ? 'flipped' : ''}`}
              onClick={(event) => flipCard(id, event)}
              key={`card-${id}`}
              id={`card-${id}`}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img className="card-img-top" src={image} alt={id} />
                  <div className="card-body">
                    <div className="button-container">
                      <button className="btn card-link">Details</button>
                      <a href={url} target='_blank' rel='noreferrer'><button className='btn card-link' >View</button></a>
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <div className="description">
                      <p className="card-text">{description}</p>
                    </div>
                    <div className="button-container">
                      <button className="btn card-link"><FontAwesomeIcon icon={faArrowLeft} />Go Back</button>
                      <a href={url} target='_blank' rel='noreferrer'><button className='btn card-link' >View</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className={flippedCard ? 'paused section' : 'section'} style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image, url, description }) => (
            <div
              className={`card ${flippedCard === id ? 'flipped' : ''}`}
              onClick={(event) => flipCard(id, event)}
              key={`card-${id}`}
              id={`card-${id}`}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img className="card-img-top" src={image} alt={id} />
                  <div className="card-body">
                    <div className="button-container">
                      <button className="btn card-link">Details</button>
                      <a href={url} target='_blank' rel='noreferrer'><button className='btn card-link' >View</button></a>
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <div className="description">
                      <p className="card-text">{description}</p>
                    </div>
                    <div className="button-container">
                      <button className="btn card-link"><FontAwesomeIcon icon={faArrowLeft} />Go Back</button>
                      <a href={url} target='_blank' rel='noreferrer'><button className='btn card-link' >View</button></a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className={flippedCard ? 'paused section' : 'section'} style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image, url, description }) => (
            <div
              className={`card ${flippedCard === id ? 'flipped' : ''}`}
              onClick={(event) => flipCard(id, event)}
              key={`card-${id}`}
              id={`card-${id}`}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img className="card-img-top" src={image} alt={id} />
                  <div className="card-body">
                    <div className="button-container">
                      <button className="btn card-link">Details</button>
                      <a href={url} target='_blank' rel='noreferrer'><button className='btn card-link' >View</button></a>
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <div className="description">
                      <p className="card-text">{description}</p>
                    </div>
                    <div className="button-container">
                      <button className="btn card-link"><FontAwesomeIcon icon={faArrowLeft} />Go Back</button>
                      <a href={url} target='_blank' rel='noreferrer'><button className='btn card-link' >View</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};


const Projects = () => {
  return( 
    <div>
      <h2 className="projects">Projects</h2>
      <Banner images={images} speed={20000} />
      <hr id=""></hr>
    </div>
  );
};

export default Projects;
