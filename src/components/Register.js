import React from 'react';
import "./Register.css"
const Register = (props) => {
  const{label , onChange , id , ...inputProps} = props;
  return (
  <div className='register'>
      <label>
          {label}
      </label>
      <input{...inputProps} onChange={onChange}  />
  </div>
  );
};

export default Register;

