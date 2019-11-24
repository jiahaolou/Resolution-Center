
  sortCards("all");

  function sortCards(c) {
    var cards = document.getElementsByClassName("sort");
    if (c == "all") {
      c = "";
    }
    for (var i = 0; i < cards.length; i++) {
      removeClass(cards[i], "show");
      if (cards[i].className.indexOf(c) >= 0){
        addClass(cards[i], "show")
      };
    }
  }

  function addClass(card, name) {
    var card_array = card.className.split(" ");
    var show_array = name.split(" ");
    for (var i = 0; i < show_array.length; i++) {
      if (card_array.indexOf(show_array[i]) == -1) {
        card.className += " " + show_array[i];
      }
    }
  }

  function removeClass(card, name) {
    var card_array = card.className.split(" ");
    var show_array = name.split(" ");
    for (var i = 0; i < show_array.length; i++) {
      while (card_array.indexOf(show_array[i]) >= 0) {
        card_array.splice(card_array.indexOf(show_array[i]), 1);
      }
    }
    card.className = card_array.join(" ");
  }


  /* add & remove "active" class to buttons for highlighting purposes */
  var sortButtons = document.getElementsByClassName("btn");
  for (var i = 0; i < sortButtons.length; i++) {
    sortButtons[i].addEventListener("click", function(){
      // remove "active" from prev current button's class name
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");

      // add "active" to current button's class name
      this.className += " active";
    });
  }
