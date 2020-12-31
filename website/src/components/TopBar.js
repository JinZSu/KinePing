import React from 'react'
import HamburgerSVG from "./HamburgerSVG.js";
import "./TopBar.css"

const TopBar = () =>{

	return(
        <nav>
          <h3 className = "logo"> Dream Chad </h3>
            <HamburgerSVG/>
        </nav>
	);
	
}

export default TopBar; 