import _ from "lodash";
import "./style.css";

showDropdownMenu(`.menu-button`, `.menu-window`);
useNavButtons();
moveSlideLeft();
moveSlideRight();
setInterval(slideShow, 5000);

function showDropdownMenu(buttonId, menuId) {
  let button = document.querySelector(buttonId);
  let menu = document.querySelector(menuId);

  button.addEventListener(`click`, () => {
    if (menu.classList.contains(`hidden`)) {
      menu.classList.remove(`hidden`);
      document.querySelector(`.content`).addEventListener(`mouseover`, () => {
        menu.classList.add(`hidden`);
      });
    } else {
      menu.classList.add(`hidden`);
    }
  });
}

function moveSlideLeft() {
  document.querySelector(`.switch-left`).addEventListener(`click`, () => {
    let navButtons = document.querySelectorAll(`.nav-button`);

    for (let i = 0; i < navButtons.length; i++) {
      if (navButtons[i].classList.contains(`active`)) {
        if (i > 0) {
          navButtons[i - 1].click();
        } else {
          navButtons[navButtons.length - 1].click();
          break;
        }
      }
    }
  });
}

function moveSlideRight() {
  document.querySelector(`.switch-right`).addEventListener(`click`, () => {
    let navButtons = document.querySelectorAll(`.nav-button`);

    for (let i = navButtons.length - 1; i >= 0; i--) {
      if (navButtons[i].classList.contains(`active`)) {
        if (i == navButtons.length - 1) {
          navButtons[0].click();
          break;
        } else {
          navButtons[i + 1].click();
        }
      }
    }
  });
}

function useNavButtons() {
  let slides = document.querySelectorAll(`.slide`);
  document.querySelectorAll(`.nav-button`).forEach((button, index) => {
    button.addEventListener(`click`, () => {
      document.querySelector(`.active`).classList.remove(`active`);
      button.classList.add(`active`);
      slides.forEach((slide) => slide.classList.add(`hidden`));
      slides[index].classList.remove(`hidden`);
    });
  });
}

function slideShow() {
  document.querySelector(`.switch-right`).click();
}
