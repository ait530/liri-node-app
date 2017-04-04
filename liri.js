// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
var keys = require('keys.js');


var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');


// Might need to use
// var Twit = require('twit')


//1. You will need to send requests to the Twitter, Spotify and IMDB APIs.
// Twitter https://www.npmjs.com/package/twitter
// Spotify https://www.npmjs.com/package/spotify
// Request https://www.npmjs.com/package/request (grab data from OMDB API)

var queryURL = 






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

