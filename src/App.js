import React from 'react';

import Header from './components/Header';
import Project from './components/Project';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Navigation/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
