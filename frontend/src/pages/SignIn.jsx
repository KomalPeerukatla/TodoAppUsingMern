import { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import "./Signin.css";
import axios from "axios";
const SignIn = () => {
  const navigate=useNavigate();
const [form,setForm]=useState({email:"",password:""})

  const handleLogin = async(e) => {
    e.preventDefault();
    try{
      const response=await axios.post("http://localhost:3000/auth/signin",form);
      if(response.data.success){
        localStorage.setItem("token",response.data.token);
        alert("Login Succesfull");
        setForm({email:"",password:""});
        navigate("/");
      }else{
        alert(response.data.message);
      }

    }catch(error){
      console.log(error);
    }
  };

  return (
    <div className="signin-container">
      <h1>SignIn</h1>

      <form className="signin-form" onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => setForm({...form,email:e.target.value})}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) => setForm({...form,password:e.target.value})}
        />

        <button type="submit" className="signin-btn" >
          Login
        </button>
      </form>

      <p className="signup-text">
        Don't have an account?
        <Link to="/signup" className="signup-link">SignUp</Link>
      </p>
    </div>
  );
};

export default SignIn;
