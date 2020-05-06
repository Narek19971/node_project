const express = require('express');
const bodyParser = require('body-parser');
const config = require("./config");
const mongoose = require('mongoose');
//const Post = require('./models/post');
const path = require('path');
const staticAsset = require('static-asset');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(staticAsset(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/javascript', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));

mongoose.connect(config.MONGO_URL);

app.get('/', (req, res) => res.render('index'));

//catch 404 page not found
app.use((req, res, next) => {
    const err = new Error("Page Not Found");
    err.status = 404;
    next(err);
});

app.use((req, res, next, error) => {
    res.status(error.status || 500);
    res.render('error', {
        message: error.message,
        error: !config.IS_PRODUCTION? error : {},
        title: "Oops"
    })
});

app.listen(config.PORT, () =>console.log(`Server is run in port: ${config.PORT}!`));
