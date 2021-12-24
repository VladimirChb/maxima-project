import React, {useContext} from 'react';
import {AppContext} from "../App";
import Login from "./Login";

const Private = () => {
    const {isAuth, refits} = useContext(AppContext)

    if (!isAuth) {
        return (
            <Login />
        )
    }

    const refitId = localStorage.getItem('refitId')
    const name = localStorage.getItem('name')
    const phone = localStorage.getItem('phone')

    if (refitId && name && phone) {
        const refit = refits.find(refit => refit.id == refitId)
        return (
            <div>
                <h2>Top Secret</h2>
                <div>
                    <h3>{name}</h3>
                    <p>{phone}</p>
                    <span>{refit.title}</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2>Top Secret</h2>
            <div>
                Нет заявок
            </div>
        </div>
    )


};

export default Private;
