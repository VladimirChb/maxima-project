import React from 'react';
import './Card.css'
import {useNavigate} from "react-router-dom";

const Card = ({card}) => {
    const {id, title, description, image} = card
    let navigate = useNavigate()
    return (
        <div className="card">

            {/*<img src={'https://travelmamas.com/wp-content/uploads/2020/04/first_state_usa_square.jpg'} width={100}/>*/}
            {/*<img src={'http://www.mrsk-1.ru/bitrix/templates/mrsk/images/customers/additionalIcons/additional-icon2-hover.png'} width={100}/>*/}
            <div>{image}</div>
            <h3>{title}</h3>
            {/*<p>{description}</p>*/}

            <button onClick={() => navigate(`/refit/${id}`)}>Перейти</button>
        </div>
    )
}

// Было после инпута до конца
// const Card = ({card}) => {
//     const {id, title, description, image} = card
//     let navigate = useNavigate()
//     return (
//         <div className="card">
//
//             {/*<img src={'https://travelmamas.com/wp-content/uploads/2020/04/first_state_usa_square.jpg'} width={100}/>*/}
//             {/*<img src={'http://www.mrsk-1.ru/bitrix/templates/mrsk/images/customers/additionalIcons/additional-icon2-hover.png'} width={100}/>*/}
//
//             <h2>{title}</h2>
//             <p>{description}</p>
//             <div>{image}</div>
//             <button onClick={() => navigate(`/tour/${id}`)}>Перейти</button>
//         </div>
//     )
// }


export default Card;
