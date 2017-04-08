//////////////////////////////////////////////////////////////////////////// 
// Keys & NPM REQUIRES
////////////////////////////////////////////////////////////////////
// require - provides a way to load a module (keys.js), needs "./" since keys.js is in the same (current) directory as liri.js 
// accesses all of the exports in the key.js file. This can be confirmed when "node liri.js" is run in the command line since the console.log from the keys.js file will output 'this is loaded.'
var keys = require('./keys.js');

// process.argv will print out any command line arguments
var nodeArgs = process.argv;
// outputs the command line arguments
console.log(nodeArgs);

////////////////////////////////
// *Don't forget to npm intall:/
// npm install twitter//////////
// npm install spotify//////////
// npm install request//////////
//////////////////////////////// 
// Loads Twitter module
var twitter = require('twitter');
// Loads Spotify module
var spotify = require('spotify');
// Loads Request module
var request = require('request');



/////////////////////////////////////////////////////////////////////////////
// TWITTER REQUEST
/////////////////////////////////////////////////////////////////////////////
// if the 2nd argument is 'my-tweets'...
if (process.argv[2] = 'my-tweets') {
  // evoke twitter request function
  twitterRequest(); 
  function twitterRequest() {

    // New client, pulls from keys(exports).twitter keys object
    // Shorten to keys.twitterKeys since "keys" pulls from keys.js, and "twitterKeys" are in the keys.js file, thus, keys.twitterKeys to access Twitter API. 
    var client = new twitter(keys.twitterKeys);
     
    // Grabs from my twitter profile "atrierweil".
    var params = {screen_name: 'atrierweil'};
    // Gets status, function that outputs error, tweets, and response.
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      // If no error, 
      if (!error) { 
        // log tweets. 
        console.log(JSON.stringify(tweets, null ,2));
        
      }
    })
  }
  
};

// twitterRequest();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Need to figure out some way to provide "node liri.js my-tweets" command.
// Shows last 20 tweets when they were created in terminal (want to output the text portion of the tweets output)





////////////////////////////////////////////////////////////////////
//SPOTIFY REQUEST
///////////////////////////////////////////////////////////////////
// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
//     data.tracks.href
 
//     // Do something with 'data' 

// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Giphy URL + string from array + the api key
  // var queryURL = "https://api.spotify.com/v1/artists/{id}/top-tracks";

// spotify developer
// Client ID
// var client_id = "e25f7a6dfece48839bff27e5dac13849";


// Client Secret
// var client_secret = "fe74b2d270684b84a298f724fac8f68e";



  // Creating an AJAX (asynchronous HTTP request) calls the spotify API for the song name.
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).done(function(response) {}




///////////////////////////////////////////////////////////////////
// OMDB REQUEST
///////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////
// READING .TEXTFILE
////////////////////////////////////////////////////////////////////
// fs is an NPM package for reading and writing files
// var fs = require("fs");

// var textFile = process.argv[2];

// // This block of code will read from the "movies.txt" file.
// // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// // The code will store the contents of the reading inside the variable "data"
// fs.readFile("movies.txt", "utf8", function(error, data) {

//   // We will then print the contents of data
//   console.log(data);

//   // Then split it by commas (to make it more readable)
//   var dataArr = data.split(",");

//   // We will then re-display the content as an array for later use.
//   console.log(dataArr);

// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////
// NOTES
////////////////////////////////////////////////////////////////////
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







// Might be useful...
// parsefloat() for decimal numbers
// 'npm init' for package.json files 
// 'npm install *whatever* --save'
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////