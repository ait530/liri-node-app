<h1>LIRI Bot: Language Interpretation Recognition Interface</h1>
<h2>(A command line application that takes in parameters and gives back data)</h2>
<h3>APIs</h3>
<hr>
<h4><u>Twitter:</u></h4> <h5>Displays my latest tweets.</h5>
  Command: 'node liri.js my-tweets'
  Output: shows up to the last 20 tweets in terminal

<h4><u>Spotify:</u></h4> <h5>Displays song's artist(s), song name, preview link of the song, and album that the song is from.</h5> 
  Command: 'node liri.js spotify-this-song '<song name here>'
  Output:  * Artist(s)
           * The song's name
           * A preview link of the song from Spotify
           * The album that the song is from

<h4><u>OMDB:</u></h4> <h5>Outputs movie parameters.</h5>
  Command: "node liri.js movie-this '<movie name here>'
  Output:  * Title of the movie.
           * Year the movie came out.
           * IMDB Rating of the movie.
           * Country where the movie was produced.
           * Language of the movie.
           * Plot of the movie.
           * Actors in the movie.
           * Rotten Tomatoes Rating.
           * Rotten Tomatoes URL.

<h4><u>fs (file-system):</u></h4> <h5>Runs a LIRI command base on text file</h5>
  Command: 'node liri.js do-what-it-says'
  Output: Runs one of LIRI's commands inside of <random.txt>.
  *User can change text in document to test the feature for other commands.*



