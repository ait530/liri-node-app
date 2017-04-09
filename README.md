<h1>LIRI Bot: Language Interpretation Recognition Interface</h1>
<h2>A command line application that takes in parameters and gives back data:</h2>
<hr>


<h3>APIs</h3>
<h4>Twitter:</h4> <h4>Displays my latest tweets.</h4>
  Command: 'node liri.js my-tweets'
  <br> 
  Output: shows up to the last 20 tweets in terminal

<h4>Spotify:</h4> <h4>Displays song's artist(s), song name, preview link of the song, and album that the song is from.</h4> 
  Command: 'node liri.js spotify-this-song '<song name here>'
  <br>
  Output:  * Artist(s)
           * The song's name
           * A preview link of the song from Spotify
           * The album that the song is from

<h4>OMDB:</h4>
  Command: "node liri.js movie-this '<movie name here>'
  <br>
  Output:  * Title of the movie.
           * Year the movie came out.
           * IMDB Rating of the movie.
           * Country where the movie was produced.
           * Language of the movie.
           * Plot of the movie.
           * Actors in the movie.
           * Rotten Tomatoes Rating.
           * Rotten Tomatoes URL.

<h4>fs (file-system):</h4>
  Command: 'node liri.js do-what-it-says'
  <br>
  Output: Runs one of LIRI's commands inside of <random.txt>.
  *User can change text in document to test the feature for other commands.*



