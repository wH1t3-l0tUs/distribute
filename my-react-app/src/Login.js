import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/v1/Login', { Username: username, Password: password });
      if (response.status === 200) {
        window.location.href = '/';
      } else {
        setErrorMessage('Tên người dùng hoặc mật khẩu không chính xác.');
      }
    } catch (error) {
      setErrorMessage('Tên người dùng hoặc mật khẩu không chính xác.');
      console.error('Đăng nhập không thành công: ' + error);
    }
  };
const signInWithGoogle= async (event) =>{
  
}

  return (
    <div className="wrapper">
      <form id="loginForm" onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <div className="inputbox">
          <input type="text" placeholder="Username" id="Username" name="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          <i className='bx bxs-user'></i>
        </div>
        <div className="inputbox">
          <input type="password" placeholder="Password" id="Password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i className='bx bxs-lock-alt'></i>
          {errorMessage && <div id="login-error-message" style={{ color: 'yellow' }}>{errorMessage}</div>}
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/ForgotPassword">Forgot password?</a>
        </div>
        <button className="btn" type="submit">Login</button>
        <p className="or-text" style={{ color: 'white' }}>OR</p>
      </form>
      <div>
        <button className="btn" onClick={signInWithGoogle} style={{ backgroundColor: 'aquamarine' }}>
          <p>
            <img style={{ width: '12px', height: '12px', margin: '0px' }} src="F:\FPT\distribute\my-react-app\public\google.pngg" alt="Google icon" /> Login With Google
          </p>
        </button>
      </div>
      <div className="register-link">
        <p>Don't have an account? <a href="my-react-app\src\Signup.js">Register now</a></p>
      </div>
    </div>
  );
};

export default Login;
