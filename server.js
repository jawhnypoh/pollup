var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
var file = require('./public/polls-data.json');

var jsonDir = path.join(__dirname, 'public', 'polls-data.json');
var staticDir = path.join(__dirname, 'public');
var index = 'mainPage.html';
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var createPoll = function (req, file) {
    var fileStr = file, idNum;
    if(fileStr.polls[0]){
        idNum = fileStr.polls[fileStr.polls.length - 1].id + 1;
    }else{
        idNum = 0;
    }
    var poll = {
        "title": req.body.title,
        "id": idNum,
        "detail": req.body.detail,
        "genre": req.body.genre,
        "options": req.body.options,
        "vote": req.body.vote,
    }
    fileStr.polls.push(poll);
    return fileStr;
};

app.post('/createPoll', function(req, res) {
    var fileStr = createPoll(req, file);
    fs.writeFile(jsonDir, JSON.stringify(fileStr));
    res.end();
});

var vote = function (req, file) {
    var newId = req.body.id, newIndex = req.body.index;
    newId = parseInt(newId, 10);
    newIndex = parseInt(newIndex, 10);
    for(var i = 0; i < file.polls.length; i++){
        if(file.polls[i].id == newId){
            var newVotes = JSON.parse(file.polls[i].vote);
            newVotes[newIndex]++;
            file.polls[i].vote = JSON.stringify(newVotes);
            return file;
        }
    }
}

app.post('/vote', function(req, res){
    var fileStr = vote(req, file);
    fs.writeFile(jsonDir, JSON.stringify(fileStr));
    res.end();
});

app.get('/', function (req, res, next) {
    res.sendFile(path.join(staticDir, index));
});

/*app.get('/resultData', function (req, res, next){
    var response, data;
    for(var i = 0; i < file.polls.length; i++){
        response = file.polls[i].id;
        if(parseInt(response, 10) == req.query.id){
            data = JSON.stringify(file.polls[i]);
            break;
        }
    }
    res.render('resultData', data);
    res.end();
});*/

app.use(express.static(staticDir));

app.get('*', function(req, res) {
    res.status(404).sendFile(path.join(staticDir, '/404.html'));
});

app.listen(port, function() {
    console.log("Listening on " + port);
}); 