var accordion = document.getElementsByClassName("pane");
for (const e of accordion) {
  e.addEventListener("mouseover", toggleExpand);
  e.addEventListener("mouseout", toggleExpand);
}

// expand/shrink accordion according to which is hovered over
// first child of a pane is the year, second is the seasons
function toggleExpand() {
  this.classList.toggle("expand");
  var c = this.childNodes;
  console.log(c[3]);
  c[3].classList.toggle("show");
  c[3].classList.toggle("hide");
  for (const e of accordion) {
    if (e != this) {
      e.firstElementChild.classList.toggle("show");
      e.firstElementChild.classList.toggle("hide");
      e.classList.toggle("shrink");
    }
  }
}

// var children = e.childNodes;
//       for (var i = 0; i < children.length; i++) {
//         children[i].classList.toggle("show");
//         children[i].classList.toggle("hide");
//       }
