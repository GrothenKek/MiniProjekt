
//app

const express = require('express');
const app = express();
const config = require('./config');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use('/Jokes', require('./routes/jokes.js'));
app.use('/OtherSites', require('./routes/OtherSites.js'));


const port = process.env.PORT || config.databaseURI; // Heroku
app.listen(port);

module.exports = app;
