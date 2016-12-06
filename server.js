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
