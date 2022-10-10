import React from 'react'
import reeveImage from '../assets/images/ReeveSchragger_Headshot.jpg'


const AboutMe = () => {
  return (
    <div className='container-fluid d-flex wrap m-1 p-2'>
      <div className="flex col-md-5 col-sm-6">
        <img alt="Reeve Schragger headshot" className="container" src={reeveImage} />
      </div>
      <div ClassName="container-fluid ">
        <div className='h3'>Reeve Schragger
        <div className='text-muted'>Print automator and problem solver</div></div>
        <div className='card-text'>Digital print creation professional with automation and variable data speciality.
          I am looking to create whole of factory integrations and workflow optimisations to bring my brand of ultra efficiency to our clients’ fingertips.
          My extensive experience encompasses almost all printing systems and substrates including (but not limited to) signage, packaging design, textiles, prototyping, events, small format digital and offset print.</div>
      </div>
    </div>
  )
}

export default AboutMe