const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const studentsRouter = require('./views/routes/students')

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

// routing middlewares

app.use('/', studentsRouter);

// errorhandling middlewares

app.use((req, res, next) => {
    res.send("Page not found");
})

// server

app.listen(3000, (req, res) => {
    console.log('Server is listening on port 3k');
});