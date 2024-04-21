import Header from "../components/Header";
import Wallpaper from "../components/Wallpaper";
import Goods from "../components/Goods";
import React from 'react';

const Main = () => {
    return (
        <div className="blur-effect">
            <div className="header">
                <Header/>

            </div>
            <Wallpaper/>
            <Goods/>
        </div>
    );
};

export default Main;