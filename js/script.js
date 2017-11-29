var feedbackLink = document.querySelector(".feedback__link");
var feedbackPopup = document.querySelector(".modal--feedback");
var feedbackClose = document.querySelector(".modal__close");
var feedbackName = feedbackPopup.querySelector("[name=user-name]");
var overlay = document.querySelector(".overlay");


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

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
    }
  }
});

