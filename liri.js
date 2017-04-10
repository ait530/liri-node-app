/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// DEPENDENCIES: Keys, NPM, Global Variables
/////////////////////////////////////////////////////////////////////////////
// require - provides a way to load a module (such as keys.js). ./key.js needs "./" to access file since keys.js is in the same directory as liri.js 
// ./key.js accesses all of the exports in the key.js file. This can be confirmed when "node liri.js" is run in the command line since the console.log from the keys.js file will output 'this is loaded.'
var keys = require('./keys.js');
// NPM (package manager for node.js) package modules:
// Loads Twitter module
var twitter = require('twitter');
// Loads Spotify module
var spotify = require('spotify');
// Loads Request module, Here we incorporate the "request" npm package
var request = require('request');
// Loads fs module for read and write
var fs = require('fs');


// process.argv will print out any command line arguments
var nodeArgs = process.argv;
// outputs the command line arguments
// console.log(nodeArgs);


// Global Scope Variables
var songName = process.argv[3];
var movieName = process.argv[3];
var textFile = process.argv[2];

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// FUNCTIONS: Twitter, Spotify, OMBD, fs
/////////////////////////////////////////////////////////////////////////////
// TWITTER REQUEST
/////////////////////////////////////////////////////////////////////////////
// Gets twitter feed/anonymous function
var twitterRequest = function() {
  // New client, pulls from keys(exports).twitter keys object
  // Shorten to keys.twitterKeys since "keys" pulls from keys.js, and "twitterKeys" are in the keys.js file, thus, keys.twitterKeys to access Twitter API. 
  var client = new twitter(keys.twitterKeys); 
  // Grabs from my twitter profile "atrierweil".
  var params = {screen_name: 'atrierweil'};
  // Gets a new tweet(client) from twitter package while matching with my unique twitter keys and username. Gets a function that outputs error, tweets, and response.
  client.get('statuses/user_timeline', params, function(error, tweets, response)
  {
    // If no error, 
    if (!error) {  
    
      // Repeat for up to 20 tweets/how many tweets there are...
      for (i = 0; i < tweets.length; i++) {
        // Divider line
        console.log('-----------------------------------------------------------');
        // logs the date/time the tweets were created.
        console.log(tweets[i].created_at);
        // log tweets text.
        console.log(tweets[i].text);
        // outputs entire tweet array w/objects
        // console.log(tweets);
      }
    }
  })
};
twitterRequest();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////
// // SPOTIFY REQUEST  (use npm request library)
// /////////////////////////////////////////////////////////////////////////////
// if (process.argv[2] === 'spotify-this-song' && process.argv[3] === songName) {

//   spotifyRequest();

//   function spotifyRequest() {
    
//     // spotify URL + string from array + the api key
//     var queryURL = 'https://api.spotify.com' + songName + '/v1/albums/{id}/tracks';
    
   
//     // This line is just to help us debug against the actual URL.
//     // console.log(queryUrl);

//     request(queryUrl, function(error, response, body) {

//       // If the request is successful
//       if (!error && response.statusCode === 200) {

//         // Parse the body of the site and recover just the imdbRating
//         // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//         console.log('Release Year: ' + JSON.parse(body).Year);
//     }
//   })  
// }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////
// // OMDB REQUEST
// /////////////////////////////////////////////////////////////////////////////
// // if the 2nd argument is 'my-tweets'...
// if (process.argv[2] === 'movie-this' && process.argv[3] === movieName) {
//   // Loop through all the words in the node argument
//   // And do a little for-loop magic to handle the inclusion of "+"s
//   for (var i = 2; i < nodeArgs.length; i++) {

//     if (i > 2 && i < nodeArgs.length) {

//       movieName = movieName + '+' + nodeArgs[i];

//     } else {

//       movieName += nodeArgs[i];
//     }
//   }

//   // Then run a request to the OMDB API with the movie specified
//   var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json';

//   // This line is just to help us debug against the actual URL.
//   // console.log(queryUrl);

//   request(queryUrl, function(error, response, body) {

//     // If the request is successful
//     if (!error && response.statusCode === 200) {

//       // Parse the body of the site and recover just the imdbRating
//       // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//       console.log('Release Year: ' + JSON.parse(body).Year);
//     }
//   })
// }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////
// // READING .TEXTFILE
// /////////////////////////////////////////////////////////////////////////////
// // This block of code will read from the "movies.txt" file.

// // if the 2nd argument is 'my-tweets'...
// if (process.argv[2] === 'do-what-it-says') {
//   // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
//   // The code will store the contents of the reading inside the variable "data"
//   fs.readFile('random.txt', 'utf8', function(error, data){

//     // We will then print the contents of data
//     // console.log(data);

//     // Then split it by commas (to make it more readable)
//     var dataArr = data.split(',');

//     // We will then re-display the content as an array for later use.
//     console.log(dataArr);

//   })
// };
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





