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
};

function decreaseSession() {
  if (!activeSession) {
    var value = parseInt(document.getElementById('sessionLength').innerHTML);
    if (value !== 0) {
      value--;
      sessionMinutes = value;
      document.getElementById('sessionLength').innerHTML = value;
    }
  }
};

function increaseBreak() {
  if (!activeBreak) {
    var value = parseInt(document.getElementById('breakLength').innerHTML);
    value++;
    breakMinutes = value;
    document.getElementById('breakLength').innerHTML = value;
  }
};

function decreaseBreak() {
  if (!activeBreak) {
    var value = parseInt(document.getElementById('breakLength').innerHTML);
    if (value !== 0) {
      value--;
      breakMinutes = value;
      document.getElementById('breakLength').innerHTML = value;
    }
  }
};

