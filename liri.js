/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Keys, NPM REQUIRES, Global Variables
/////////////////////////////////////////////////////////////////////////////
// require - provides a way to load a module (keys.js), needs "./" since keys.js is in the same (current) directory as liri.js 
// accesses all of the exports in the key.js file. This can be confirmed when "node liri.js" is run in the command line since the console.log from the keys.js file will output 'this is loaded.'
var keys = require('./keys.js');

// process.argv will print out any command line arguments
var nodeArgs = process.argv;
// // outputs the command line arguments
// console.log(nodeArgs);

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
// Loads fs
var fs = require('fs');

// Global Scope Variables
var songName = process.argv[3];
var movieName = process.argv[3];
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
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
if (process.argv[2] === 'spotify-this-song' && process.argv[3] === songName) {

  spotifyRequest();

  function spotifyRequest() {
    

    // spotify URL + string from array + the api key
    var queryURL = 'https://api.spotify.com' + songName + '/v1/albums/{id}/tracks';
    
      // Creating an AJAX (asynchronous HTTP request) calls the spotify API for the song name.
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);
      
      })
  }


}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////
// OMDB REQUEST
/////////////////////////////////////////////////////////////////////////////
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
var textFile = process.argv[2];

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("random.txt", "utf8", function(error, data){

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

  });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

