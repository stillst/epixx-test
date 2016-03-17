"use strict";
var deg_front = 0,
    deg_back = 180,
    hides = document.querySelectorAll(".property");
hidesClick();

function hidesClick() {
    for (var i = 0; i < hides.length; i++) {
        hides[i].addEventListener("click", handleClick);
    }
}

function handleClick(e) {
    var card = this;
    if (card.children[0].classList.contains("hide")) {
        deg_front = 190;
        deg_back = 360;
    } else {
        deg_front = 0;
        deg_back = 180;
    }
    var rotate = setInterval(function() {
        card.children[0].style.transform = "rotateY(" + deg_front + "deg)";
        card.children[1].style.transform = "rotateY(" + deg_back + "deg)";
        if (deg_front == 180) {
            card.children[0].classList.add("hide");
            clearInterval(rotate);
        }
        if (deg_front == 360) {
            card.children[0].classList.remove("hide");
            clearInterval(rotate);
        }
        deg_front = deg_front + 10;
        deg_back = deg_back + 10;
    }, 50);
}