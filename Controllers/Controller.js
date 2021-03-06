//Controller laget
const mongoose = require("mongoose");
const chat = require('../models/models.js');
const config = require('../config.js');
const model = require('../models/models.js');
const {joke} = model;

const URI = `mongodb+srv://Grothen:p4ndek4gek0ngen@jokeservice.0lfnc.mongodb.net/jokesdb?retryWrites=true&w=majority`

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });



// get Jokes
exports.getJokes = async function(){
    return await chat.Joke.find();
}

//post joke
exports.postJoke = async function(body){
    const {setup, punchline} = body;


    return await joke.create({
        setup: setup,
        punchline: punchline,
    });
}