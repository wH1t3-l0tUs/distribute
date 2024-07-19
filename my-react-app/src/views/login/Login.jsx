import React,{useState} from 'react';
import axios from 'axios';
import '../../assets/css/page/Login.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from '../register/Register';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Login =() =>{
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [passworderroe,setpassworderror]=useState('');
    const [errorMessage,seterrorMessage]=useState('');
    const navigate=useNavigate();

    const handleforSubmit = async (event)=>{
        event.preventDefault();

        try{
            const reponse= await axios.post('http://localhost:5000',{username,password})
            if(reponse.status===200)
            {
                navigate('/');
            }
            else{
                seterrorMessage('Login Failed')
            }
        }
        catch(error)
        {
            seterrorMessage('Login Failed')
            console.error('Login Failed'+error)
        }
    };
    const signInWithGoogle = async (event)=>{
        event.preventDefault();
    }
    return (
        <div className='Body'>
            <div className='wrapper'>
                <form id='formlogin' onSubmit={handleforSubmit}>
                    <h1>Login</h1>
                    <div className='inputbox'>
                        <input id='username' type='username' placeholder='Username' value={username} onChange={(e)=>setusername(e.target.value)} required/>
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className='inputbox'>
                        <input id='password' type='password' placeholder='Password' value={password} onChange={(e)=> setpassword(e.target.value)} required/>
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className='rememberforgot'>
                        <label>
                            <input type='checkBox'/>Remember
                        </label>
                        <a href="">Forgot password</a>
                    </div>
                    <button className="btn" type="submit">Login</button>
                    <p className="or-text" style={{ color: 'white' }}>OR</p>

                </form>
                <div>
                    <button className="btn" onClick={signInWithGoogle} style={{ backgroundColor: 'aquamarine' }}>
                    <p>
                        <img style={{ width: '12px', height: '12px', margin: '0px' }} src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK" alt="Google icon" /> Login With Google
                    </p>
                    </button>
                </div>
                <div className="register-link">
                    <p>I don't have an account <Link to='/register'>Register now</Link></p>
                </div>
            </div>
        </div>

    )
}

export default Login;