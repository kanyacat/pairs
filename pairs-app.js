(function () {
  let arrayNum = [];
  let openNum;
  let openCount = 0;

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
      // console.log(arrayNum[index(item)]);
      openCount += 1;

      console.log(openCount);
      if (openCount == 2) {
        arrayNum.forEach((element) => {
          if (
            element.open == true &&
            element != arrayNum[index(item)] &&
            element.num == openNum
          ) {
            item.classList.add("btn__disable");

            openNum = -1;
          }

          openNum = arrayNum[index(item)].num;
        });
        openCount = 0;

        btn.classList.toggle("btn__open");
      }
      openNum = arrayNum[index(item)].num;
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

    // console.log(arrayNum);
  }

  createCards();
})();
