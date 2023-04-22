var library = {
  pokemon: [
    "https://res.cloudinary.com/beumsk/image/upload/v1547980025/memory/Pokemon/Bulbasaur.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980083/memory/Pokemon/Charmander.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980101/memory/Pokemon/Squirtle.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980116/memory/Pokemon/Pikachu.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980129/memory/Pokemon/Mewtwo.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980142/memory/Pokemon/Mew.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980154/memory/Pokemon/Articuno.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980164/memory/Pokemon/Zapdos.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980175/memory/Pokemon/Moltres.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980186/memory/Pokemon/Eevee.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980025/memory/Pokemon/Bulbasaur.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980083/memory/Pokemon/Charmander.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980101/memory/Pokemon/Squirtle.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980116/memory/Pokemon/Pikachu.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980129/memory/Pokemon/Mewtwo.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980142/memory/Pokemon/Mew.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980154/memory/Pokemon/Articuno.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980164/memory/Pokemon/Zapdos.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980175/memory/Pokemon/Moltres.png",
    "https://res.cloudinary.com/beumsk/image/upload/v1547980186/memory/Pokemon/Eevee.png",
  ],
};

var images = [];
var tempElt1 = "";
var tempElt2 = "";
var click = -1;
var win = 0;

var choise = document.querySelector(".choise__section");
var themesElt = document.querySelector(".choise");
var boxEl = document.getElementsByClassName("box");
var main = document.querySelector(".main");
var finalWindow = document.querySelector(".final__section");
var finalRes = document.querySelector(".final__result");
var againBtn = document.querySelector(".again__btn");

main.addEventListener("click", gameLogic);
againBtn.addEventListener("click", resetGame);

// initiate the game with chosen theme
themesElt.addEventListener("click", function (e) {
  if (e.target.classList.contains("themes")) {
    activateTheme(e.target.id);
    choise.classList.add("hidden");
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
          finalRes.innerHTML = "You won";
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
  choise.classList.remove("hidden");
  for (let i = 0; i < 20; i++) {
    boxEl[i].classList.add("play");
    boxEl[i].firstChild.classList.add("hidden");
  }
}
