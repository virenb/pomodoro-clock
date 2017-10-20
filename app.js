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
