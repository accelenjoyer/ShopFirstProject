// FeatureWindow.js
import React, { useState, useContext } from 'react';
import { featureListContext } from '../contexts/context';
import '../styles/featurewindow.css';
import product from "./Product";


const FeatureWindow = () => {
    const {featureList} = useContext(featureListContext);
    const [isActive, setIsActive] = useState(false);

    const handleActivate = () => {
        setIsActive(prevState => !prevState);

    };


    return (
        <div className="containerras">
            <button onClick={handleActivate} className="gg"></button>
            {isActive && (
                <div className="feature-containeras">
                    {featureList.map((product) => {
                        console.log(product)
                        return  <div className="part">{product}</div>

                    })}
                </div>

            )}



        </div>
    );
};

export default FeatureWindow;
