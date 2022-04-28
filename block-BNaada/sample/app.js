var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var userRouter = require('./routes/users');

// connect to database
mongoose.connect("mongodb://localhost/sample",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        console.log("Connected to database");
    }
);

var app = express();

// middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.use('/users', userRouter);

// handle error
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(4000, (req, res) => {
    console.log('Server is listening on port 4k');
});