import React, { useState, useEffect } from 'react';
import "../styles/cart.css";

// Компонент для отображения отдельного продукта в корзине
const ProductItem = ({ name, price }) => {
    return (
        <div className="product-item">
            <p className="product-name">{name}</p>
            <p className="product-price">{price}</p>
        </div>
    );
};

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Получаем сохраненные данные из localStorage
        const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
        // Устанавливаем их в состояние корзины
        setCartItems(savedProducts);
    }, []);

    return (
        <div className="cart-container">
            <div className="product-info">
                {/* Отображаем элементы корзины */}
                {cartItems.map((product, index) => (
                    <ProductItem key={index} name={product.name} price={product.price} />
                ))}
                {/* Заголовки столбцов */}
                <div className="column-header">
                    <p className="name">Наименование</p>
                    <p className="price">Цена</p>
                </div>
                <hr className="hr"/>
                <button className="payment-button">
                    Подтвердить
                </button>
            </div>
        </div>
    );
};

export default Cart;


