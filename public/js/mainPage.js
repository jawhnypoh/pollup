
/* This function displays the create new poll modal */
function displayCreatePollModal() {

  var backdropElem = document.getElementById('modal-backdrop');
  var createPollElem = document.getElementById('create-poll-modal');    

  // Show the modal and its backdrop.
  backdropElem.classList.remove('hidden');
  createPollElem.classList.remove('hidden');
    
    // When the user clicks anywhere outside of the modal, close it     
    window.onclick = function(event) {
    if (event.target == createPollElem) {
        createPollElem.classList.add('hidden');
        backdropElem.classList.add('hidden');
    }
  }     
}


/* This function adds another polling option to the modal */
function newPollOption() {
    var newPollElem = document.getElementById('add-option-button');
    
    // Select div containers of text fields
    var divContainer = document.getElementById('options-div');
    
    var textBox = document.createElement('input');
    textBox.setAttribute("type", "text");
    textBox.id = "poll-input-option";
    
    var pollInputElementDiv = document.createElement('div');
    pollInputElementDiv.classList.add('poll-input-element');
    pollInputElementDiv.id = "poll-input-element";
    
    pollInputElementDiv.appendChild(textBox);
    
    divContainer.appendChild(pollInputElementDiv);
    
    var newOptionsDiv = document.createElement('div');
    newOptionsDiv.classList.add('poll-input-element');
}

/* This function closes the create new poll modal */
function closeCreatePollModal() {
    
  var backdropElem = document.getElementById('modal-backdrop');
  var createPollElem = document.getElementById('create-poll-modal');

  // Hide the modal and its backdrop.
  backdropElem.classList.add('hidden');
  createPollElem.classList.add('hidden');
    
  //clearInputValues();
}

/* This function clears the values of the create poll modal */
//function clearInputValues() {
//
//  var InputElems = document.getElementsByClassName('poll-input-element');
//  for (var i = 0; i < InputElems.length; i++) {
//    var input = InputElems[i].querySelector('input, textarea');
//    input.value = '';
//  }
//}

/*function searchInput() {
    if(event.keyCode == 13) {
        sendData({test:'ok'})
         var searchInputElem = document.getElementById("search").elements;
        console.log('== Search: ', searchInputElem);
    }
}*/

//function processForm(e) {
//    if (e.preventDefault) e.preventDefault();
//
//    var textinput = document.getElementById("search");
//    var searchterm = textinput.value;
//    window.location.assign("sortPage.html?term=" + searchterm);
//
//    return false; // Block form
//}
//
//var form = document.getElementById('search-form');
//
//if (form.attachEvent) { form.attachEvent("submit", processForm); } 
//else { form.addEventListener("submit", processForm); }

var convertToQS = function(title, detail, genre, options){  
        var vote = [];
    for(var i = 0; i < options.length; i++){
        vote.push(0);
    }
    var QS = "title=" + title + "&detail=" + detail + "&genre=" + genre + "&options=" + options + "&vote=" + vote;
    return QS;
}

function displayPollResults() {
  var pollInputSubject = document.getElementById('poll-input-subject').value || '';
  var pollInputGenre = document.getElementById('poll-input-genre').value || '';
  var pollInputDetails = document.getElementById('poll-input-details').value || '';
  var pollInputOptions = document.getElementsByClassName('poll-input-option') || '', names = [].map.call(pollInputOptions, function (input) {
      if (input.value != '')
        return input.value;
  });
  names = names.filter(function(n) { return n!=undefined });

  // We only add the note if we have a value for "what".
  if (pollInputSubject.trim()) {
      if (names.length != 0) {
          
          //0 = subject
          //1 = genre
          //2 = details
          //3 = options / names
        var request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:3000/createPoll', true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(convertToQS(pollInputSubject.trim(), pollInputDetails.trim(), pollInputGenre.trim(), names));
          console.log(pollInputSubject.trim(), pollInputDetails.trim(), pollInputGenre.trim(), names);
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


/* All the variables for button clicks reside here */
window.addEventListener('DOMContentLoaded', function (event) {
    var createPollElem = document.getElementById('create-poll-button');
        createPollElem.addEventListener('click', displayCreatePollModal);
    
    var addPollOption = document.getElementById('add-option-button');
        addPollOption.addEventListener('click', newPollOption);
    
    var modalCloseButton = document.querySelector('#create-poll-modal .modal-close-button');
        modalCloseButton.addEventListener('click', closeCreatePollModal); 
    
    var createPollPage = document.querySelector('#create-poll-modal .modal-accept-button');
        createPollPage.addEventListener('click', displayPollResults);  
//    var searchBoxElem = document.getElementById('search');
//        searchBoxElem.addEventListener("keyup", searchInput);
});