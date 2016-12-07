/*function createHTML(int options[]) {
    var pollNum = options.length();
    var color = [];
    var sum = 0;
    
    
    var addHTML = document.GetElementsByClassName('question'); 
    addHTML.insertAdjacentHTML('beforeend', options.title);
    
    for (var i=0; i < pollNum; i++) {
        sum += options[i].votes;
    }
    
    for (var i=0; i < pollNum; i++){
        var color[i] = getRandomColor(); //get random color from color generator to mark the part of the pie chart
        
        var addHTML = document.GetElementsByClassName('pie'); 
        addHTML.insertAdjacentHTML('beforeend', '<div class="option-results"><div class="title" style=' + color[i] + '>' + options[i].title '</div> - ' + options[i].votes + ' (' + options[i].votes/sum + '%)</div>');
    }
}

function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i= 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}

*/

function createHTML(int options[]) {
    var pollNum = options.length();
    var sum = 0;
    
    
    var addHTML = document.GetElementsByClassName('question'); 
    addHTML.insertAdjacentHTML('beforeend', options.title);
    
    for (var i=0; i < pollNum; i++) {
        sum += options[i].votes;
    }
    
    for (var i=0; i < pollNum; i++){
        
        var addHTML = document.GetElementsByClassName('pie'); 
        addHTML.insertAdjacentHTML('beforeend', '<div class="option-results"><div class="title" style=' + color[i] + '>' + options[i].title '</div> - ' + options[i].votes + ' (' + options[i].votes/sum + '%)</div>');
    }
    
        for (var i=0; i < pollNum; i++){
        
        var addHTML = document.GetElementsByClassName('checklist'); 
        addHTML.insertAdjacentHTML('beforeend', '<input type="checkbox" id="option' + i + '">' + options[i] + '</input></br>');
    }
}


function displayPollResults(int len) {
  for (var i = 0; i < len; i++) {
      
  }
  
  // We only add the note if we have a value for "what".
  if (pollInputSubject.trim()) {
      if (names.length != 0) {
          
          //0 = subject
          //1 = genre
          //2 = details
          //3 = options / names
        var request = new XMLHttpRequest();
        console.log([1,2,2,3] + "Hello");
        request.open('POST', 'http://localhost:3000/createPoll', true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(convertToQS(pollInputSubject.trim(), pollInputDetails.trim(), pollInputGenre.trim(), names));
        window.location.href = "resultsPage.html";
        closeCreatePollModal();
        } else {
            alert('You must enter at least one option!');
        }
  } else {
    // If there's no "what" value specified, throw an alert.
    alert('You must specify a question!');
  }
}

window.addEventListener('DOMContentLoaded', function (event) {
    var createPollElem = document.getElementById('vote-button');
        createPollElem.addEventListener('click', viewVoteButton(options.length));
    
    var addPollOption = document.getElementById('results-button');
        addPollOption.addEventListener('click', viewResultsButton(options.length));
}
