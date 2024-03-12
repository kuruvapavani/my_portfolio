import React from 'react';
import ReactDOM from 'react-dom';
import Header from './pages/components/Header';
import "./index.css"
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './Projects';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Home />
    <About />
    <Skills />
    <Projects />
  </div>
);