var feedbackLink = document.querySelector(".feedback__link");
var feedbackPopup = document.querySelector(".modal--feedback");
var feedbackClose = document.querySelector(".modal__close");
var feedbackName = feedbackPopup.querySelector("[name=user-name]");
var overlay = document.querySelector(".overlay");
var searchLink = document.querySelector(".user-menu__item--search");
var searchPopup = document.querySelector(".form--search");
var searchName = searchPopup.querySelector("[name=search]");
var loginLink = document.querySelector(".user-menu__link--login");
var loginPopup = document.querySelector(".form--login");
var loginEmail = loginPopup.querySelector("[name=user-email]");


feedbackLink.addEventListener ("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  feedbackName.focus();
});

feedbackClose.addEventListener ("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
})

searchLink.addEventListener("mouseover", function(event) {
  event.preventDefault();
  searchName.focus();
});

loginLink.addEventListener("mouseover", function(event) {
  event.preventDefault();
  loginEmail.focus();
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
    }
  }
});

