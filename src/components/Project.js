import React from 'react'

const Project = ({ projectsData }) => {
  return (
    <div className='container  g-5'>
      <div className='row'>

        {projectsData.map((item) =>
          <div className="col-sm-6 " key={item.id}>
            <div className="card m-1 p-2" >
              <div className="embed-responsive embed-responsive-2by1">
                <img alt={item.title} className="card-img-top embed-responsive-item" src={item.imageUrl} />
              </div>
              <h3 className="card-title">{item.id} {item.title}</h3>
              <desc className="card-text">{item.description}</desc>
              <depl className="card-text">{item.deployedLink}</depl>
              <githb className="card-text">{item.githubLink}</githb>
            </div>
          </div>
        )}

        <p></p>
      </div>
    </div>
  )
}

export default Project