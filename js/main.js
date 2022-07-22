"use strict";
servicesList();
funcSlider(
  ".stages-block__left-arrows",
  ".stages-block__right-arrows",
  ".stages-block__slider-block",
  ".stages-block__slide",
  ".stages-block__slider-block",
  5
);
funcSlider(
  ".examples-block__left-arrows",
  ".examples-block__right-arrows",
  ".examples-block__example-main",
  ".examples-block__first-col",
  ".examples-block__example-main",
  2
);
burgerMenu();
contactCheck();
scrollMenu();
function burgerMenu() {
  let burgerBtn = document.querySelector(".header__burger-button");
  let burgerMenu = document.querySelector(".header__burger-menu");
  burgerBtn.addEventListener("click", () => {
    console.log("click");
    burgerMenu.classList.toggle("active-burger-menu");
  });

  // Scroll to block
  let bergerLi = document.querySelectorAll(".burger-li");
  bergerLi.forEach((e) => {
    e.addEventListener("click", () => {
      bergerLi.forEach((e) => {
        e.classList.remove("active-li");
      });
      e.classList.add("active-li");
      burgerMenu.classList.toggle("active-burger-menu");
      if (e.classList.contains("burger-service")) {
        document.querySelector(".service-block").scrollIntoView(true);
      }
      if (e.classList.contains("burger-portfolio")) {
        document.querySelector(".examples-block").scrollIntoView(true);
      }
      if (e.classList.contains("burger-stage")) {
        document.querySelector(".stages-block").scrollIntoView(true);
      }
      if (e.classList.contains("burger-designer")) {
        document.querySelector(".contact-block").scrollIntoView(true);
      }
    });
  });
}
function scrollMenu() {
  let menuLi = document.querySelectorAll(".menu-li");
  menuLi.forEach((e) => {
    e.addEventListener("click", () => {
      menuLi.forEach((e) => {
        e.classList.remove("active-li");
      });
      e.classList.add("active-li");
      if (e.classList.contains("menu-service")) {
        document.querySelector(".service-block").scrollIntoView(true);
      }
      if (e.classList.contains("menu-portfolio")) {
        document.querySelector(".examples-block").scrollIntoView(true);
      }
      if (e.classList.contains("menu-stage")) {
        document.querySelector(".stages-block").scrollIntoView(true);
      }
      if (e.classList.contains("menu-designer")) {
        document.querySelector(".contact-block").scrollIntoView(true);
      }
    });
  });
}
function servicesList() {
  let listBtn = document.querySelectorAll(".list-btn");
  listBtn.forEach((element) => {
    element.addEventListener("click", () => {
      element.parentElement.parentElement
        .querySelector(".service-block__full-text")
        .classList.toggle("active-li");
      element.classList.toggle("rotate-vector");
      element.parentElement.classList.toggle("active-li-before");
    });
  });
  window.addEventListener(
    `resize`,
    () => {
      if (window.innerWidth <= 570) {
        let text;
        document
          .querySelectorAll(".service-block__inner>ul>li[id]")
          .forEach((element) => {
            if (element.id == "adapt") {
              text = element.querySelector(".service-block__full-text");
              text.textContent =
                "Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия позволяет совершать заказ/покупку с минимумом действий. При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана.";
            } else if (element.id == "ux") {
              text = element.querySelector(".service-block__full-text");
              text.textContent =
                "Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения.";
            } else if (element.id == "inter") {
              text = element.querySelector(".service-block__full-text");
              text.textContent =
                "Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя.";
            }
          });
      } else if (window.innerWidth > 570) {
        let text;
        document
          .querySelectorAll(".service-block__inner>ul>li[id]")
          .forEach((element) => {
            if (element.id == "adapt") {
              text = element.querySelector(".service-block__full-text");
              text.textContent =
                "Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также                  позволяет совершать заказ/покупку с минимумом действий. При                  адаптивной версии вся структура сайта автоматически                  подстраивается под различную ширину экрана. Для того, чтобы                  получить рабочий продукт не нужно писать все с нуля —                  достаточно лишь подправить CSS и HTML. Один URL избавляет нас                  от ненужных редиректов, и надобности пользователю запоминать                  адрес мобильной версии.";
            } else if (element.id == "ux") {
              text = element.querySelector(".service-block__full-text");
              text.textContent =
                "              Микро-анимация может изменить восприятие продукта,                  пользовательское поведение и повысить конверсию. Небольшие,                  преимущественно функциональные анимации поддерживают                 пользователя: обеспечивают визуальную обратную связь и более                  понятно отражают происходящие изменения. Микро-анимации                  способны многое объяснить без слов.";
            } else if (element.id == "inter") {
              text = element.querySelector(".service-block__full-text");
              text.textContent =
                "Цель дизайна пользовательского интерфейса - сделать                  взаимодействие максимально простым и эффективным, насколько                  это возможно, с точки зрения достижения целей пользователя.                  Хороший дизайн пользовательского интерфейса облегчает                  выполнение поставленной задачи, не привлекая к себе лишнего                  внимания.";
            }
          });
      }
    },
    false
  );
}
function funcSlider(
  leftArrowPar,
  rightArrowPar,
  allSlidesPar,
  oneSlidePar,
  blockToSwipe,
  slideCountPar
) {
  let leftArrow = document.querySelector(leftArrowPar);
  let rightArrow = document.querySelector(rightArrowPar);
  let allSlides = document.querySelector(allSlidesPar);
  let oneSlide = document.querySelector(oneSlidePar);
  let slideWidth = oneSlide.clientWidth + 4 + 25;
  window.addEventListener(`resize`, () => {
    slideWidth = oneSlide.clientWidth + 4 + 25;
  });
  let slideCount = slideCountPar;
  let clickCount = 0;
  leftArrow.addEventListener("click", () => {
    rightArrow.removeAttribute("disabled");
    if (clickCount == slideWidth * (slideCount - 2)) {
      leftArrow.setAttribute("disabled", true);
    }
    clickCount += slideWidth;
    allSlides.style.cssText = `transform: translate(-${clickCount}px)`;
  });
  rightArrow.addEventListener("click", () => {
    leftArrow.removeAttribute("disabled");
    if (clickCount == slideWidth) {
      rightArrow.setAttribute("disabled", true);
    }
    allSlides.style.cssText = `transform: translate(-${
      clickCount - slideWidth
    }px)`;
    clickCount -= slideWidth;
  });

  // Move slider with swipe

  let posStart = 0;
  let postEnd = 0;
  let swipeCount = 0;

  let sliderBlock = document.querySelector(blockToSwipe);

  sliderBlock.addEventListener("touchstart", (e) => {
    posStart = e.changedTouches[0];
  });
  sliderBlock.addEventListener("touchend", (e) => {
    postEnd = e.changedTouches[0];
    if (posStart.pageX > postEnd.pageX + 80) {
      if (swipeCount > slideCount - 2) {
        return;
      } else {
        swipeCount++;
        allSlides.style.cssText = `transform: translate(-${
          slideWidth * swipeCount
        }px)`;
      }
    } else if (posStart.pageX + 80 < postEnd.pageX) {
      if (swipeCount == 0) {
        return;
      } else {
        swipeCount--;
        allSlides.style.cssText = `transform: translate( -${
          slideWidth * swipeCount
        }px)`;
      }
    }
  });
}
function contactCheck() {
  let btn = document.querySelector(".contact-block__btn");
  btn.addEventListener("click", validate);
}
function validate() {
  // Email validate
  let address = document.querySelector(".contact-block__email-input");
  let btn = document.querySelector(".contact-block__btn");
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{3,})$/iu;
  if (address.value == "") {
    address.parentElement.classList.add("email-div-erro");
    address.style.borderColor = "rgb(255, 111, 111)";
  }
  address.addEventListener("input", () => {
    if (EMAIL_REGEXP.test(address.value)) {
      btn.setAttribute("type", "submit");
      address.parentElement.classList.remove("email-div-erro");
      address.style.borderColor = "#67aefc";
    } else if (address.value == "") {
      btn.setAttribute("type", "button");
      address.parentElement.classList.add("email-div-erro");
      address.style.borderColor = "rgb(255, 111, 111)";
    } else {
      btn.setAttribute("type", "button");
      address.parentElement.classList.add("email-div-erro");
      address.style.borderColor = "rgb(255, 111, 111)";
    }
  });
}
