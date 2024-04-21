import React, {useState} from 'react';
import '../styles/registration.css';
import axios from "axios";
const Registration = () => {
    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/v1/registers/", {


                login: login,
                password: password
            });
        }
        catch (error) {
        console.error(error)
        }
    };
    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Регистрация</h2>
                <div className="form-group">
                    <label htmlFor="username">Логин:</label>
                    <input type="text" id="username" name="username" placeholder="Введите ваш логин" value={login}
                    onChange={event => setLogin(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль:</label>
                    <input type="password" id="password" name="password" placeholder="Введите ваш пароль" value={password}
                           onChange={event => setPassword(event.target.value)}/>
                </div>
                <button type="submit" className="lol">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Registration;
