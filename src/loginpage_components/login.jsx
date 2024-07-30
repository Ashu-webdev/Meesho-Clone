import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import Navbar from './navbar';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', email, password);
  };

  return (
    <>
    <Navbar />
    <div className="login-container123">
      <div className="login-form223">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          <button type="submit">Login</button>
        </form>
         <p>Don't have an account? <Link to="/signup">Sign Up</Link> 
         </p> 

      </div>
    </div>
    </>
  );
};

export default Login;