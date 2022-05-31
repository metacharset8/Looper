const links = document.querySelectorAll(".menu__item a");
const red__stroke = document.getElementById("stroke");
const footer__icons = document.querySelectorAll(".list__li__a-img a");

// Добавление active class для хедера
links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((lk) => lk.classList.remove("active"));
    this.classList.add("active");
  });
});

// Добавление красной обводки для кнопки ютуба
// red__stroke.classList.add('red-stroke');

// Добавление обводки разных цветов для иконок футера
footer__icons.forEach((footer__icon) => {
  let counter = 0;
  footer__icon.addEventListener("click", () => {
    counter++;
    if (counter == 1) {
      footer__icon.classList.add("red-stroke");
    }
    if (counter == 2) {
      footer__icon.classList.remove("red-stroke");
      footer__icon.classList.add("green-stroke");
    }
    if (counter != 1 && counter != 2) {
      footer__icon.classList.remove("green-stroke");
      counter = 0;
    }
  });
});

// Тест гита
console.log("Test for git is completed");
console.log("Clone created");
