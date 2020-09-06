import React from "react";
import websiteLogo from "./images/website-logo.png";
import "./styles/Navbar.css";


const Navbar = () => {
    return (
        <div className="navbar">
            <img src={websiteLogo} style={{width: "200px", height: "45px"}}/>
            <img src="https://www.senseiprojectsolutions.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
            style={{height: "60px", borderRadius: "50px"}}/>
        </div>
    );

};

export default Navbar;