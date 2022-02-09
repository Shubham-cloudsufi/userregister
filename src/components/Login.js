import {useRef} from "react";
import "./Login.css"
import { Link } from "react-router-dom";
const Login = () => {
  const emailRef =useRef();
  const passwordRef =useRef();

  const onSubmit =(e) => {
    e.preventDefault();
    console.log("Email value:" + emailRef.current.value )
    console.log("Password value:" + passwordRef.current.value )
  }

  return (
    <div className="app">
      <form onSubmit={onSubmit} className="form">
        <h1>LOGIN FORM</h1>
        <Link className="register3" to="/">Register</Link>
        <Link className="home3" to="/Home">Home</Link>
        <div className="inputs">
          <label htmlFor="email" className="label">
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your Email"
            ref={emailRef}
            required
          />
        </div>
        <div className="inputs">
          <label htmlFor="password" className="label">
            PASSWORD
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your Password"
            ref={passwordRef}
            required
          />
        </div>
        <button className="form-btn" type="submit">
          Resgiter
        </button>
      </form>
    </div>
  );
};

export default Login;
