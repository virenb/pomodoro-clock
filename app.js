var activeSession = false;
var activeBreak = false;
var sessionMinutes = parseInt(document.getElementById('sessionLength').innerHTML);
var breakMinutes = parseInt(document.getElementById('breakMinutes').innerHTML);
var sessionSeconds = 0;
var breakSeconds = 0;

function increaseSession() {
  if (!activeSession) {
    var value = parseInt(document.getElementById('sessionLength').innerHTML);
    value++;
    sessionMinutes = value;
    document.getElementById('sessionLength').innerHTML = value;
  }
}

function decreaseSession() {
  if (!activeSession) {
    var value = parseInt(document.getElementById('sessionLength').innerHTML);
    if (value !== 0) {
      value--;
      sessionMinutes = value;
      document.getElementById('sessionLength').innerHTML = value;
    }
  }
}

function increaseBreak() {
  if (!activeBreak) {
    var value = parseInt(document.getElementById('breakLength').innerHTML);
    value++;
    breakMinutes = value;
    document.getElementById('breakLength').innerHTML = value;
  }
}

function decreaseBreak() {
  if (!activeBreak) {
    var value = parseInt(document.getElementById('breakLength').innerHTML);
    if (value !== 0) {
      value--;
      breakMinutes = value;
      document.getElementById('breakLength').innerHTML = value;
    }
  }
}

function startToPause() {
  if (!activeSession) {
    activeSession = true;
    clockResetToggle();
    document.getElementById('startToPause').value = "Pause";
    runClock();
  }
  else {
    activeSession = false;
    clockResetToggle();
    document.getElementById('startToPause').value = "Resume";
  }
}

function clockResetToggle() {
  if (activeSession) {
    document.getElementById('resetClock').classList.add('disabled');
  } else {
    document.getElementById('resetClock').classList.remove('disabled');
  }
}

function resetClock() {
  if (!activeSession) {
    sessionMinutes = parseInt(document.getElementById('sessionLength').innerHTML);
    sessionSeconds = 0;
    document.getElementById('clock').innerHTML = sessionMinutes + ":" + "0" + sessionSeconds;
    document.getElementById('startToPause').value = "Start";
  }
}

function runClock() {
  if (activeSession) {
    setTimeout(countdown, 1000);
  }
}

function countdown() {
  if (sessionSeconds === 0) {
    if (sessionMinutes === 0) {
      activeSession = false;
      activeBreak = true;
      runBreak();
      return;
    }
    breakMinutes = parseInt(document.getElementById('breakLength').innerHTML);
    sessionMinutes--;
    sessionSeconds = 59;
  } else {
    sessionSeconds--;
  }
  if (sessionSeconds < 10) {
    document.getElementById('clock').innerHTML = sessionMinutes + ":" + "0" + sessionSeconds;
  } else {
    document.getElementById('clock').innerHTML = sessionMinutes + ":" + sessionSeconds;
  }
runClock();
}