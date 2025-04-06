import React from "react";
import "./Header.css";
import brgy360logo from "/src/assets/brgy360logo.png";

const Header = () => {
    return (
        <div className="header-2">
            <img className="brgy-360-1" src={brgy360logo} alt="Brgy360 Logo" />
        </div>
    );
};

export default Header;
