"use strict";
initializeClock(setDeadline(0, 8, 0, 0), false);

function initializeClock(endtime, restart) {
    var min = document.getElementById("min"),
        sec = document.getElementById("sec"),
        hour = document.getElementById("hour"),
        day = document.getElementById("day");
    var timeinterval = setInterval(function() {
        var time = getTimeRemaining(endtime);
        if (day) {
            day.innerHTML = time.days + " :";
        }
        if (hour) {
            hour.innerHTML = time.hours + " :";
        }
        if (min) {
            min.innerHTML = time.minutes + " :";
        }
        if (sec) {
            sec.innerHTML = time.seconds;
        }
        if (time.total <= 0) {
            clearInterval(timeinterval);
            if (restart) {
                initializeClock(setDeadline(10, 0, 0, 0), true);
            } else {
                if (day) {
                    day.innerHTML = "";
                }
                if (sec) {
                    sec.innerHTML = "Ваше время истекло";
                }
                if (hour) {
                    hour.innerHTML = "";
                }
                if (min) {
                    min.innerHTML = "";
                }
            }
        }
    }, 1000);
}

function getTimeRemaining(endtime) {
    var time = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((time / 1000) % 60),
        minutes = Math.floor((time / 1000 / 60) % 60),
        hours = Math.floor((time / (1000 * 60 * 60)) % 24),
        days = Math.floor(time / (1000 * 60 * 60 * 24));
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setDeadline(seconds, minutes, hours, days) {
    var deadline = new Date();
    deadline.setMinutes(deadline.getMinutes() + minutes);
    deadline.setHours(deadline.getHours() + hours);
    deadline.setSeconds(deadline.getSeconds() + seconds);
    deadline.setDate(deadline.getDate() + days);
    return deadline;
}
/*
function changewordend(str, count, one, few, many, tens){

  if(count > 10 && count < 20)
  {
    return str + many;
  }

  var remain = count%10;
  if(remain == 1)
  {
    return str + one;
  }
  else if(remain < 5 && remain > 1)
  {
    return str + few;
  }
  else
  {
    return str + many;
  }
}
*/