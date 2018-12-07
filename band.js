
var queryUrl = "https://rest.bandsintown.com/artists/" + process.argv[2] + "/events?app_id=codingbootcamp";

const fetch = require('node-fetch')


fetch(queryUrl)
.then(res => res.json())
.then(json => console.log(json));