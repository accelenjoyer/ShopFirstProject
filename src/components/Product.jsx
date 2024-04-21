import React, {useState} from 'react';
import "../styles/product.css"
import Featurebutton from "./Featurebutton";

const NotificationBlock = () => {return (
    <div className="notification-block">
        Товар успешно добавлен в корзину
    </div>)}

const Product = (props) => {
    const [isShowed,setIsShowed] = useState(false);

    const handleClick = () => {
        // Получаем массив сохраненных продуктов или пустой массив, если ничего не сохранено
        let savedProducts = JSON.parse(localStorage.getItem("products")) || [];
        // Добавляем новый продукт в массив
        savedProducts.push({ name: props.name, price: props.price });
        // Сохраняем обновленный массив продуктов в localStorage
        localStorage.setItem("products", JSON.stringify(savedProducts));
        console.log(savedProducts);
        setIsShowed(true)
        setTimeout(() => {
            setIsShowed(false);

        },3000)
    };

        return (
            <div className="snus-container">
            <p className="texter">{props.name}</p>
                <div className="main-data">
                    <img src={props.img} alt="blya" className="img"/>
                    <p className="price-block">
                        <button className="btn btn-dark" onClick={handleClick}>
                        {props.price}
                        </button>
                        <Featurebutton product={props.name}/>
                    </p>
                    {isShowed && <NotificationBlock/>}
                    <div className={`notification-block ${isShowed ? 'active' : ''}`}>
                        Товар успешно добавлен в корзину
                    </div>
                </div>
            </div>
        );
    };

    export default Product;