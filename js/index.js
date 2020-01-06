// HOME ISSUE TITLE EXPANDS UPON HOVERING OVER
var headerTxt = document.getElementsByClassName("issue");
headerTxt[2].addEventListener("mouseover", expand);
headerTxt[2].addEventListener("mouseout", expand);

function expand() {
  headerTxt[1].classList.toggle("expandB");
  headerTxt[2].classList.toggle("expandC");
}

var cards = document.getElementsByClassName("card");
for (var i = 0; i < cards.length; i++) {
  cards[i].style.gridAre = i + 2 + " / inherit";
}
