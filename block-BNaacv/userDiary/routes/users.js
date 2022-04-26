const express = require('express');
const router = express.Router();

// users routes

router.get('/', (req, res) => {
    res.render('users', { user: ["Ashwini", "Vandana", "Ravi", "Abhishek"]});
});

router.get('/:id', (req, res) => {
    res.render('singleUser', {name: "Suraj", email: "suraj123@gmail.com"});
});

router.get('/new', (req, res) => {
    res.send(req.body);
});

router.post('/', (req, res) => {

});

router.get('/:id/edit', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

})

module.exports = router;