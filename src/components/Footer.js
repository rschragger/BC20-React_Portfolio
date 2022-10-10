import React from 'react'

const Footer = ({ myProfiles }) => {
  return (
    <div className='container-fluid center'>
      <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
        {myProfiles.map(item => (
          <li className="ms-3" key={item.id}><a className="text-muted" href={item.link} target="_blank">{item.name}</a></li>
        ))}
      </ul>
     
      <div className="Copyright small center">Copyright &copy; 2022 - Reeve Schragger</div>


      {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li>test1</li>
        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use href="logo.svg">test</use></svg></a></li>

      </ul> */}

    </div>
  )
}

Footer.defaultProps = {
  myProfiles: [
    {
      id: 1,
      name: 'linkedIn',
      link: 'https://www.linkedin.com/in/reeve-schragger-2738a228/',
    },
    {
      id: 2,
      name: 'github',
      link: 'https://github.com/rschragger',
    }, {
      id: 3,
      name: 'facebook',
      link: 'https://www.facebook.com/reeve.schragger'
    }

  ]

}

export default Footer