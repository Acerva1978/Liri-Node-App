# Liri-Node-App

Project: LIRI Bot
LIRI is a Language Interpretation and Recognition Interface.

Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives data in return.

Challenge
Use Node JS to create a LIRI bot, like iPhone's SIRI, but takes in commands through Language vs Speech using the following commands:

concert-this

spotify-this-song

movie-this

do-what-it-says

Tech
GitHub - file repository

Visual Studio Code - text editor

Node.js

APIs:

Spotify (https://developer.spotify.com/)
OMDB (http://www.omdbapi.com)
Bands In Town (http://www.artists.bandsintown.com/bandsintown-api)
NPM Packages:

Node-Spotify-API (https://www.npmjs.com/package/node-spotify-api)
Axios (https://www.npmjs.com/package/axios)
Moment (https://www.npmjs.com/package/moment)
DotEnv (https://www.npmjs.com/package/dotenv)
Prerequisites
Node.js - download the latest version of Node (https://nodejs.org/en/).

Make a new GitHub repository called liri-node-app and clone it to your computer.

Send requests using the axios package to the Bands in Town, Spotify and OMDB APIs.

What Each Command Does
LIRI searches Bands in Town for concerts, Spotify for songs, and OMDB for movies.

node liri.js concert-this artis/band name

Searches the Bands in Town Artist Events API for an artist and renders the following information about each event to the terminal:

Line Up

Name of the venue

Venue location

Date of the Event (using the format "MM/DD/YYYY")

![](command%20images/Concert%20This.png)

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

node liri.js spotify-this-song song name

Displays the following information about the selected song in your terminal/bash window

Artist(s)

The song's name

The album containing the song

![](command%20images/Spotify%20This%20Song%20Yesterday.png)

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

If no song is provided, the program defaults to "The Sign" by Ace of Base.

![](command%20images/No%20Song%20Default.png)

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

node liri.js movie-this movie name

This will output the following movie information to your terminal/bash window:

 * Title
 * Year movie was released
 * IMDB Rating
 * Country where movie was produced
 * Language(s)
 * Plot of the movie
 * Actors in the movie

![](command%20images/Movie%20This.png) 

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
If the user does not enter a movie selection, the program outputs data for the movie 'Mr. Nobody.'

![](command%20images/Movie%20This%20Default.png) 

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

node liri.js do-what-it-says

Runs spotify-this-song for "I Want it That Way".

![](command%20images/Do%20What%20it%20Says.png) 

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
