//this is our javascript web server
const express   = require("express");       //require == #include
const app       = express();
const http      = require("http");
const server    = http.createServer(app);

const LISTEN_PORT       = 8080;           //default port 80
const ABS_STATIC_PATH   = __dirname + '/public';

//set our routes
app.get('/', function (req, res) {
    res.sendFile('index.html', {root:ABS_STATIC_PATH});
});

server.listen(LISTEN_PORT);                         //starts server
app.use(express.static(__dirname + '/public'));     //the client can access these files via http
console.log("Listening on port: " + LISTEN_PORT);   //a console output so we know something is happening