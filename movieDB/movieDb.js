let movies = [
    {
        title: "Jurassic Park",
        rating: 7,
        hasWatched: true,
    },
    {
        title: "Frozen",
        rating: 6,
        hasWatched: false,
    },
    {
        title: "Jaws",
        rating: 10,
        hasWatched: true,
    }
]

function buildMovies(movie){
    let watched = "You have ";
    if(movie.hasWatched){
        watched += "watched "
    } else {
        watched += " not watched "
    }
    let rating = " Rating: " + movie.rating + " stars";
    let title = "\"" + movie.title + "\"";
    console.log(watched + title + rating);
}
 movies.forEach(function(movie){
    buildMovies(movie);
 });
