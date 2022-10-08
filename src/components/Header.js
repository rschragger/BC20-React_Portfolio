import React from 'react'
import Navigation from './Navigation'
import headerImage from '../assets/images/SandbarPointWalter.jpg'

const Header = (props) => {
  return (
    <header>
      <section className="container-fluid" style={props.bgStyle} >
        <h1>Reeve Schragger - Portfolio</h1>
        {/* <img src={headerImage}></img> */}
       
      </section>
       <Navigation />
    </header>
  )
}


// Header.defaultProps = {
//   bgStyle:{ backgroundColor:"red"}
// }
Header.defaultProps = {
  bgStyle: {
    backgroundImage: 'url(' + headerImage + ')',
    imageSize:'cover',
  backgroundSize: "100%"
  }
}


export default Header