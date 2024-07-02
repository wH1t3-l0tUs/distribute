import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Reset error messages
    setUsernameError(false);
    setPasswordError(false);
    setPasswordMatchError(false);

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,;'@!%*?&])[A-Za-z\d.,;'@!%*?&]{8,24}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(true);
      return;
    }

    try {
      // Send registration request to API
      const registerResponse = await axios.post('/v1/Register', {
        Username: username,
        Password: password,
        RetypePassword: confirmPassword
      });

      if (registerResponse.status === 200) {
        window.location.href = '/';
      }
    } catch (error) {
      setUsernameError(true);
      console.error('Registration failed: ' + error);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleFormSubmit}>
        <h1>Register</h1>
        <div className="inputbox">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
            required
          />
          <i className='bx bxs-user'></i>
          {usernameError && <div style={{ color: 'red' }}>Tên người dùng đã tồn tại.</div>}
        </div>
        <div className="inputbox">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i className='bx bxs-lock-alt'></i>
          {passwordError && (
            <div style={{ color: 'yellow' }}>
              Password: 8-24 ký tự, gồm chữ hoa, chữ thường và kí tự.
            </div>
          )}
        </div>
        <div className="inputbox">
          <input
            type="password"
            placeholder="Retype Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <i className='bx bxs-lock-alt'></i>
          {passwordMatchError && (
            <div style={{ color: 'yellow' }}>
              Password và Confirm Password không khớp.
            </div>
          )}
        </div>
        <button className="btn" type="submit">Register</button>
        <div className="register-link">
          <p>You already have an account? <a href="/login">Login now</a></p>
        </div>
      </form>
    </div>
  );
};

export default Register;
