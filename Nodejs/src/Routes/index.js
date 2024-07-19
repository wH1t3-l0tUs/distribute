// routes/index.js
const express = require('express');
const router = express.Router();
const boxPrices = require('../Object/boxitems'); // Assuming you export these from an index file
const weeklyData = require('../Object/weeklyrevenue');
const Handleregister = require('../Controller/Auth');
const HandleLogin = require('../Controller/Auth')

// Authentication routes
router.post('/register',Handleregister);

router.post('/Login',HandleLogin);

// Value route
router.get('/value', (req, res) => {
    console.log('call succes');
    res.json({ boxPrices, weeklyData });
});

// Login route

module.exports = router;
