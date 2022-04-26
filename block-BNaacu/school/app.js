const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const studentsRouter = require('./routes/students');

// connect to mongodb

mongoose.connect(
    "mongodb://localhost/sample",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        console.log( err ? err : "Connected to database");
    }
);

const app = express();

//middlewares

app.use(express.json);

// setup view engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + "/views"));

app.use(express.urlencoded({ extended: false}));

// routing middlewares

app.use('/students', studentsRouter);

// errorhandling middlewares

app.use((req, res, next) => {
    res.status(404).send("Page not found");
})

// server

app.listen(3000, (req, res) => {
    console.log('Server is listening on port 3k');
});