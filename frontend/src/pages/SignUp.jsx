import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import "./SignUp.css"

const SignUp = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const handleSignUp = async (e)=> {
        e.preventDefault();
        try{
            const response=await axios.post("http://localhost:3000/auth/signup",form);
            if(response.data.success){
                 alert("Account Created");
                 setForm({ username: "", email: "", password: "" })
                 navigate("/signin");
            }else{
                alert(response.data.message);
            }
        }catch(error){
            console.log(error);
        }
    };
    return (
        <div className="signup-container">
            <h1>Create Account</h1>

            <form className="signup-form" onSubmit={handleSignUp}>

                <label>Username:</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={form.username}
                    onChange={(e) =>
                        setForm({ ...form, username: e.target.value })
                    }
                />


                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({...form,email:e.target.value})
                }
                />

                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form,password:e.target.value })
                }
                />

                <button className="signup-btn" type="submit">Submit</button>
            </form>

            <p className="signin-text">
                Already have an account?
                <button className="signin-btn" onClick={() => navigate("/signin")}>
                    SignIn
                </button>
            </p>
        </div>
    )
}

export default SignUp
