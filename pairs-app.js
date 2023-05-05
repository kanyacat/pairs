var library = {
  fish: [
    "https://i.ibb.co/pnQvz2L/1.png",
    "https://i.ibb.co/ZJKTyYK/2.png",
    "https://i.ibb.co/VS2pD1H/3.png",
    "https://i.ibb.co/8Xp40mB/4.png",
    "https://i.ibb.co/wCBKt2W/5.png",
    "https://i.ibb.co/wYB6Tf1/6.png",
    "https://i.ibb.co/C7qSpq4/7.png",
    "https://i.ibb.co/Lx3tC9T/8.png",
    "https://i.ibb.co/1dXs370/9.png",
    "https://i.ibb.co/HGgjhgQ/10.png",
    "https://i.ibb.co/pnQvz2L/1.png",
    "https://i.ibb.co/ZJKTyYK/2.png",
    "https://i.ibb.co/VS2pD1H/3.png",
    "https://i.ibb.co/8Xp40mB/4.png",
    "https://i.ibb.co/wCBKt2W/5.png",
    "https://i.ibb.co/wYB6Tf1/6.png",
    "https://i.ibb.co/C7qSpq4/7.png",
    "https://i.ibb.co/Lx3tC9T/8.png",
    "https://i.ibb.co/1dXs370/9.png",
    "https://i.ibb.co/HGgjhgQ/10.png",
  ],
};

var images = [];
var tempElt1 = "";
var tempElt2 = "";
var click = -1;
var win = 0;

var choice = document.querySelector(".choice__section");
var themesElt = document.querySelector(".choice");
var boxEl = document.getElementsByClassName("box");
var main = document.querySelector(".main");
var finalWindow = document.querySelector(".final__section");
var againBtn = document.querySelector(".again__btn");

main.addEventListener("click", gameLogic);
againBtn.addEventListener("click", resetGame);

// initiate the game with chosen theme
themesElt.addEventListener("click", function (e) {
  if (e.target.classList.contains("themes")) {
    activateTheme(e.target.id);
    choice.classList.add("hidden");
  }
});

function activateTheme(theme) {
  // insert theme in images array
  for (let i = 0; i < 20; i++) {
    images.push(library[theme][i]);
  }
  // insert images in memory game
  for (let i = 0; i < 20; i++) {
    var rand = Math.floor(Math.random() * (images.length - 1));
    boxEl[i].innerHTML =
      "<img src='" + images[rand] + "' alt='image' class='hidden'>";
    images.splice(rand, 1); //чтоб не было повторений
  }
}

function gameLogic(element) {
  // make sure the box is playable
  if (element.target.classList.contains("play")) {
    element.target.firstChild.classList.remove("hidden");
    // first of two click
    if (click < 1) {
      tempElt1 = element.target;
      click = 1;
    }

    // second click
    else if (element.target !== tempElt1) {
      tempElt2 = element.target;

      // different images
      if (tempElt1.firstChild.src !== tempElt2.firstChild.src) {
        main.removeEventListener("click", gameLogic);
        setTimeout(function () {
          tempElt1.firstChild.classList.add("hidden");
          tempElt2.firstChild.classList.add("hidden");
          main.addEventListener("click", gameLogic);
        }, 400);
      }

      // same images
      else {
        win += 2;
        tempElt1.firstChild.classList.add("outlined");
        tempElt2.firstChild.classList.add("outlined");
        tempElt1.classList.remove("play");
        tempElt2.classList.remove("play");

        // game won
        if (win === 20) {
          finalWindow.classList.remove("hidden");
        }
      }
      click = 0;
    }
  }
}

function resetGame() {
  // reset games
  tempElt1 = "";
  tempElt2 = "";
  click = -1;
  win = 0;
  finalWindow.classList.add("hidden");
  choice.classList.remove("hidden");
  for (let i = 0; i < 20; i++) {
    boxEl[i].classList.add("play");
    boxEl[i].firstChild.classList.add("hidden");
  }
}
