import React from 'react'
import reeveImage from '../assets/images/ReeveSchragger_Headshot.jpg'
import resumePdf from "../assets/images/CV-ReeveSchragger_2022.pdf"

const Resume = ({ refereeData, qualificationsData, techData, workHistoryData }) => {
  return (
    <div className='container-fluid   m-1 p-2 '>
      <br />
      <h3 className='name' >Reeve Schragger</h3>
      <div className='introduction'>
        A design and production manager with great communication, computer and analytical skills, experienced in a very wide range of digital and analogue print disciplines.<br />
        The ability to pull together disparate tools to create workflows and systems that are easier to use, more effective and efficient.<br />
        I’m “the guy” people gravitate towards when something needs to happen.<br />
      </div>



      {/* personal details  */}
      <h4 className='subhead'>Personal Details	</h4>
      <div className='container d-flex flex-wrap justify-content-evenly'>
        <div className="col-3  ">
          <img alt="Reeve Schragger headshot"  src={reeveImage} style={{ maxWidth: '100px' }} />  
          {/* <img alt="Reeve Schragger headshot"  src={reeveImage} style={{ maxWidth: '100px' }} /> */}
        </div>

        <ul className='list-unstyled col-8'>
          <li>Reeve Schragger</li>
          <li>BA - Industrial Design (Graphics and Computing Minors)</li>
          <li>Ormond VIC 3204</li>
          <li>0423 707 276</li>
          <li><a href='mailto:reeve@whitestudio.net.au' >reeve@whitestudio.net.au</a></li>

        </ul>
      </div>
      {/* Personal Strengths  */}
      <h4 className='subhead'>Personal Strengths</h4>
      <div className='strengths'>
        Excellent understanding of systems, especially computer and workflow systems.
        Has worked on a very wide range of digital print systems from ultra wide to small formats and a huge range of substrates through many different industries.<br />
        A firm believer in the “one percenter” idea of making constant tiny improvements that build upon themselves.<br />
        Good business foundations and the ability to think through strategies and implications of actions.<br />
        Well-liked and easy to work with, inspiring loyalty in my staff.<br />
        Clearance for secure Government Print (State of Victoria)<br />
        Have always been able to operate computer programs across PC and Mac platforms at an advanced level. Some examples of programs I have proficiency in include;<br />
        <div className="d-flex flex-wrap justify-content-evenly">
          {
            techData.map((td) => (
              <div className={"badge m-1 " + td.colour} style={{ color: 'black' }} key={td.id}>{td.tech}</div>
            ))
          }
        </div>
        {/* <div className='badge text-bg-red' >test1</div>
        FileMaker Pro, Applescript®, Illustrator, PhotoShop, Acrobat, Indesign, Pitstop, Microsoft Excel, Microsoft Word, Pageflex, DirectSmile<br /> */}
      </div>

      {/* work history  */}
      <h4 className='subhead'>Work History</h4>
      <div className="accordion accordion-flush" id="work-history">
        {workHistoryData.map((whd) => (
          <div className="accordion-item" key={whd.id}>
            <h2 className="accordion-header" id={"flush-heading" + whd.id}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + whd.id} aria-expanded="false" aria-controls={"flush-collapse" + whd.id}>
                <div className="workdates">{whd.from}-{whd.to}</div>
                <div>&emsp;</div>
                <div className="position">{whd.position}</div>
                <div>&emsp;-&emsp;</div>
                <div className="company small">{whd.company}</div>
              </button>
            </h2>
            <div id={"flush-collapse" + whd.id} className="accordion-collapse collapse" aria-labelledby={"flush-heading" + whd.id} data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <div>{whd.desc1}</div>
                <div>{whd.desc2}</div>
                <div>{whd.desc3}</div>
                <div>{whd.desc4}</div>
                <div>{whd.desc5}</div>
                <div>{whd.desc6}</div>
              </div>
            </div>
          </div>

        ))}
      </div>

      {/* education  */}
      <h4 className='subhead'>Education</h4>
      <div className="accordion accordion-flush" id="education">
        {qualificationsData.map((qual) => (
          <div className="accordion-item" key={qual.id}>
            <h2 className="accordion-header" id={"flush-heading-q" + qual.id}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse-q" + qual.id} aria-expanded="false" aria-controls={"flush-collapse-q" + qual.id}>
                <div className="workdates">{qual.date}</div>
                <div>&emsp;</div>
                <div className="position">{qual.courseName}</div>
              </button>
            </h2>
            <div id={"flush-collapse-q" + qual.id} className="accordion-collapse collapse" aria-labelledby={"flush-heading-q" + qual.id} data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <div className="workdates">
                  {qual.begun}-{qual.date}&emsp;{qual.institution}
                </div>
              </div>
            </div>
          </div>

        ))}
      </div>

      {/* referees  */}
      <h4 className='subhead'>Referees</h4>
      <div className="accordion accordion-flush" id="education">
        {refereeData.map((refr) => (
          <div className="accordion-item" key={refr.id}>
            <h2 className="accordion-header" id={"flush-heading-q" + refr.id}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse-q" + refr.id} aria-expanded="false" aria-controls={"flush-collapse-q" + refr.id}>
                <div className="text-bolder"> {refr.name}</div>
                <div>&emsp;-&emsp;</div>
                <div className='italic'>{refr.position}</div>
                <div>&emsp;</div>
                <div className="company small">{refr.company}</div>
                {/* - <a href={'tel:' + refr.mobile}>{refr.mobile}</a> */}
              </button>
            </h2>
            <div id={"flush-collapse-q" + refr.id} className="accordion-collapse collapse" aria-labelledby={"flush-heading-q" + refr.id} data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <div className="refr-group">
                  <div>{refr.position}</div>
                  <div>{refr.company}</div>
                  <div><a href={'tel:' + refr.mobile}>{refr.mobile}</a></div>
                  <div><a href={'mailto:' + refr.email}>{refr.email}</a></div>
                </div>
              </div>
            </div>
          </div>

        ))}
      </div>

      {/* end of page  */}
    </div>
  )
}

export default Resume