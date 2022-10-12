import React from 'react'

const Project = ({ projectsData }) => {
  return (
    <div className='container  g-5'>
      <div className='row'>

        {projectsData.map((item) =>
          <div className="col-sm-6 " key={item.id}>
            <div className="card m-1 p-2" >
              <h4 className="card-title">{item.id}. {item.title}</h4>

              <div className="embed-responsive embed-responsive-2by1">
                <img alt={item.title} className="card-img-top embed-responsive-item" src={item.imageUrl} />
              </div>
              <div className="desc card-text">{item.description}</div>

              <div class="btn-group" role="group" aria-label="Reference Points">
                <button className="depl btn btn-secondary p-1"><a href={item.deployedLink}>Application</a></button>
                <button className="depl btn btn-secondary p-1"><a href={item.githubLink}>Repository</a></button>
              </div>


            </div>
          </div>
        )}

        <p></p>
      </div>
    </div>
  )
}

export default Project