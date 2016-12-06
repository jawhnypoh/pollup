<<<<<<< HEAD
var path = require("path");
var http = require("http");
var fs = require("fs");
var url = require("url");

var staticDir = path.join(__dirname, 'public');
var indexFileName = "landingPage.html";
var notFoundFileName = "404.html";
var port = process.env.PORT || 3000;

var cache = {};

// displayPort():
// Display the port listening
function displayPort(){
    console.log('\nServer listening on Port:', port);
}

function displayStatus(status, url){
    console.log('   Status for ' + url + ':', status);
}

// recordFile(pat):
// Store value into a cache object, if the path key is not found.
function recordFile(path, url){
    if(!cache[path]){
        console.log(' Reading Request:', url);
        cache[path] = fs.readFileSync(path, 'utf8');
    }
    return cache[path];
}

function handleRequest(request, response) {
    
    // favicon
    if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'} );
        response.end();
        return;
    }
    
    // Store the string for files
    var contents;
    
    // root path
    response.statusCode = 200;
    if(request.url === '/') {
        contents = recordFile(path.join(staticDir, indexFilename), request.url);
    }
    else {
        // Try file, if no file error, load 404
        try{
            contents = recordFile(path.join(staticDir, request.url), request.url);
        }catch(e){
            if(e.code == 'ENOENT'){
                response.statusCode = 404;
                console.log('    Request Fail...');
                contents = recordFile(path.join(staticDir, notFoundFilename), request.url);
            }
        }
    }
    
    // Show status, display page
    displayStatus(response.statusCode, request.url);
    response.write(contents);
    response.end();
}

displayPort();

var server = http.createServer(handleRequest);
server.listen(port);
=======
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var pollData = require('./poll-data');
var port = process.env.PORT || 3000;

// Use Handlebars as the view engine for the app.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

//make the index page for the root URL path ('/').
app.get('/', function(req,res) {
	res.render('index-page',{
    title: 'ToDoIt',
	usersData: usersData})
}); 

app.get('/notes/:user', function(req,res, next) {
    
    var user = usersData[req.params.user];
    
    if (user) {
        res.render('notes-page',{
            notes: user.notes,
            title: 'Homepage,
            user: user,
        });
    } else {
        next();
    }
}); 


app.get('*', function(req, res) {
    res.status(404).render('404-page', {
        title: 'Pollup'
    });
})
// Listen on the specified port.
app.listen(port, function () {
  console.log("== Listening on port", port);
});
>>>>>>> d04eddf74c40925da9f8d5dfcf4e06408674d8e7
