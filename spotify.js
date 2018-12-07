var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id:  'edd02e4c61984cbcb78c69d421e4779e',
  secret: '55c3b97764b547c49f9df9596cf7d5ef'
});
 
spotify.search({ type: 'artist', query: 'wu-tang' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log("return",data.artists.items); 
});