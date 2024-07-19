import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/page/Register.css';


const Register =() =>{
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [email,setemail]=useState('');
    const [retypepassword,setretypepassword]=useState('');
    const [usernameerror,setusernameerror]=useState(false);
    const [passworderroe,setpassworderror]=useState(false);
    const [retypepassworderror,setretypepassworderror]=useState(false);
    const navigate=useNavigate();
    const handleforSubmit = async (event)=>{
        event.preventDefault();

        setpassworderror(false);
        setusernameerror(false);
        setretypepassworderror(false);
        if(password!==retypepassword){
            setretypepassworderror(true);
            return;
        }
        const Regexpassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,;'@!%*?&])[A-Za-z\d.,;'@!%*?&]{8,24}$/;
        if(Regexpassword.test(password)){
            setpassworderror(true);
            return;
        }
        try
        {
            const registerResponse = await axios.post('http://localhost:5000/api/register', {
                Username: username,
                Password: password,
                RetypePassword: retypepassword
        });
          if(registerResponse.status===200){
            navigate('/Login');
          }
        }
        catch(error)
        {
            setusernameerror(true);
            console.error('Register faile'+error);
        };
    };
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
                            <div className='inputbox'>
                                <input id='email' type='email' placeholder='Email' value={email} onChange={(e)=> setemail(e.target.value)} required/>
                            </div>
                            <div className='inputbox'>
                                <input id='retypepassword' type='retypepassword' placeholder='Retype Password' value={password} onChange={(e)=> setretypepassword(e.target.value)} required/>
                                <i className='bx bxs-lock-alt'></i>
                            </div>
                            <button className="btn" type="submit" href="/Login" onClick={handleforSubmit}>Register</button>
                            <div className="register-link">
                                    <p>I have an account <Link to='/Login'>Login now</Link></p>
                            </div>

                        </form>
                    </div>
        </div>
       
    )
}

export default Register;