const links = document.querySelectorAll(".menu__item a");
const red__stroke = document.getElementById("stroke");
const footer__icons = document.querySelectorAll(".list__li__a-img a");
const footer = document.querySelectorAll("footer");

// Добавление active class для хедера
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((lk) => lk.classList.remove("active"));
    link.classList.add("active");
  });
});

// Добавление красной обводки для кнопки ютуба
// red__stroke.classList.add('red-border');

// Добавление обводки разных цветов для иконок футера
footer__icons.forEach((footer__icon) => {
  let counter = 0;
  footer__icon.addEventListener("click", () => {
    counter++;
    if (counter == 1) {
      footer__icon.classList.add("red-border");
    } else {
      footer__icon.classList.remove("red-border");
      footer__icon.classList.add("green-border");
    }
    if (counter != 1 && counter != 2) {
      footer__icon.classList.remove("green-border");
      counter = 0;
    }
  });
});

// Делегирование событий
footer.forEach((foo) => {
  foo.addEventListener("click", () => {
    if (event.target.classList == "footer__title") {
      console.log("Looper");
    } else {
      console.log("Footer");
    }
  });
});

// Тест гита
console.log("Test for git is completed");
console.log("Clone created");
