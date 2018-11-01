// Making a request from Node with 'request'
// https://github.com/request/request

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//     if (error) {
//         console.log("Something went wrong!")
//         console.log(error);
//     } else {
//         if (response.statusCode === 200) {
//             console.log("It worked!")
//             console.log(body);
//         }
//     }
// });

// Same thing when it comes to API URL's
var request = require('request');
console.log("The sunse in Hawaii is at: ")
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var parsed = JSON.parse(body);
        console.log(parsed["query"]["results"]["channel"]["astronomy"]["sunset"]);
    }
});

// test