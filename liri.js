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
// Loads Request module, Here we incorporate the "request" npm package
var request = require('request');


// Global Scope Variables
var songName = '';
var movieName = process.argv[3];



////////////////////////////////////////////////////////////////////////////
// TWITTER REQUEST
/////////////////////////////////////////////////////////////////////////////
// if the 2nd argument is 'my-tweets'...
if (process.argv[2] === 'my-tweets') {
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
      

        // Repeat for up to 20 tweets...
        for (i = 0; i < 20; i++) {
        // log tweets.
        console.log(tweets);
        

        }
      }
    })
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
// SPOTIFY REQUEST
/////////////////////////////////////////////////////////////////////////////
// if (process.argv[2] === 'spotify-this-song' && process.argv[3] === songName) {

//   spotifyRequest();

//   function spotifyRequest() {
    

//     // spotify URL + string from array + the api key
//     var queryURL = 'https://api.spotify.com' + songName + '/v1/albums/{id}/tracks';
    
//       // Creating an AJAX (asynchronous HTTP request) calls the spotify API for the song name.
//       $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).done(function(response) {
//         console.log(JSON.stringify(tweets, null ,2));
      
//       })
//   }


// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Client ID
//   var client_id = "e25f7a6dfece48839bff27e5dac13849";

//   // Client Secret
//   var client_secret = "fe74b2d270684b84a298f724fac8f68e";




///////////////////////////////////////////////////////////////////
// OMDB REQUEST
///////////////////////////////////////////////////////////////////
// if the 2nd argument is 'my-tweets'...
if (process.argv[2] === 'movie-this' && process.argv[3] === movieName) {

  
  // Loop through all the words in the node argument
  // And do a little for-loop magic to handle the inclusion of "+"s
  for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {

      movieName = movieName + "+" + nodeArgs[i];

    }

    else {

      movieName += nodeArgs[i];

    }
  }

  // Then run a request to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);

  request(queryUrl, function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("Release Year: " + JSON.parse(body).Year);
    }
  })

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
// READING .TEXTFILE
/////////////////////////////////////////////////////////////////////////////
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






/////////////////////////////////////////////////////////////////////////////
// NOTES
/////////////////////////////////////////////////////////////////////////////
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