import React from 'react'

const Project = ({ projectsData }) => {
  return (
    <div className='container  g-2'>
      <div className='row d-flex align-items-stretch'>

        {projectsData.map((item) =>
          <div className="col-sm-6 p-1 d-flex align-items-stretch" key={item.id}>
            <div className="card m-1 p-2  d-flex justify-content-end" >
              <h4 className="card-title"><span className="small">{item.id}. </span>{item.title}</h4>
              <hr className="m-1 p-0" />
              <div className="embed-responsive embed-responsive-2by1">
                <img alt={item.title} className="card-img-top embed-responsive-item" src={item.imageUrl} />
              </div>
              <div className="desc card-text p-2">{item.description}</div>

              {/* <div className=""> */}
                <div className="btn-group mt-auto " role="group" aria-label="Reference Points">
                  <button className="depl btn btn-secondary p-1"><a href={item.deployedLink}>Application</a></button>
                  <button className="depl btn btn-secondary p-1"><a href={item.githubLink}>Repository</a></button>
                </div>
              {/* </div> */}
            </div>
          </div>
        )}

        <p></p>
      </div>
    </div>
  )
}

export default Project