// SUBMIT page, make new text with specific guidelines appear
// upon cliking one of the link headers
var links = document.getElementsByClassName("cat");

for (var i = 0; i < links.length; i++) {
  console.log(links[i]);
  links[i].addEventListener("click", toggleDisplay);
}

function toggleDisplay() {
  // toggle hide/show on all h2 links
  for (var i = 0; i < links.length; i++) {
    links[i].classList.toggle("show");
    links[i].classList.toggle("hide");
  }

  var collection;
  var arrow = document.getElementById("arrow_wrapper");
  // clicking Go Back will hide any guideline text shown & scroll arrow
  // and display text elements of the default display
  if (this.classList.contains("default")) {
    // hide any guideline text
    collection = document.getElementsByClassName("guidelines");
    for (const e of collection) {
      if (e.classList.contains("show")) {
        e.classList.toggle("show");
        e.classList.toggle("hide");
      }
    }
    // show scroll arrow
    arrow.classList.toggle("show");
    arrow.classList.toggle("hide");
    // show default text
    collection = document.getElementsByClassName("default");
    for (const e of collection) {
      if (e.classList.contains("text")) {
        e.classList.toggle("show");
        e.classList.toggle("hide");
      }
    }
  }
  // clicking a guideline h2 will change display to one specified in classlist
  else {
    console.log("guideline clicked");
    // hide default display
    collection = document.getElementsByClassName("default");
    for (const e of collection) {
      if (e.classList.contains("text")) {
        e.classList.toggle("show");
        e.classList.toggle("hide");
      }
    }
    // show scroll arrow
    arrow.classList.toggle("show");
    arrow.classList.toggle("hide");
    // find text elements with same specific display class
    // and toggle show/hide to display appropriate elements
    collection = document.getElementsByClassName("guidelines");
    var c = this.classList[0];
    for (const e of collection) {
      if (e.classList.contains(c)) {
        e.classList.toggle("show");
        e.classList.toggle("hide");
      }
    }
  }
}
