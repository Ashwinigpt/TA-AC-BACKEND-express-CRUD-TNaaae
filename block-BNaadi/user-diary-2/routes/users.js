var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if(err) return next(err);
        res.render('users.ejs', { users : users});
    })
    
});

router.post('/users', (req, res) => {
    User.create(req.body, (err, user) => {
        if(err) return res.redirect('/users');
        res.redirect('/');
    });
});

router.get('/users', (req, res, next) => {
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
        res.redirect('/users')
    })
});

router.get('/:id/delete', (req, res, next) => {
    User.findByIdAndDelete(req.params.id, (err, user) => {
        if(err) return next(err);
        res.redirect('/books');
    })
})

module.exports = router;