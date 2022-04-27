var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/users', (req, res) => {
    User.create(req.body, (err, createdUser) => {
        if(err) return next(err);
        res.redirect('/user');
    })
})

module.exports = router;