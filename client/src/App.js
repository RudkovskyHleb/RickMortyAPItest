import React, {useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter} from "react-router-dom";
import {AuthContext} from './context'
import Navbar from "./UI/Navbar";
import AppRouter from "./AppRouter";
function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] =useState(true)
    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
        setLoading(false)
    }, [])
    return (
        <AuthContext.Provider value = {{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar />

                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}
export default App;
