"use strict";
var toogleHint = document.querySelector(".toogle-hint");
var popupClose = document.querySelector(".popup__close");
popupClose.addEventListener("click", toogleClick);
toogleHint.addEventListener("click", toogleClick);

function toogleClick() {
    var popup = document.querySelector(".popup");
    popup.classList.toggle("popup--show");
}