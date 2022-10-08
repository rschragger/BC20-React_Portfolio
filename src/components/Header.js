import React from 'react'
import Navigation from './Navigation'
import headerImage from '../assets/images/SandbarPointWalter.jpg'
import navData from '../assets/data/navData.json'

const Header = (props) => {
  return (
    <header>
      <section className="container-fluid" style={props.bgStyle} >
        <h1 className='p-4'>Reeve Schragger - Portfolio</h1>
        {/* <img src={headerImage}></img> */}

      </section>
      <Navigation navData={navData} />
    </header>
  )
}

Header.defaultProps = {
  bgStyle: {
    backgroundImage: 'url(' + headerImage + ')',
    // imageSize: 'cover',
    backgroundSize: 'cover'
  }
}


export default Header