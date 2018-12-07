function movieSearch(title){
var axios = require("axios");

var movieName = process.argv[2];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
//console.log("input: " , process.argv[2]);
//console.log("input var" , movieName);

axios.get(queryUrl).then(
  function(response) {
   
    console.log("Release Year: " , response.data.Year);
    console.log("Title:", response.data.Title);
    console.log("IMDB_Rating:", response.data.imdbRating);
    console.log("Rotten_Tomatoes_Rating:", response.data.Ratings[1].Value);
    console.log("Country:" ,response.data.Country);
    console.log("Language:",response.data.Plot);
    console.log("Actors:" ,response.data.Actors);
    //console.log("RESPONSE:" ,response);

    var fs = require("fs");   
    var moviesIns =response.data.Title;
    fs.appendFile("log.txt", moviesIns, function(err){
      if (err) {
       return console.log(err);
    }
  

  })
  })
}
 switch (process.argv[2]) {
  
    case 'movie-this':
        var movieFormatted = process.argv.slice(3, process.argv.length).join("+");
        movieSearch(movieFormatted);
        break;
    
    default:
        console.log('invalid entry');
}