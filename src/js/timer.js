//Timer
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
  return {
    'total': time,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function setDeadline(seconds, minutes, hours, days){
  var deadline = new Date();
  deadline.setMinutes(deadline.getMinutes() + minutes);
  deadline.setHours(deadline.getHours() + hours);
  deadline.setSeconds(deadline.getSeconds() + seconds);
  deadline.setDate(deadline.getDate() + days);
  return deadline;
}