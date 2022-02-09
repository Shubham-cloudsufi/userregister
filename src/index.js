import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path ="/" element= {<App />} />
        <Route path ="/login" element= {<Login />} />
        <Route path ="/register" element= {<Register />} />
        <Route path ="/home" element ={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);