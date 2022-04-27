var express = require('express');
var mongoose = require('mongoose');

var userRouter = require('./routes/user');

// connect to database
mongoose.connect("mongodb://localhost/sample",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        console.log("Connected to database");
    }
);

var app = express();



app.listen(4000, (req, res) => {
    console.log('Server is listening on port 4k');
});