var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://imageresizer.static9.net.au/ajXtWFyJjoZov19NQGzpSOXP0MU=/1024x0/http%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2FNetwork%2FImages%2F2017%2F02%2F03%2F11%2F03%2Fcamping-sleep-cycle.jpg"},
        {name: "Granite Hill", image: "https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/777BB633-D2CE-56A8-E06C-7C2F8E6CD135/630x355.jpeg"},
        {name: "Mountain Goat's Rest", image: "http://www.nagalandtourism.com/public_html/nagalandtourism.com/wp-content/uploads/2018/06/4-3.jpg"}
    ]

    res.render("campgrounds", {campgrounds: campgrounds});
});



app.listen(3000, function() {
    console.log("Yelp Camp server has started...")
});