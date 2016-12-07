/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

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

function searchInput() {
    if(event.keyCode == 13) {
         var searchInputElem = document.getElementById("search").value;
        console.log('== Search: ', searchInputElem);
    }
}

/* All the variables for button clicks reside here */
window.addEventListener('DOMContentLoaded', function (event) {
    var openDropDownElem = document.getElementById('myDropdown');
        openDropDownElem.addEventListener('click', dropMenu);
    
    var createPollElem = document.getElementById('create-poll-button');
        createPollElem.addEventListener('click', displayCreatePollModal);
    
    var addPollOption = document.getElementById('add-option-button');
        addPollOption.addEventListener('click', newPollOption);
    
    var modalCloseButton = document.querySelector('#create-poll-modal .modal-close-button');
        modalCloseButton.addEventListener('click', closeCreatePollModal); 
    
    var searchBoxElem = document.getElementById('search');
        searchBoxElem.addEventListener("keyup", searchInput);
});