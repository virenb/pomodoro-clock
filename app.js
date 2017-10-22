function incrementSession() {
  var value = parseInt(document.getElementById('session').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('session').value = value;
  document.getElementById('clock').innerHTML = value;
}

function decreaseSession() {
  var value = parseInt(document.getElementById('session').value, 10);
  value = isNaN(value) ? 0 : value;
  value--;
  if (value <= 0) {
    value = 0;
  }
  document.getElementById('session').value = value;
  document.getElementById('clock').innerHTML = value;
}

function incrementBreak() {
  var value = parseInt(document.getElementById('break').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('break').value = value;
}

function decreaseBreak() {
  var value = parseInt(document.getElementById('break').value, 10);
  value = isNaN(value) ? 0 : value;
  value--;
  if (value <= 0) {
    value = 0;
  }
  document.getElementById('break').value = value;
}

document.getElementById('clock').innerHTML = document.getElementById('session');

// Make a function to start the counter
// Has to count down from the value of session
// Has to display mm:ss

var current, initial, onPause;
var times = { "current": current, "initial": initial };

function start() {
  onBreak = false;
  times.initial = +document.getElementById('session').innerHTML * 60;
  times.current = +document.getElementById('session').innerHTML * 60;
  startInterval = setInterval(countdown, 1000);
}

function startBreak() {
  times.initial = +document.getElementById('break').innerHTML * 60;
  current = +document.getElementById('break').innerHTML * 60;
  onBreak = true;
  startInterval = setInterval(countdown, 1000);
}

function reset() {
  document.getElementById('session').value = 25;
  document.getElementById('clock').innerHTML = 25;
  document.getElementById('break').value = 5;
}

function pause() {

}