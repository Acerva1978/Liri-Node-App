require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require('fs');
var processA = process.argv;
var command = processA[2];
var searchInput =  processA.slice(3).join(' ')




if(command === "spotify-this-song"){
  spotifyThis(searchInput)
}
if(command === "concert-this"){
  concertThis(searchInput)
}

if(command === "movie-this"){
  movieThis(searchInput)
}
 if (command === "do-what-it-says") {
  doWhatThis()
}



function spotifyThis(song){
var song;
  if(song === ''){
    song = 'The Sign by Ace of Base'
  }
 song = song

  spotify.search({ type: 'track', query:  song, limit: 5}, function(err, response) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

  var jsonData = response.tracks;
  var spotifyArr = response.tracks.items;
  var divider = "\n------------------------------------------------------------\n\n";

        for (i = 0; i < spotifyArr.length; i++) {

     
      var showData1 = [
        "++++++++++++++++++++++++++++Spotify This Song++++++++++++++++++++++++++++",
        "Song: " + jsonData.items[i].name,
        "Artists: " + jsonData.items[i].album.artists[0].name,
        "Album Name: " + jsonData.items[i].album.name,
        "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
      ].join("\n");

     
      fs.appendFile("log.txt", showData1 + divider, function(err) {
        if (err) throw err;
        console.log(showData1);
      
      });
  };
});
}


function concertThis(concert){
  

  axios.get("https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp")
    .then(function (response) {
        
    
    // var divider2 = "\n------------------------------------------------------------\n\n";
    
      for (i = 0; i < 5; i++) {

      var setBands = (response.data[i].lineup);
      var bands = setBands.toString();
      var eventDate = moment(response.data[i].datetime).format('MM/DD/YYYY');
      var showData = [
        "++++++++++++++++++++++++++++Concert This++++++++++++++++++++++++++++",
          "Line Up: " + bands,
          "Venue Name: " + response.data[i].venue.name,
          "Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country,
          "Event Date: " + eventDate,
        ].join("\n");

      fs.appendFile("log.txt", showData + divider2, function(err) {
        if (err) throw err;
        console.log(showData);
      });
      };
    })
    .catch(function (error) {
      console.log(error);
    });
}


function movieThis(movie){

  var movie;
  if(movie === ''){
    movie = 'Mr. Nobody'
  }
 movie = movie

  axios.get("http://www.omdbapi.com/?apikey=42518777&t=" + movie)
   

      .then(function (data) {
        
      
        var divider3 = "\n------------------------------------------------------------\n\n";
      
              var showData = [
               
             "++++++++++++++++++++++++++++Movie This++++++++++++++++++++++++++++++",
              "Title: " + data.data.Title,
              "Year: " + data.data.Year,
              "Rated: " + data.data.Rated,
              "Country: " + data.data.Country,
              "Language: " + data.data.Language,
              "Plot: " + data.data.Plot,
              "Actors: " + data.data.Actors,
            ].join("\n\n");
      
           
            fs.appendFile("log.txt", showData + divider3, function(err) {
              if (err) throw err;
             
            console.log(showData);
            });
          
        })
    .catch(function (error) {
      console.log(error);
    });
 
}

function doWhatThis(){
  var fs = require('fs');
  fs.readFile("random.txt", "utf8", function (err, response) {
      if (err) {
          console.log(err);
      }

      var textArr = response.split(",");
       command = textArr[0];
       searchInput = textArr[1];

       if(command === "spotify-this-song"){
        spotifyThis(searchInput)
      }
      if(command === "concert-this"){
        concertThis(searchInput)
      }
      
      if(command === "movie-this"){
        movieThis(searchInput)
      }

      

 
  })
}