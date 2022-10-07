import React from 'react'

const Footer = ({ myProfiles }) => {
  return (
    <div className='card'>
<ul  className="nav col-md-4 justify-content-end list-unstyled d-flex">
      {myProfiles.map(item => (
        <li  className="ms-3"><a  className="text-muted"  href={item.link} target="_blank">{item.name}</a></li>
      ))}
</ul>
      {/* <a href={myProfiles[0].link} target="_blank">{myProfiles[0].name} </a> */}
      {/* <a href={props.github} target="_blank">gitHub </a>
      <a href={props.facebook} target="_blank">facebook </a>*/}
      <div className="Copyright small">Copyright &copy; 2022 - Reeve Schragger</div>


      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li>test1</li>
        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use href="logo.svg">test</use></svg></a></li>

      </ul>

    </div>
  )
}

Footer.defaultProps = {
  myProfiles: [
    {
      name: 'linkedIn',
      link: 'https://www.linkedin.com/in/reeve-schragger-2738a228/',
    },
    {
      name: 'github',
      link: 'https://github.com/rschragger',
    }, {
      name: 'facebook',
      link: 'https://www.facebook.com/reeve.schragger'
    }

  ]

}

export default Footer