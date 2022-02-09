import React, {useState } from "react";
import Register from "./components/Register";
import "./app.css";
import { Link } from "react-router-dom";
const App = () => {
  const [values, setValues]= useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
  })
  
  // const firstnameRef = useRef();
  // console.log(firstnameRef);
  // console.log("re-redered");

  const inputs = [
    {
      id:1,
      name:"firstname",
      type:"text",
      placeholder:"Enter Firstname",
      label:"FIRSTNAME"
    },
    {
      id:2,
      name:"lastname",
      type:"text",
      placeholder:"Enter Lastname",
      label:"LASTNAME"
    },
    {
      id:3,
      name:"email",
      type:"email",
      placeholder:"Enter Email",
      label:"EMAIL"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Enter Password",
      label:"PASSWORD"
    }
  ]
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstnameRef);
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()))
  };
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  }

  console.log(values)
{/* <h1>shubham<h1/> */}
{/* <h1>shubham semwal</h1> */}
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      <h1>Register Form</h1>
      <Link className="login2" to='/Login'>Login</Link>
      <Link className="home2"to ='/Home'>Home</Link>
      {inputs.map((input)=>(
        <Register key = {input.id} {...input}
          value = {values[input.name]}
          onChange ={onChange}
        />
      ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
