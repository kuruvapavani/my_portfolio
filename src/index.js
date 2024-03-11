import React from 'react';
import ReactDOM from 'react-dom';
import Header from './pages/components/Header';
import "./index.css"
import Home from './pages/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Home />
  </div>
);