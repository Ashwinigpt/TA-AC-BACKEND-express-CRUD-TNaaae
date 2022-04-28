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
        res.render('singleUser.ejs', {user: user})
    })
});

router.get('/:id/edit', (req, res, next) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('editUserForm', {user: user})
    })
});

router.post('/:id', (req, res) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
        if(err) return next(err);
        res.redirect('/users/' + id)
    })
});

module.exports = router;