import React, {useState} from "react";

// React Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//import Typed from "react-typed";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Navbar = () => {
    const [isSignedIn, setSignedIn] = useState(true);

    return (
        <div>
<nav className="navbar navbar-expand-lg fixed-top">
    
        

    <div className="container">
        <div className="te">

        {/* <Typed
               className="typed-text"
               strings={["Nailed it "]}
               typeSpeed={300}
               backSpeed={500}
               cursorChar="!"
               loop
               /> */}
            <h1>Nailed it !</h1>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"black"}} />
        </button> 
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
            <ul className="navbar-nav ml-auto">
                {isSignedIn && <li className="nav-item active">
                    <Link to="/">Home</Link>
                </li>}
                {isSignedIn && <li className="nav-item">
                    <Link to="/profile">Profile</Link>
                </li >}
                {!isSignedIn && <li className="nav-item">
                    <Link smooth={true} to="SignIn" offset={-110} className="btn-main-offer">Log In</Link>
                </li >}
            </ul>
        
            
        </div>

        
            
        
                

    </div>
        
 
  
</nav>
</div>
    )
}

export default Navbar;