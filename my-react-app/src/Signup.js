import React, {useState} from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () =>{
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [email, setemail]= useState('');
    const [confirmPassword, setconfirm]=useState('');
    const [usernameError,setUsernameError]=useState('false');
    const [passwordError,setPasswordError]=useState('false');
    const [confirmPasswordError,setconfirmerror]=useState('false');
    const handleFormSubmit = async (event) =>{
        event.preventDefault();

        setUsernameError(false);
        setPasswordError(false);
        setconfirmerror(false);
        if(password!==confirmPassword)
            {
                setconfirmerror(true);
                return;
            }
        const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,;'@!%*?&])[A-Za-z\d.,;'@!%*?&]{8,24}$/;
        if(password!==passwordRegex)
            {
                setPasswordError(true);
                return;
            }
        try{
            const registerResponse = await axios.post()
        }
        catch(error){
            
        }

    }

    

    return(
        <div className="containner">
            <form onSubmit={handleFormSubmit}>
                <h1>Register</h1>
                <div className="inputBox">
                    <input type="username" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)} required ></input>
                    <i className='bx bxs-user'></i>
                </div>
                <div className='inputBox'>
                    <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.password)} required></input>
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className='inputBox'>
                    <input type="email" placeholder="Email" value={email} onChange={(e)=> setemail(e.target.value)} required></input>
                </div>
                <div className='inputBox'>
                    <input type="confirmpassword" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>setconfirm(e.target.value)} required></input>
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <button className="btn" type="submit">Register</button>
                <div className="register-link">
                  <p>You already have an account? <a href="my-react-app\src\Login.js">Login now</a></p>
                </div>
            </form>
        </div>
    )
}

export default Signup;