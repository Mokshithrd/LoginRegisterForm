import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <h1 className="text-primary mb-4">Welcome to Our Website</h1>
      <p className="text-secondary text-center" style={{ maxWidth: "600px" }}>
        Explore amazing features and services we offer. Sign up or log in to get started!
      </p>
      <div className="d-flex gap-3 mt-4">
        <a href="/register" className="btn btn-primary">Sign Up</a>
        <a href="/login" className="btn btn-secondary">Login</a>
      </div>
    </div>
  );
};

export default Home;
