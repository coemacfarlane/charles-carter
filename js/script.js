// OPEN/CLOSE DROPDOWN MENU FROM HAMBURGER BUTTON
// GET ELEMENTS
var btn = document.getElementById("dropdown_btn"); // button pressed to open menu
var span = document.getElementsByClassName("hamburger"); // the 3 span elements representing btn
var dropdown = document.getElementById("dropdown"); // menu with links
var open = false; // is menu open?

// WHEN HAMBURGER BUTTON CLICKED OPEN/CLOSE DROPDOWN MENU
// VIA SLIDING MENU ON OR OFF VIEWPORT
btn.onclick = function() {
  if (open == false) {
    // OPEN MENU
    dropdown.style.left = "50vw";
    span[0].classList.toggle("close");
    span[1].classList.toggle("close");
    span[2].classList.toggle("close");

    open = true;
  } else {
    //CLOSE MENU
    dropdown.style.left = "100vw";
    span[0].classList.toggle("close");
    span[1].classList.toggle("close");
    span[2].classList.toggle("close");

    open = false;
  }
};
