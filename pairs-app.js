(function () {
  let arrayNum = [];

  function index(element) {
    return Array.from(element.parentNode.children).indexOf(element);
  }

  function createArray(num, open = false) {
    let item = document.createElement("div");
    item.classList.add("card__item");

    let btn = document.createElement("button");
    btn.classList.add("card__btn");

    btn.textContent = num + 1;

    btn.addEventListener("click", function () {
      let done = btn.classList.toggle("btn__open");
      arrayNum[index(item)].open = done;
      console.log(arrayNum[index(item)]);
    });

    item.append(btn);
    arrayNum.push({ num, open });

    return item;
  }

  function createCards() {
    let cards = document.querySelector(".cards__container");
    for (i = 0; i <= 7; i++) {
      let cardItem = createArray(i);
      cards.append(cardItem);
    }

    for (i = 0; i <= 7; i++) {
      let cardItem = createArray(i);
      cards.append(cardItem);
    }

    console.log(arrayNum);
  }

  createCards();
})();
