import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  return <div className='home1'>
      <Link className='register1' to = "/">Register</Link>
      <Link className = "login1" to = "/Login">Login</Link>
  </div>;
};

export default Home;
