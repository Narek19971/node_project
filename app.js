const express = require('express');
const bodyParser = require('body-parser');
const config = require("./config");
const mongoose = require('mongoose');
const Post = require('./models/post');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(config.MONGO_URL);

Post.create({
    name: "Narek"
}).then(post => console.log(post))

app.get('/', (req, res) => res.render('index'));

app.listen(config.PORT, () =>console.log(`Example app listening on port ${config.PORT}!`));
