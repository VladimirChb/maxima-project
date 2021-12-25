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
            <h2>Услуги предприятия</h2>
            {refits.map((card) => {
                return (
                    // <Card key={card.id} card={card}/>
                    <Card key={card.id} card={card}/>
                )

            })}
        </div>
    );
};

export default Main;
