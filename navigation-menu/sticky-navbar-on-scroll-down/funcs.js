// when user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()}

// get the navbar
let navbar = document.getElementById("navbar")

// get the offset position of the navbar
const sticky = navbar.offsetTop

// add the sticky class to the navbar when you reach its scroll position. 
// remove 'sticky' when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}