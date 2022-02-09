import React from 'react';
import { Routes, Route  } from "react-router-dom";
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
const Path =() => {
    return(
        
        <Routes>
        <App />
            <Route path = "/app" element ={<App />} />
            <Route path = "/login" element ={<Login />} />
        </Routes>
    )
}
export default Path ;