/* This is the JS code for the Landing Page */


/* This function displays the create new poll modal */
function displayCreatePollModal() {

  var backdropElem = document.getElementById('modal-backdrop');
  var createPollElem = document.getElementById('create-poll-modal');    

  // Show the modal and its backdrop.
  backdropElem.classList.remove('hidden');
  createPollElem.classList.remove('hidden');
    
  window.onclick = function(event) {
    if (event.target == createPollElem) {
        createPollElem.classList.add('hidden');
        backdropElem.classList.add('hidden');
    }
  }     
}

/* This function closes the create new poll modal */
function closeCreatePollModal() {

  var backdropElem = document.getElementById('modal-backdrop');
  var createPollElem = document.getElementById('create-poll-modal');

  // Hide the modal and its backdrop.
  backdropElem.classList.add('hidden');
  createPollElem.classList.add('hidden');
    
  // When the user clicks anywhere outside of the modal, close it   

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

/* All the variables for button clicks reside here */
window.addEventListener('DOMContentLoaded', function (event) {
    var createPollElem = document.getElementById('create-poll-button');
        createPollElem.addEventListener('click', displayCreatePollModal);
    
    var modalCloseButton = document.querySelector('#create-poll-modal .modal-close-button');
        modalCloseButton.addEventListener('click', closeCreatePollModal);
});