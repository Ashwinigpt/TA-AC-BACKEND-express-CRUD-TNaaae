var express = require('express');
var path = require('path');

var app = express();

//middlewares

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + "views"));

// routes

app.get('/', (req, res) => {
 res.render('index.ejs');
});

app.listen(3000, (req, res) => {
    console.log('Server is listening on port 3k');
});