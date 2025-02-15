import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // For navigation after login

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4080/login", formData)
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          toast.success("Login successful!", { position: "top-right" });
          navigate("/home");
        }else{
          toast.error("Invalid credentials, try again!", { position: "top-right" });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="card p-4 shadow-lg" style={{ width: "400px", backgroundColor: "#ffffff", borderRadius: "10px" }}>
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-dark">Email</label>
            <input
              type="email"
              name="email"
              className="form-control border-primary"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-dark">Password</label>
            <input
              type="password"
              name="password"
              className="form-control border-primary"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3 text-secondary">
          Don't have an account? <a href="/register" className="text-primary">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
