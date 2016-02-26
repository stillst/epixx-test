hides = document.querySelectorAll(".hide");
hidesClick();

function hidesClick(){
  for(var i=0; i < hides.length; i++ ){
      hides[i].addEventListener("click", handleClick);
  }
}

function handleClick(e){
  this.classList.toggle("hide");
}


//Popup
toogleHint = document.querySelector(".toogle-hint");
popupClose = document.querySelector(".popup__close");
popupClose.addEventListener("click", toogleClick);
popup = document.querySelector(".popup");
toogleHint.addEventListener("click", toogleClick);

function toogleClick(e){
  console.log("Клик");
  popup.classList.toggle("popup--show");
}


//Timer
var now = new Date(),
    minute = 10,
    deadline = now.setMinutes(now.getMinutes() + minute),
    min = document.getElementById("min"),
    sec = document.getElementById("sec");

initializeClock(deadline, min, sec);

function initializeClock(endtime, min, sec){
  var timeinterval = setInterval(function(){
    var time = getTimeRemaining(endtime);
    min.innerHTML = time.minutes + ":";
    sec.innerHTML = time.seconds;
    if(time.total<=0){
      min.innerHTML = "Ваше время вышло";
      sec.innerHTML = "";
      clearInterval(timeinterval);
    }
  },1000);
}

function getTimeRemaining(endtime){
  var time = endtime - Date.parse(new Date());
  var seconds = Math.floor( (time/1000) % 60 );
  if (seconds < 10){
    seconds = "0" + seconds;
  }
  var minutes = Math.floor( (time/1000/60) % 60 );
  var hours = Math.floor( (time/(1000*60*60)) % 24 );
  var days = Math.floor( time/(1000*60*60*24) );
  return {
    'total': time,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}