import React, {useContext, useState} from 'react';
import {AppContext} from "../App";
import {users} from "../database";
import './Login.css';
// import './Loginerrow.js';

const Login = () => {
    const {setIsAuth} = useContext(AppContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
        e.preventDefault()
        const isUser = users.find((item) => item.login === login)
        if (!isUser) {
            return alert('нет такого клиента!')
        }
        if (isUser.password !== password) {
            return alert('неверный ввод паспорта!')
        }
        setIsAuth(true)
        console.log("пользователь", isUser)
    }

    return (
        <div>
{/*Вариант 1            */}
{/*            <h1>Private</h1>*/}
{/*            <form onSubmit={handleLogin}>*/}
{/*                <input type="text"*/}
{/*                       placeholder="login"*/}
{/*                       value={login}*/}
{/*                       onChange={(e) => setLogin(e.target.value)}*/}
{/*                />*/}
{/*                <input type="text"*/}
{/*                       placeholder="password"*/}
{/*                       value={password}*/}
{/*                       onChange={(e) => setPassword(e.target.value)}*/}
{/*                />*/}
{/*                <button type="submit">Войти</button>*/}

    {/*Вариант 2*/}
    {/*        <form action="POST" className="form" onSubmit="validateForm(event)">*/}
    {/*            <h1 className="form__title">Регистрация</h1>*/}
    {/*            <div className="registration_form">*/}
    {/*                <div className="form__input">*/}
    {/*                    <label htmlFor="email">Введие логин (email)</label>*/}
    {/*                    <input type="text"*/}
    {/*                           placeholder="johndoe@email.com"*/}
    {/*                           id="email"/>*/}
    {/*                    <span>error</span>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*            <div className="form__input">*/}
    {/*                <label htmlFor="password">Введите пароль</label>*/}
    {/*                <input type="password"*/}
    {/*                       placeholder="введите пароль"*/}
    {/*                       id="password"/>*/}
    {/*                <span>error</span>*/}

   {/*Вариант 3*/}
            <form action="POST" className="form" onSubmit="handleLogin()">
   {/*             <form onSubmit={handleLogin}>*/}
                <h2 className="form__title">Личный кабинет</h2>
                <div className="registration_form">
                    <div className="form__input">
                        <label htmlFor="email">Введие логин (email)</label>
                        <input type="text"
                               placeholder="johndoe@email.com"
                               id="email"/>
                        {/*<span>error</span>*/}
                    </div>
                </div>
                <div className="form__input">
                    <label htmlFor="password">Введите пароль</label>
                    <input type="password"
                           placeholder="введите пароль"
                           id="password"/>
                    {/*<span>error</span>         */}


                </div>

                <div className="form__checkbox">
                    <input type="checkbox" id="checkbox"/>
                    <label htmlFor="checkbox"><a href="">Пройдите по ссылке</a></label>
                    {/*<span>error</span>*/}
                </div>

                <button className="form__button" type="submit">Вход в личный кабинет</button>


            </form>
        </div>
    );
};

export default Login;
