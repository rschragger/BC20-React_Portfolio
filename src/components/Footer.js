import React from 'react'

const Footer = () => {
  return (
    <div>
      <a href={facebook}></a>
      <div className="Copyright small">Copyright &copy; 2022 - Reeve Schragger</div>
    </div>
  )
}

Footer.defaultProps = {
  linkedIn: 'https://www.linkedin.com/in/reeve-schragger-2738a228/',
  github: 'https://github.com/rschragger',
  facebook: 'https://www.facebook.com/reeve.schragger'
}

export default Footer