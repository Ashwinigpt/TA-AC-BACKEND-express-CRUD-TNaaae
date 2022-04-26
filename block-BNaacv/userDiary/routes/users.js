const express = require('express');
const router = express.Router();

// users routes

router.get('/', (req, res) => {
    res.render('users', { user: ["Ashwini", "Vandana", "Ravi", "Abhishek"]});
});

router.get('/id', (req, res) => {
    res.render('singleUser', {name: "Suraj", email: "suraj123@gmail.com"});
});

router.get('/new', (req, res) => {
    res.send(req.body);
});

module.exports = router;