var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if(err) return next(err);
        res.render('users.ejs', { users : users});
    })
    
});

router.get('/new', (req, res) => {
    res.render('userForm.ejs');
});

router.post('/users', (req, res) => {
    User.create(req.body, (err, user) => {
        if(err) return res.redirect('/users/new');
        res.redirect('/');
    });
});

router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('singleUser.ejs', {user})
    })
});

module.exports = router;