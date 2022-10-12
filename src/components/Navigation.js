import React from 'react'

const Navigation = ({ navData, bgStyle,NavTxtStyle, handleSector }) => {
  return (
    <nav className="navbar navbar-expand-lg d-flex flex-row justify-content-end " style={bgStyle}>

      <ul className="navbar-nav d-flex flex-sm-row justify-content-end flex-wrap">
        {navData.map((item) => (
          <li className="nav-item" key={item.id} onClick={() => handleSector(item.sectionName)}style={NavTxtStyle}>
            {item.section}
          </li>

        ))}

      </ul>
    </nav>

  )
}

Navigation.defaultProps = {
  bgStyle: {
    backgroundImage: 'var(--stripeGrad)',
    backgroundSize: 'var(--StripeSize)',
  },
  NavTxtStyle:{
    color:'var(--highlight)'
  }
}


export default Navigation