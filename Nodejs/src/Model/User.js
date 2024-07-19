// userModel.js
const bcrypt = require('bcrypt');
const connectDB = require('../Config/Database');
const jwt = require('jsonwebtoken');
const User = require('../Config/User');
require('dotenv').config();

connectDB();


const generatetoken = (userId) => {
    return jwt.sign({_id: userId},process.env.jwt_secretkey);
};

const findUserByUsername = async (username) => {
    try {
        const user = await User.findOne({ username });
        return user; // Trả về thông tin của người dùng nếu tìm thấy, nếu không sẽ là null
    } catch (error) {
        throw new Error(`Error finding user by username: ${error.message}`);
    }
};

const createUser = async (username, password, email) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
        const newUser = new User({
            username: username,
            password: hashedPassword,
            email: email
        });
        const result = await newUser.save();
        return result._id;
    } catch (error) {
        console.error('Failed to create'+error);
    }
};

const checkaccount = async (username, password) =>{
    try{
        const checkusername = User.findOne(username);
        if(!checkusername)
        {
            return done(null, false, { message: 'No user with that username' });
        }
        const pass =  await bcrypt.compare(password,checkusername.password);
        if(!pass)
        {
            return done(null, false, {message: 'Password is wrong'});
        }
        return done(null,checkusername);
    }
    catch (error) {
        console.error('Faile to login'+error);
    }
}


module.exports = {findUserByUsername,createUser,generatetoken, checkaccount}