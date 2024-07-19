// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../Model/User');
const {findUserByUsername,generatetoken,createUser} = require('../Model/User');

const Handleregister =async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await findUserByUsername(username)
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const userID = await createUser(username,password,email); 
    const token = generatetoken(userID);
    /*req.session.user={
        userId: userID,
        username: username,
        token: token
    }**/
    res.status(200).send({userID, token});
    }
    catch(error){
        console.error('Failed register'+error);
        res.status(400).json({error: error.message});
    }
};

const HandleLogin = async (req,res) => {
    try{
        let username = req.body.Username;
        let password = req.body.password;
    
        const user = checkaccount(username,password);
        if(!user)
        {
            return res.status(400).json({error: 'Invalid login credentials'})
        }
        const token =  generatetoken(user.id)
        req.session.user = {
            userID: user.id,
            username: user.username,
            token: token
        }
        res.status(200).send({ userId: user.id, token: token });
    }
    catch(error){
        console.error('Error logging in:'+error);
        res.status(400).json({error: error.message});
    }
  
}

module.exports ={Handleregister, HandleLogin}
