import React from 'react'
import reeveImage from '../assets/images/ReeveSchragger_Headshot.jpg'


const AboutMe = () => {
  return (
    <div className='container-fluid d-flex wrap m-1 p-2 clearfix'>
      
      <div className='clearfix'>
      <div className="col-md-6 float-md-end mb-3 ms-md-3">
        <img alt="Reeve Schragger headshot" className="container" src={reeveImage} style={{maxWidth:'350px', borderRadius:'5px'}}/>
      </div>
      {/* <div className="flex col-md-5 col-sm-6">
        <img alt="Reeve Schragger headshot" className="container" src={reeveImage} />
      </div> */}
      <div className="container-fluid ">
        <div className='h3'>Reeve Schragger
        <div className='text-muted small'>Print automator and problem solver</div></div>
        <div className='card-text'>Digital print creation professional with automation and variable data speciality.
          I am looking to create whole of factory integrations and workflow optimisations to bring my brand of ultra efficiency to our clients’ fingertips.
          My extensive experience encompasses almost all printing systems and substrates including (but not limited to) signage, packaging design, textiles, prototyping, events, small format digital and offset print.</div>
      </div>
      </div></div>
  )
}

export default AboutMe