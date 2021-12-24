import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Main from "./pages/Main";
import Refit from "./pages/Refit";
import Private from "./pages/Private";
import {createContext, useEffect, useState} from "react";
import {cards} from "./database";
import Send from "./pages/Send";
import IndexPage from "./components/IndexPage/IndexPage";


export const AppContext = createContext(null)

function App() {
    const [refits, setRefits] = useState([])
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const response = cards
        setRefits(response)
    }, [])

    return (
        <AppContext.Provider value={{refits, setRefits, isAuth, setIsAuth}}>
            <Navigation/>

            <main style={{padding: 32}}>
                <Routes>
                    {/*<Route path="/" element={<IndexPage/>}/>*/}
                    <Route path="/" element={<Main/>}/>
                    <Route path="/refit/:id" element={<Refit/>}/>
                    <Route path="/private" element={<Private/>}/>
                    <Route path="/send/:refitId" element={<Send/>}/>
                    <Route path="*" element={<Navigate to='/'/>}/>

                </Routes>
            </main>

        </AppContext.Provider>
    );
}

export default App;