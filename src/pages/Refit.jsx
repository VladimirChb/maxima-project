import React, {useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../App";

const Refit = () => {
    const {refits} = useContext(AppContext)
    let navigate = useNavigate();
    let {id} = useParams();

    const refit = refits.find((item) => item.id === Number(id))

    if (!refit) {
        return (
            <div>
                Услуга не найдена!
            </div>
        )
    }

    return (
        <div>
            <h2>Услуга</h2>
            <div className="card">
                {/*<img src={'https://travelmamas.com/wp-content/uploads/2020/04/first_state_usa_square.jpg'} width={100}/>*/}
                {/*<img src={'https://travelmamas.com/wp-content/uploads/2020/04/first_state_usa_square.jpg'} width={100}/>*/}
                <h2>{refit.title}</h2>
                <p>{refit.description}</p>
                <span> цена услуги от {refit.price} рублей</span>
                <button onClick={() => navigate(`/send/${id}`)}>Оставить заявку</button>
            </div>

        </div>
    );
};

export default Refit;

// От услуги до div
// <div className="card">
//     {/*<img src={'https://travelmamas.com/wp-content/uploads/2020/04/first_state_usa_square.jpg'} width={100}/>*/}
//     {/*<img src={'https://travelmamas.com/wp-content/uploads/2020/04/first_state_usa_square.jpg'} width={100}/>*/}
//     <h2>{refit.title}</h2>
//     <p>{refit.description}</p>
//     <span>{refit.price}р</span>
//     <button onClick={() => navigate(`/send/${id}`)}>Оставить заявку</button>
// </div>