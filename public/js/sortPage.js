function sortByNew(){
  console.log("== clicked on new");
  window.location.href = "sortPageNew.html";
}

function sortByTrending(){
  console.log("== clicked on trending");
  window.location.href = "sortPageTrending.html";
}

function sortByPopular(){
  console.log("== clicked on popular");
  window.location.href = "sortPagePopular.html";
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

  setHeaders(mydata);
}

function setHeaders(mydata){
  document.getElementById('h1').innerHTML = mydata[0].title;
  document.getElementById('h2').innerHTML = mydata[1].title;
  document.getElementById('h3').innerHTML = mydata[2].title;
  document.getElementById('h4').innerHTML = mydata[3].title;
}
