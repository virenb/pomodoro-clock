$(document).ready(function() {
  var clock = parseInt($("#clock").html());
  var sessionMinutes = parseInt($("#sessionLength").html());
  var breakMinutes = parseInt($("#breakLength").html());
  var sessionRunning = false;
  var breakRunning = false;
  var sessionSeconds = 0;
  var breakSeconds = 0;

  $("#start").on("click", function() {
    if(!sessionRunning) {
      sessionRunning = true;
      $(this).val("Pause");
    } else {
      sessionRunning = false;
      $(this).val("Resume");
    }
  });

  $("#reset").on("click", function() {
    if (!sessionRunning) {
      sessionMinutes = $("#sessionLength").html();
      sessionSeconds = 0;
      $("#clock").html(sessionMinutes + ":" + "0" + sessionSeconds);
      $("#start").val("Start");
    }
  });

  $("#increaseSession").on("click", function() {

  });

  $("#decreaseSession").on("click", function () {

  });

  $("#increaseBreak").on("click", function () {

  });

  $("#decreaseBreak").on("click", function () {

  });

});
