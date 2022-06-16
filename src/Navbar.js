import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
    const [open, setOpen] = useState(false);
 return (
    <div>
        <nav>
            <div className="logo"><h1>VENKATESH K.V</h1></div>
                <ul className="nav-links" style={{ transform: open ? "translateX(0px)" : "" }}>
        <li>
            <a href="#Home">Home</a>
        </li>
        <li>    
            <a href="#About">About Us</a>
        </li>
        <li>
            <a href="#Resume">Resume</a>
        </li>
        <li>
            <a href="#Testimonal">Testimonial</a>
        </li>
        <li>
            <a href="#ContactMe">ContactMe</a>
        </li>
        
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars menu"></i>
        </nav>
        </div>
  );
}

export default Navbar;  