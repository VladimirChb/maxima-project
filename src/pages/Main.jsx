import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card/Card";
import {AppContext} from "../App";

const Main = () => {
    const {refits} = useContext(AppContext)

    if (!refits.length) {
        return  (
            <div>...Loading</div>
        )
    }
    return (
        <div>
            <h1>Услуги предприятия</h1>
            {refits.map((card) => {
                return (
                    <Card key={card.id} card={card}/>
                )
            })}
        </div>
    );
};

export default Main;
