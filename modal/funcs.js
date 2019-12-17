// get the modal
const modal = document.getElementById("myModal")

// get the button that opens the modal
const openModalBtn = document.getElementById("myButton")

// get the <span> element that closes the modal
const closeModal = document.getElementsByClassName("close-modal")[0]

// when the user clicks on the button, open the modal
openModalBtn.onclick = function() {
  modal.style.display = "block"
}

// when the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
  modal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none"
  }
}