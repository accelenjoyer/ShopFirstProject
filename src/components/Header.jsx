import React from 'react';
import "../styles/header.css"
import Searchbar from "./Searchbar";
import FeatureWindow from "./FeatureWindow";
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className="header-container">
            <Searchbar/>
            <div className="abso">
            <Link to="/feedbacks">
                <button className="feedback-button"></button>
            </Link>

                </div>
        </div>
    );
};

export default Header;