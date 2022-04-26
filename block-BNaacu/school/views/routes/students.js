const express = require('express');
var router = express.Router();

// students routes

router.get('/new', (req, res) => {
    res.send('Students form');
});

router.post('/', (req, res) => {
    res.send('Students');
});

router.get('/', (req, res) => {
    res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
});

router.get('/:id', (req, res) => {
    res.render("studentDetail", {
        student: { name: "rahul", email: "rahul@altcampus.io" },
    });
})

module.exports = router;