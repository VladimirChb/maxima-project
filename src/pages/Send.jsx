import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import './Send.css'

const Send = () => {
    const {refitId} = useParams()
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')

    function sendUserData(e) {
        e.preventDefault()
        localStorage.setItem('name', name)
        localStorage.setItem('phone', phone)
        localStorage.setItem('refitId',refitId)
    }

    return (
        <form onSubmit={sendUserData}>


            <div class="application_form">
                <h2>Заявка на услугу</h2>
                <div className="form__input">
                    <label for="text">Укажите номер Вашего телефона для уточнения заказа</label>
                    <input type="text"
                           required
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="укажите номер телефона"/>
                </div>
                <div className="form__input">
                    <label htmlFor="text">Для оформления заказа необходимо указать Ваше имя</label>
                    <input type="text"
                           required
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           placeholder="введите имя"/>
                </div>
                    <button className="form__button" type="submit">Оставить мои данные</button>

            </div>
        </form>
    );
};

export default Send;

// было внутри тега form
// <input type="text"
//        required
//        value={phone}
//        onChange={(e) => setPhone(e.target.value)}
//        placeholder="укажите номер телефона"/>
// <input type="text"
//        required
//        value={name}
//        onChange={(e) => setName(e.target.value)}
//        placeholder="введите имя"/>
// <button type="submit">Оставить мои данные</button>