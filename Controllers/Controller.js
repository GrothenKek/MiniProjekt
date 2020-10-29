//Controller laget
const mongoose = require("mongoose");
const chat = require('../models/models.js');
const config = require('../config.js');
const model = require('../models/models.js');
const {joke} = model;


mongoose.connect(config.databaseURI, { useNewUrlParser: true, useUnifiedTopology: true });



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