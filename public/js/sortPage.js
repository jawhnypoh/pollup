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

// For the nav-bar dropdown menu
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function genreSort() {
    document.getElementById("genreMyDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.genreDropdown')) {

    var dropdowns = document.getElementsByClassName("genre-dropdown-content");
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
