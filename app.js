const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

//creating new app instance
const app = express();

//setting view engine to use ejs for our templating
app.set('view engine', 'ejs');

//use body parser to pass our request
app.use(bodyParser.urlencoded({
    extended: true
}));

//using public directory to store static files.
app.use(express.static("public"));

//Connect to database and set option useNewUrlParser to true to get rid of errors
mongoose.connect("mongodb://localhostL27017/wikiDB", {useNewUrlParser: true});

const articleSchema = {
    title: String,
    content: String
}

//TODO

app.listen(3000, function(){
   console.log("Server started on port 3000");
});
