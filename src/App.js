import React, { useState } from 'react';

// Components
import Header from './components/Header';
import Navigation from './components/Navigation';

import AboutMe from './components/AboutMe';
import Project from './components/Project';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';

import Footer from './components/Footer';

// Data
import navData from './assets/data/navData.json'
import projectsData from './assets/data/projectsData.json'
import qualificationsData from './assets/data/qualificationsData.json'
import refereeData from './assets/data/refereeData.json'
import workHistoryData from './assets/data/workHistoryData.json'

//import logo from './logo.svg';


function App() {
  const [sector, setSector] = useState('AboutMe');
  const handleSector = (sector) => setSector(sector);

  return (
    <div className="container">
      <Header />
      {/* {sector} */}
      <Navigation navData={navData} handleSector={handleSector} />

      {(sector === 'AboutMe') ? (<AboutMe />) : ('')}
      {(sector === 'Portfolio') ? (< Project projectsData={projectsData} />) : ('')}
      {(sector === 'ContactForm') ? (<ContactForm />) : ('')}
      {(sector === 'Resume') ? (<Resume
        refereeData={refereeData}
        workHistoryData={workHistoryData}
        qualificationsData={qualificationsData}
      />) : ('')}

      <Footer />
    </div>
  );
}

export default App;
