import React, { useState } from 'react';
import "../styles/searchbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Registration from "./Registration";
import button from "bootstrap/js/src/button";
import FeatureWindow from "./FeatureWindow";
import {Link} from "react-router-dom";




const Searchbar = () => {

    const [searchText,setSearchText] = useState("")



    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Вы ищете:",searchText)
    }





    return (
            <div className={`search-container`}>

            <FontAwesomeIcon icon={faCartShopping} className="shopping-cart" />
            <FontAwesomeIcon icon={faUser} className="user-icon"  />
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            <FontAwesomeIcon icon={faEnvelope} className="supporting" />

            <div className="img-container">

            </div>

                <div>
                    <FeatureWindow/>
                    <Link to="/feedback">
                        <button className="fdbk"></button>
                    </Link>
                    <Link to="/cart">
                        <button className="end">
                            sss
                        </button>
                    </Link>
                </div>


        </div>



    );
};

export default Searchbar;
