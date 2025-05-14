import _ from "lodash";
import "./style.css";

showDropdownMenu(`.menu-button`, `.menu-window`);
useNavButtons();
moveSlideLeft();
moveSlideRight();
setInterval(slideShow, 8000);

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

function checkInputValidity() {
  let formInputs = document.querySelectorAll(`.form>div>input`);
  formInputs.forEach((input) => {
    input.addEventListener(`input`, () => {
      if (input.id == `input-password`) {
        document.getElementById(`input-confirm-password`).pattern = input.value;
      }
      if (!input.validity.valid) {
        showError(input);
      }
      if (input.validity.valid) {
        input.nextElementSibling.classList.add(`no-error`);
      }
    });
  });
  document.getElementById(`submit`).addEventListener(`click`,(event)=> {
    event.preventDefault();
    if(document.querySelector(`.form`).checkValidity()){
      alert(`HIGH FIVE!`)
      document.querySelector(`.form`).reset();
    } else {
      alert(`Finish the form first, dingus`);
    }
  })
}

function showError(inputElement) {
  let errorSpan = inputElement.nextElementSibling;
  errorSpan.classList.remove(`no-error`);
  if (inputElement.validity.valueMissing) {
    errorSpan.textContent = `This field is required`;
  }
  if (inputElement.validity.tooShort) {
    errorSpan.textContent = `Enter at least ${inputElement.minLength} characters`;
  }
  if (inputElement.validity.patternMismatch) {
    errorSpan.textContent = `Enter a matching password`;
  }
  if (inputElement.id == `input-email` && inputElement.validity.typeMismatch) {
    errorSpan.textContent = `Enter a valid email address`;
  }
}


function submitForm(){
  let form = document.querySelector(`form`);
  form.addEventListener(`submit`, (event)=>{
    event.preventDefault();
    if(form.validity.valid){
      alert(`huzzah`);
    }
  })
}


checkInputValidity();
submitForm();
