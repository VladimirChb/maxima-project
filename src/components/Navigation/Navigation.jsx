import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../../App";
import './Navigation.css'
// import IndexPage from "../components/IndexPage/Indexpage";


const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AppContext)
    let navigate = useNavigate();
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + 'cheboksary_small.png'} alt={"logo"}/>
                </div>
                    <h1>ООО "Электросетевая компания"</h1>
                {/*<div className="link">*/}
                {/*    <Link to="/">главная страница</Link>*/}
                {/*</div>*/}
                <div className="link">
                    <Link to="/main">главная страница</Link>
                </div>


                <div className="link">
                    <Link to="/refit">услуги предприятия</Link>
                </div>
                <div className="link">
                    <Link to="/private">личная страница</Link>
                </div>
                <div className="button">
                {/*<Link to="/">главная страница</Link>*/}
                {/*<Link to="/refit">услуги предприятия</Link>*/}
                {/*<Link to="/private">личная страница</Link>*/}
                {!isAuth && <button onClick={() => navigate(`/private`)}>Login</button>}
                {isAuth && <button onClick={() => setIsAuth(false)}>Logout</button>}
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
