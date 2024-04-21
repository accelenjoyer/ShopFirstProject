import React, {useState, useEffect, useContext} from 'react';
import "../styles/featurebutton.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {featureListContext} from "../contexts/context";


const Featurebutton = ({ product }) => {
    const {addToList} = useContext(featureListContext)

    const handleButtonClick = () => {
        addToList(product)

    }




    return (
        <button onClick={handleButtonClick} className="Feature-btn">
            <FontAwesomeIcon icon={faHeart} className="heart" />
        </button>

    );
};
export default Featurebutton