// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.

// require - provides a way to load a module (keys.js), needs "./" since keys.js is in the same directory as liri.js 
var keys = require('./keys.js');


var input = process.argv;
console.log(input);


var Twitter = require('twitter');

//1. You will need to send requests to the Twitter, Spotify and IMDB APIs.
// Twitter https://www.npmjs.com/package/twitter
// Spotify https://www.npmjs.com/package/spotify
// Request https://www.npmjs.com/package/request (grab data from OMDB API)


///////////////////////////////////////////////////////////////////
// Twitter REQUEST/////////////////////////////////////////////////////

// New client, pulls from keys(exports).twitter keys object
var client = new Twitter(keys.twitterKeys);
 
// Grabs from my twitter profile "atrierweil".
var params = {screen_name: 'atrierweil'};
// Gets status, function that outputs error, tweets, and response.
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  // If no error, log tweets.
  if (!error) {  
    console.log(tweets);
  }
});
///////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
// SPOTIFY REQUEST
// var spotify = require('spotify');
 
// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
//     data.tracks.href
 
//     // Do something with 'data' 
// });
///////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////
// OMDB REQUEST
// Basic Node application for requesting data from the OMDB website
// Here we incorporate the "request" npm package
// var request = require("request");

// // We then run the request module on a URL with a JSON
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&r=json", function(error, response, body) {

//   // If there were no errors and the response code was 200 (i.e. the request was successful)...
//   if (!error && response.statusCode === 200) {

//     // Then we print out the imdbRating
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }
// });
///////////////////////////////////////////////////////////////////








// Make it so liri.js can take in one of the following commands:
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says

// e.g.) commandline 
// input: node liri.js my-tweets  
// output: shows your last 20 tweets and when they were created at in your terminal/bash window.

// input: 
// node liri.js spotify-this-song '<song name here>'
// output: This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

// if no song is provided then your program will default to
// The Sign" by Ace of Base


//input:
// node liri.js movie-this '<movie name here>'
// output:
//   * Title of the movie.
   // * Year the movie came out.
   // * IMDB Rating of the movie.
   // * Country where the movie was produced.
   // * Language of the movie.
   // * Plot of the movie.
   // * Actors in the movie.
   // * Rotten Tomatoes Rating.
   // * Rotten Tomatoes URL.

// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!


// input:
// node liri.js do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.

