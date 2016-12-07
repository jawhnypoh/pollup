function sortByNew(){
  console.log("== clicked on new");

  var mydata = JSON.parse(polls);

  mydata = JSON.parse(polls);
  var length = mydata.length;
  for(var i=0; i<length; i++){
    for(var j=0; j<(length-1); j++){
      var optionCon = mydata[j].options.split(',');
      var optionConDos = mydata[j+1].options.split(',');
      // console.log("== optionCon: ", optionCon[i])
      var optionAmount = optionCon.length;
      var optionAmountDos = optionConDos.length;
      console.log("== options length: ", optionAmount);
      var values = JSON.parse(mydata[j].vote);
      var valuesDos = JSON.parse(mydata[j+1].vote);
      console.log("== j: ", values[optionAmount], " j+1: ", valuesDos[optionAmountDos]);
      if(values[optionAmount] > valuesDos[optionAmountDos]){
        var temp = mydata[j];
        mydata[j] = mydata[j+1];
        mydata[j+1] = temp;
      }
    }
  }
  setHeaders(mydata);
}

function sortByTrending(){
  console.log("== clicked on trending");
}

function sortByPopular(){
  console.log("== clicked on popular");
  var mydata = JSON.parse(polls);

  mydata = JSON.parse(polls);
  var length = mydata.length;
  for(var i=0; i<length; i++){
    for(var j=0; j<(length-1); j++){
      var optionCon = mydata[j].options.split(',');
      var optionConDos = mydata[j+1].options.split(',');
      // console.log("== optionCon: ", optionCon[i])
      var optionAmount = optionCon.length;
      var optionAmountDos = optionConDos.length;
      console.log("== options length: ", optionAmount);
      var values = JSON.parse(mydata[j].vote);
      var valuesDos = JSON.parse(mydata[j+1].vote);
      console.log("== j: ", values[optionAmount], " j+1: ", valuesDos[optionAmountDos]);
      if(values[optionAmount] < valuesDos[optionAmountDos]){
        var temp = mydata[j];
        mydata[j] = mydata[j+1];
        mydata[j+1] = temp;
      }
    }
  }

  for(var i=0; i<length; i++){
    console.log(mydata[i].id, " ");
  }

  setHeaders(mydata);
}

function headerSearchInput(){
  if(event.keyCode == 13){
    var searchInputElem = document.getElementById("headerSearch").value;
    console.log("== Search: ", searchInputElem);
  }
}

function bodySearchInput(){
  if(event.keyCode == 13){
    var searchInputElem = document.getElementById("bodySearch").value;
    console.log("== Search: ", searchInputElem);
  }
}

window.addEventListener('DOMContentLoaded', function(event){
  var headerSearchBoxElem = document.getElementById('headerSearch');
  headerSearchBoxElem.addEventListener("keyup", headerSearchInput);

  var bodySearchBoxElem = document.getElementById('bodySearch');
  bodySearchBoxElem.addEventListener("keyup", bodySearchInput);
});

function load() {
	var mydata = JSON.parse(polls);

  document.getElementById('h1').innerHTML = mydata[0].title;
  document.getElementById('h2').innerHTML = mydata[1].title;
  document.getElementById('h3').innerHTML = mydata[2].title;
  document.getElementById('h4').innerHTML = mydata[3].title;
}

function setHeaders(mydata){
  document.getElementById('h1').innerHTML = mydata[0].title;
  document.getElementById('h2').innerHTML = mydata[1].title;
  document.getElementById('h3').innerHTML = mydata[2].title;
  document.getElementById('h4').innerHTML = mydata[3].title;

  iconChange(mydata);
}

function iconChange(mydata){
  console.log("== genre: ", mydata[0].genre);
  var image = document.getElementById("i1");
  if(mydata[0].genre == "Science"){
    image.src = "images/science.png";
  }
  if(mydata[0].genre == "Music"){
    console.log("== Changing icon to music icon...");
    image.src = "images/music.jpg";
  }
  if(mydata[0].genre == "Tech"){
    iamge.src = "images/arts.png";
  }
  if(mydata[0].genre == "Politics"){
    iamge.src = "images/politics.png";
  }

  var image = document.getElementById("i1");
  if(mydata[1].genre == "Science"){
    image.src = "images/science.png";
  }
  if(mydata[1].genre == "Music"){
    console.log("== Changing icon to music icon...");
    image.src = "images/music.jpg";
  }
  if(mydata[1].genre == "Tech"){
    iamge.src = "images/arts.png";
  }
  if(mydata[1].genre == "Politics"){
    iamge.src = "images/politics.png";
  }

  var image = document.getElementById("i2");
  if(mydata[2].genre == "Science"){
    image.src = "images/science.png";
  }
  if(mydata[2].genre == "Music"){
    console.log("== Changing icon to music icon...");
    image.src = "images/music.jpg";
  }
  if(mydata[2].genre == "Tech"){
    iamge.src = "images/arts.png";
  }
  if(mydata[2].genre == "Politics"){
    iamge.src = "images/politics.png";
  }

  var image = document.getElementById("i3");
  if(mydata[3].genre == "Science"){
    image.src = "images/science.png";
  }
  if(mydata[3].genre == "Music"){
    console.log("== Changing icon to music icon...");
    image.src = "images/music.jpg";
  }
  if(mydata[3].genre == "Tech"){
    iamge.src = "images/arts.png";
  }
  if(mydata[3].genre == "Politics"){
    iamge.src = "images/politics.png";
  }
}

function setHeaders(mydata){
  document.getElementById('h1').innerHTML = mydata[0].title;
  document.getElementById('h2').innerHTML = mydata[1].title;
  document.getElementById('h3').innerHTML = mydata[2].title;
  document.getElementById('h4').innerHTML = mydata[3].title;

  iconChange(mydata);
}

function musicLoad(){
  console.log("== sorting by genre music")
  var mydata = JSON.parse(polls);

  var temp = [];
  var counter = 0;

  var length = mydata.length;

  for(var i=0; i<length; i++){
    if(mydata[i].genre == "Music"){
      temp.push(mydata[i]);
      counter++;
    }
  }

  document.getElementById('h1').innerHTML = temp[0].title;
  document.getElementById('h2').innerHTML = temp[1].title;
  document.getElementById('h3').innerHTML = temp[2].title;
  document.getElementById('h4').innerHTML = temp[3].title;
}


function politicsLoad(){
  console.log("== sorting by genre politics")
  var mydata = JSON.parse(polls);

  var temp = [];

  var length = mydata.length;

  for(var i=0; i<length; i++){
    if(mydata[i].genre == "Politics"){
      temp.push(mydata[i]);
    }
  }

  document.getElementById('h1').innerHTML = temp[0].title;
  document.getElementById('h2').innerHTML = temp[1].title;
  document.getElementById('h3').innerHTML = temp[2].title;
  document.getElementById('h4').innerHTML = temp[3].title;
}



function scienceLoad(){
  console.log("== sorting by genre science")
  var mydata = JSON.parse(polls);

  var temp = [];

  var length = mydata.length;

  for(var i=0; i<length; i++){
    if(mydata[i].genre == "Science"){
      temp.push(mydata[i]);
    }
  }

  document.getElementById('h1').innerHTML = temp[0].title;
  document.getElementById('h2').innerHTML = temp[1].title;
  document.getElementById('h3').innerHTML = temp[2].title;
  document.getElementById('h4').innerHTML = temp[3].title;
}

function techLoad(){
  console.log("== sorting by genre tech")
  var mydata = JSON.parse(polls);

  var temp = [];

  var length = mydata.length;

  for(var i=0; i<length; i++){
    if(mydata[i].genre == "Tech"){
      temp.push(mydata[i]);
    }
  }

  document.getElementById('h1').innerHTML = temp[0].title;
  document.getElementById('h2').innerHTML = temp[1].title;
  document.getElementById('h3').innerHTML = temp[2].title;
  document.getElementById('h4').innerHTML = temp[3].title;
}

document.getElementsByClassName('result').addEventListener("click", function(){
  window.open('resultsPage.html');
})
