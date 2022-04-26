const express = require('express');
const path = require('path');
const userRouter = require('./routes/users');

const app = express();

//middlewares
app.use(express.json);

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

app.use(express.urlencoded({ extended: false}));

// routing middlewares
app.use('/users', userRouter);

// error handle middlewares
app.use((req, res, next) => {
    res.status(404).send("Page not found");
});

// server
app.listen(4000, (req, res) => {
    console.log('Server is listening on port 4k');
});