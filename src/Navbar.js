import React from "react";
import {Link} from "react-router-dom";
import websiteLogo from "./images/website-logo.png";
import "./styles/Navbar.css";


function Navbar () {
    return (
        <nav className="navbar">
            <ul>
            <Link to="/">
                <li className="navbar-logo"><img src={websiteLogo} style={{width: "200px", height: "45px"}}/></li>
            </Link>
            <Link to="/challenge-list">
                <li>Challenges</li>
            </Link>
            <li className="navbar-profile"><img src="https://www.senseiprojectsolutions.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
            style={{height: "50px", borderRadius: "50px"}}/></li>
            </ul>
        </nav>
    );

}

export default Navbar;