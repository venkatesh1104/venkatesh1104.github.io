import React from 'react'
import './Bottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faEnvelope, faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import Me from "../Assets/Home/Work.jpg";

function Bottom() {
  return (

    <div className="Bottom-Container">
    <h2 class="about" id="About">Contact Me</h2>    
<div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div class="card card0 border-0">
        <div class="row d-flex">
            <div class="col-lg-6">
                <div class="card1 pb-5">
                    <div class="row">
                    
                    </div>
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                    <img src={Me}  alt='me' className="image" ></img> 
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                    <div class="row mb-4 px-3">
                        <h3 class="mb-0 mr-4 mt-2">Get in Touch<FontAwesomeIcon icon={faEnvelope} color="#FF5823" transform="shrink-2 right-1"/></h3>
                        <div class="facebook text-center mr-3"><div class="fa fa-facebook"></div></div>
                        <div class="linkedin text-center mr-3"><div class="fa fa-linkedin"></div></div>
                    </div>
                    <div class="row px-3 mb-4">
                        <div class="line"></div>
                        <small class="or text-center">Or</small>
                        <div class="line"></div>
                    </div>
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">Email Address</h6></label>
                        <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address"/>
                    </div>
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">Contact Number</h6></label>
                        <input type="Number" name="ContactNumber" placeholder="Enter a ContactNumber"/>
                    </div>
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">Message</h6></label>
                        <input type="Message" name="ContactNumber" placeholder="Enter a Message"/>
                    </div>
                    <div class="row px-3 mb-4">
                        <div class="custom-control custom-checkbox custom-control-inline">
                            
                        </div>
                        
                    </div>
                    <div class="row mb-3 px-3">
                        <button type="submit" class="btn btn-blue text-center"><FontAwesomeIcon icon={faPaperPlane} color="#111" size="2x" transform="shrink-4 left-2"/>SEND ME</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="bg-blue py-4">
            <div class="row px-3">
                <small class="ml-4 ml-sm-5 mb-2"></small>
                <div class="social-contact ml-4 ml-sm-auto">
                    
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Bottom;