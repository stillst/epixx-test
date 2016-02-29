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

<<<<<<< HEAD

=======
>>>>>>> gh-pages
//Popup
toogleHint = document.querySelector(".toogle-hint");
popupClose = document.querySelector(".popup__close");
popupClose.addEventListener("click", toogleClick);
<<<<<<< HEAD
popup = document.querySelector(".popup");
toogleHint.addEventListener("click", toogleClick);

function toogleClick(e){
  console.log("Клик");
=======
toogleHint.addEventListener("click", toogleClick);

function toogleClick(e){
  popup = document.querySelector(".popup");
>>>>>>> gh-pages
  popup.classList.toggle("popup--show");
}


//Timer
<<<<<<< HEAD
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
=======
var deadline = setDeadline(0,10,0,0);
initializeClock(deadline, restart=false);

function initializeClock(endtime){
    var min = document.getElementById("min"),
        sec = document.getElementById("sec");
        hour = document.getElementById("hour");
        day = document.getElementById("day");

    var timeinterval = setInterval(function(){
        var time = getTimeRemaining(endtime);
        if (day){
           day.innerHTML = time.days + " :";
        }
        if (hour){
           hour.innerHTML = time.hours + " :";
        }
        if(min){
          min.innerHTML = time.minutes + " :";
        }
        if (sec){
           sec.innerHTML = time.seconds;
        }

        if(time.total<=0){
          clearInterval(timeinterval);
          if (restart){
            initializeClock(setDeadline(0,7,0,0), restart=true);
          }
          if (day){
            day.innerHTML = "";
          }
          if (sec){
             sec.innerHTML = "Ваше время вышло";
          }
          if (hour){
            hour.innerHTML = "";
          }
          if (min){
            min.innerHTML = "";
          }
        }
    },1000);
}

function getTimeRemaining(endtime){
  var time = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (time/1000) % 60);
  if (seconds < 10){
    seconds = "0" + seconds;
  }
  var minutes = Math.floor( (time/1000/60) % 60);
  var hours = Math.floor( (time/(1000*60*60)) % 24);
  var days = Math.floor( time/(1000*60*60*24));
>>>>>>> gh-pages
  return {
    'total': time,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
<<<<<<< HEAD
=======
}

function setDeadline(seconds, minutes, hours, days){
  var deadline = new Date();
  deadline.setMinutes(deadline.getMinutes() + minutes);
  deadline.setHours(deadline.getHours() + hours);
  deadline.setSeconds(deadline.getSeconds() + seconds);
  deadline.setDate(deadline.getDate() + days);
  return deadline;
>>>>>>> gh-pages
}