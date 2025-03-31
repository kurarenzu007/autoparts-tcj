import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import tcjLogo from '../assets/tcj_logo2.png';
import Header from '../components/Header';

const Login = () => {
  return (
    <>
      <Header cartItems={0} />
      <div className="login-container">
        <div className="login-left">
          <img src={tcjLogo} alt="TJC Auto Supply" className="login-logo" />
          <h1 className="login-brand-text">SPAREPARTS HUB</h1>
        </div>
        
        <div className="login-right">
          <div className="login-form-container">
            <h2>Login Account</h2>
            <p className="login-subtitle">Login your e-mail and password</p>
            
            <form className="login-form">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Email / Number"
                  className="login-input"
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="password" 
                  placeholder="Password"
                  className="login-input"
                />
              </div>
              
              <button type="submit" className="login-button">
                Login
              </button>
              
              <div className="login-links">
                <div className="login-link-group">
                  <span>New customer? </span>
                  <Link to="/register" className="blue-link">Create your account</Link>
                </div>
                
                <div className="login-link-group">
                  <span>Lost password? </span>
                  <Link to="/recover-password" className="blue-link">Recover password</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login; 