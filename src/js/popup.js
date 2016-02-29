//Popup
toogleHint = document.querySelector(".toogle-hint");
popupClose = document.querySelector(".popup__close");
popupClose.addEventListener("click", toogleClick);
toogleHint.addEventListener("click", toogleClick);

function toogleClick(e){
  popup = document.querySelector(".popup");
  popup.classList.toggle("popup--show");
}