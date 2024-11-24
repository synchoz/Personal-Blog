const express = require('express');
const bodyParser = require('body-parser');
const articlesRoute = require('./routes/articles.js');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 3000;
const { authMiddleware } = require('./auth.js');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(authMiddleware);
app.use('/', articlesRoute);

app.listen(port, () => {
    console.log(`Currently listening on port: ${port}`);
});
