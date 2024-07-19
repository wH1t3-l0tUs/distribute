// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/Config/Database');
const router = require('./src/Routes/index');
const session = require('express-session');
const passport = require('passport')

require('dotenv').config();

const app = express();
const port = 5000;

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Define routes
app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Hello from backend');
});


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
