hides = document.querySelectorAll(".hide");
hidesClick();

function hidesClick() {
    for (var i = 0; i < hides.length; i++) {
        hides[i].addEventListener("click", handleClick);
    }
}

function handleClick(e) {
    this.classList.toggle("hide");
}