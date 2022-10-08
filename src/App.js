import React from 'react';

import Header from './components/Header';
import Project from './components/Project';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import projectsData from './assets/data/projectsData.json'

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Project projectsData={projectsData}/>
      <Footer />
    </div>
  );
}

export default App;
