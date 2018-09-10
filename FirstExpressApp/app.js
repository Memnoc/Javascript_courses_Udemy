var express = require("express");
var app = express();

// ROUTES:
// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!")
});

// "/dog" => "Yo, dawg!"
app.get("/dog", function(req, res){
    console.log("Someone made a request to /dog");
    res.send("Yo DAWG!");
});

// ROUTS params
app.get("/r/:subRedditName", function(req, res){
    var subreddit = req.params.subRedditName;
    res.send("Welcome to the " + subreddit + " Subreddit")
});

app.get("/r/:subRedditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("Welcome to the comments page!")
});


app.get("*", function(req, res){
    res.send("You're a star!!");
});

// Tell express to listen
app.listen(3000, function(){
    console.log("Server has started");
});