const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => console.log(`server is run in port 3000`));

