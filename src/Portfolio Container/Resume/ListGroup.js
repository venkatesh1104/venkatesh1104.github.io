import React from 'react'
import './ListGroup.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{faUserGraduate,faClockRotateLeft,faDisplay, faChartColumn, faPalette,faCircle} from "@fortawesome/free-solid-svg-icons"


export default function ListGroup() 


{ 
  
  const progress = 65;
  
  return (
    <div>
        <h2 class="about" id="About">RESUME</h2>
    <div class="card">
    <div class="card-body">
    <div class="row">
    <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item- border-0 active" id="list-Education-list" data-toggle="list" href="#list-Education" role="tab" aria-controls="Education"><FontAwesomeIcon icon={faUserGraduate} color="#FF5823" transform="shrink-2 left-4" background-color="#111"/>Education</a>
      <a class="list-group-item list-group-item- border-0" id="list-Work History-list" data-toggle="list" href="#list-Work History" role="tab" aria-controls="Work History"><FontAwesomeIcon icon={faClockRotateLeft} color="#FF5823" transform="shrink-2 left-4"/>Work History</a>
      <a class="list-group-item list-group-item- border-0" id="list-Programming Skills-list" data-toggle="list" href="#list-Programming Skills" role="tab" aria-controls="Programming Skills"><FontAwesomeIcon icon={faDisplay} color="#FF5823" transform="shrink-2 left-4"/>Programming Skills</a>
      <a class="list-group-item list-group-item- border-0" id="list-Projects-list" data-toggle="list" href="#list-Projects" role="tab" aria-controls="Projects"><FontAwesomeIcon icon={faChartColumn} color="#FF5823"  transform="shrink-2 left-4"/>Projects</a>
      <a class="list-group-item list-group-item- border-0" id="list-Intersets-list" data-toggle="list" href="#list-Intersets" role="tab" aria-controls="Intersets"><FontAwesomeIcon icon={faPalette} color="#FF5823"  transform="shrink-2 left-4"/>Intersets</a>    
      </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-Education" role="tabpanel" aria-labelledby="list-Education-list">
      <p><FontAwesomeIcon icon={faCircle} color="#ff7f50" size="xs" transform="shrink-2 left-4"/>
      BTL Institute of Techology and Management(VTU)</p>
      <p style={{color:"#FF5823"}}>B.E(CSE).<span>2014-2018</span></p>
      
      <p><FontAwesomeIcon icon={faCircle} color="#ff7f50" size="xs" transform="shrink-2 left-4"/>
      Vishwamanava PU College</p> 
      <p style={{color:"#FF5823"}}>PUC (PCMB)<span>2012-2014</span></p>
      <p><FontAwesomeIcon icon={faCircle} color="#ff7f50" size="xs" transform="shrink-2 left-4"/>Sri Satya Sai Loka Seva High School </p>
      <p style={{color:"#FF5823"}}><span>S.S.L.C.2012</span></p>

      </div>


      <div class="tab-pane fade" id="list-Work History" role="tabpanel" aria-labelledby="list-Work History-list">
      


      </div>

      <div class="tab-pane fade" id="list-Programming Skills" role="tabpanel" aria-labelledby="list-Programming Skills-list">

      <div className="Progressbar-Continer">
  <div className="row">
    <div className="col-md-8">
      <div className="Progress-tiltle">
       <h6>HTML5</h6>
        <div className="Progress">
          <div className="Progress-bar" style={{'width':'80%', 'background-color':"#111"}}>
            <div className="Progress-value">80%
            </div>
          </div>
        </div>
        
        <div className="Progress-tiltle">
        <h6>CSS3</h6>
        <div className="Progress">
          <div className="Progress-bar" style={{'width':'75%', 'background-color':"#111"}}>
            <div className="Progress-value">75%
            </div>
          </div>
        </div>
</div>

<div className="Progress-tiltle">
        <h6>JAVASCRIPT</h6>
        <div className="Progress">
          <div className="Progress-bar" style={{'width':'80%', 'background-color':"#111"}}>
            <div className="Progress-value">80%
            </div>
          </div>
        </div>
</div>

<div className="Progress-tiltle"></div>
        <h6>JQUREY</h6>
        <div className="Progress">
          <div className="Progress-bar" style={{'width':'65%', 'background-color':"#111"}}>
            <div className="Progress-value">65%
            </div>
          </div>
        </div>

        <div className="Progress-tiltle">
        <h6>BOOTSTRAP4</h6>
        <div className="Progress">
          <div className="Progress-bar" style={{'width':'80%', 'background-color':"#111"}}>
            <div className="Progress-value">80%
            </div>
          </div>
        </div>
</div>


<div className="Progress-tiltle"></div>
        <h6>REACT.JS</h6>
        <div className="Progress">
          <div className="Progress-bar" style={{'width':'80%', 'background-color':"#111"}}>
            <div className="Progress-value">80%
            </div>
          </div>
        </div>

        <div className="Progress-tiltle">
        <h6>MY SQL & JAVA</h6>
        <div className="Progress">
          <div className="Progress-bar" style={{'width':'65%', 'background-color':"#111"}}>
            <div className="Progress-value">65%
            </div>
          </div>
        </div>
</div>

     </div> 
    </div>
  </div>
</div>


      </div>



      <div class="tab-pane fade" id="list-Projects" role="tabpanel" aria-labelledby="list-Projects-list">
      <p><FontAwesomeIcon icon={faCircle} color="#ff7f50" size="xs" transform="shrink-2 left-4"/>
       <span style={{color:"#FF5823"}}>Personal Portfolio Website</span><br/>
      Techologies:Used:React.js,Bootsrap4 
      A Personal Portfolio to showcase all my deatils and project at one place.</p>
      <p><FontAwesomeIcon icon={faCircle} color="#ff7f50" size="xs" transform="shrink-2 left-4"/><span style={{color:"#FF5823"}}>Aamdani</span><br></br>
      Techologies Used:HTML5,CSS,Bootsrap,jQurey,Javascript,React.js,PHP.
      Design And Marketing:Canvas,Adobe,Mailchimp Template for Promotional Mail.</p>
      <p><FontAwesomeIcon icon={faCircle} color="#ff7f50" size="xs" transform="shrink-2 left-4"/><span style={{color:"#FF5823"}}>Karya Siddhi Innovations Pvt Ltd.</span><br></br>
      Techologies Used:HTML5,CSS,Bootsrap4.</p>
      </div>
      <div class="tab-pane fade" id="list-Intersets" role="tabpanel" aria-labelledby="list-Intersets-list">
      <p style={{color:"#FF5823"}}><FontAwesomeIcon icon={faCircle} color="#ff7f50" size="xs" transform="shrink-2 left-4"/>Listening To Music </p>
     <p style={{color:"#FF5823"}}> <FontAwesomeIcon icon={faCircle} color="#ff7f50" size="xs" transform="shrink-2 left-4"/>Wacthing Cricket and Playling Cricket</p>
      <p style={{color:"#FF5823"}}><FontAwesomeIcon icon={faCircle} color="#ff7f50" size="xs" transform="shrink-2 left-4"/>Wacting Movies</p>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
  </div>
    
  )
}
