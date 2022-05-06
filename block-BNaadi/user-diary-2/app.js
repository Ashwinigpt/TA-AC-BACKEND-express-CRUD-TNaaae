var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

// connect to database
mongoose.connect("mongodb://localhost/user-diary-2",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        console.log("Connected to database");
    }
);

var app = express();

// middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname + 'public')));

// server
app.listen(3000, () => {
    console.log('Server is listening on port 3k');
})