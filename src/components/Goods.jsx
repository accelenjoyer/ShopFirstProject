import React from 'react';
import "../styles/goods.css"
import Product from "./Product";
import image1 from "../static/image1.png"
import image3 from "../static/image3.jpg"
import image4 from "../static/image4.jpg"
import image5 from "../static/image5.jpg"
import image6 from "../static/image6.jpg"
import image7 from "../static/image7.jpg"
import image8 from "../static/image8.jpg"
import image9 from "../static/image9.jpg"
import {useState} from "react";
import {featureListContext} from "../contexts/context";

const Goods = () => {
    const [searchText, setSearchText] = useState('');

    const products = [
        { id: 1, name: "ARQA Peach Mango 100mg", img: image1, price: "400Р" },
        { id: 2, name: "ARQA Cold Winter Tale 70mg", img: image3, price: "400Р" },
        { id: 3, name: "ICEBERG Energy Drink 120mg", img: image4, price: "450Р" },
        { id: 4, name: "KURWA Killer 150mg", img: image5, price: "400P" },
        { id: 5, name: "KASTA Abrikos 105mg", img: image6, price: "350Р" },
        { id: 6, name: "BLAX Strawberry 70mg", img: image7, price: "350Р" },
        { id: 7, name: "BOSHKI White Hard 180mg", img: image8, price: "500Р" },
        { id: 8, name: "BLAX BubbleGum 150mg", img: image9, price: "350Р" }
    ];




    return (
        <div className="goods-container">
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Поиск продуктов..."
                className="search-input"
            />
            {products.filter(product => product.name.includes(searchText)).map(product => (
            <Product key={product.name} name={product.name} img={product.img} price={product.price} />
        ))}






        </div>

    );
};

export default Goods;