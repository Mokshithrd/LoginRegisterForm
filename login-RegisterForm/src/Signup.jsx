import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios  from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>
    {
        e.preventDefault()
        axios.post('http://localhost:4080/register',{name,email,password})
        .then(result=>{console.log(result)
          if(result.data=="success"){
               toast.success("SignUP successful ,Now Login!", { position: "top-right" });
          }else{
            toast.error("Invalid credentials, try again!", { position: "top-right" });
          }
        navigate('/login')})
        .catch(err=>console.log(err))
    }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="card p-4 shadow-lg" style={{ width: "400px", backgroundColor: "#ffffff", borderRadius: "10px" }}>
        <h2 className="text-center mb-4 text-primary">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-dark">Name</label>
            <input type="text" name="name" className="form-control border-primary" onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label text-dark">Email</label>
            <input type="email" name="email" className="form-control border-primary" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label className="form-label text-dark">Password</label>
            <input type="password" name="password" className="form-control border-primary" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
        <p className="text-center mt-3 text-secondary">Already have an account? <a href="/login" className="text-primary">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
