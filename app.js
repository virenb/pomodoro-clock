$(document).ready(function() {
  var clock = parseInt($("#clock").html());
  var sessionMinutes = parseInt($("#sessionLength").html());
  var breakMinutes = parseInt($("#breakLength").html());
  var sessionRunning = false;
  var breakRunning = false;
  var sessionSeconds = 0;
  var breakSeconds = 0;

  $("#start").on("click", function() {
    if (!sessionRunning) {
      sessionRunning = true;
      resetToggle();
      countdown();
      $(this).val("Pause");
    } else {
      sessionRunning = false;
      resetToggle();
      $(this).val("Resume");
    }
  });

  $("#startBreak").on("click", function () {
    if (!breakRunning) {
      breakRunning = true;
      runBreak();
      $(this).val("Pause");
    } else {
      breakRunning = false;
      $(this).val("Resume");
    }
  });

  $("#reset").on("click", function() {
    if (!sessionRunning) {
      sessionMinutes = parseInt($("#sessionLength").html());
      sessionSeconds = 0;
      $("#clock").html(sessionMinutes + ":" + "0" + sessionSeconds);
      $("#start").val("Start");
    }
  });

  function resetToggle() {
    if (sessionRunning) {
      $("#reset").addClass('.disabled');
    } else {
      $("#reset").removeClass('.disabled');
    }
  }

  function countdown() {
    if (sessionRunning) {
      setTimeout(function () {
        if (sessionSeconds === 0) {
          if (sessionMinutes === 0) {
            sessionRunning = false;
            breakRunning = true;
            runBreak();
            return;
          }
          breakMinutes = parseInt($("#breakLength").html());
          sessionMinutes--;
          sessionSeconds = 59;
        } else {
          sessionSeconds--;
        }

        if (sessionSeconds < 10) {
          $("#clock").html(sessionMinutes + ":" + "0" + sessionSeconds);
        } else {
          $("#clock").html(sessionMinutes + ":" + sessionSeconds);
        }
        countdown();
      }, 1000);
    }
  }


  $("#increaseSession").on("click", function() {
    if (!sessionRunning) {
      var value = parseInt($("#sessionLength").html());
      value++;
      sessionMinutes = value;
      $("#sessionLength").html(value);
    }
  });

  $("#decreaseSession").on("click", function () {
    if (!sessionRunning) {
      var value = parseInt($("#sessionLength").html());
      if (value !== 0) {
        value--;
        sessionMinutes = value;
        $("#sessionLength").html(value);
      }
    }
  });

  function runBreak() {
      setTimeout(function () {
        if (breakSeconds === 0) {
          if (breakMinutes === 0) {
            breakRunning = false;
            resetToggle();
            return;
          }
          breakMinutes--;
          breakSeconds = 59;
        } else {
          breakSeconds--;
        }
        if (breakSeconds < 10) {
          $("#clock").html(breakMinutes + ":" + "0" + breakSeconds);
        } else {
          $("#clock").html(breakMinutes + ":" + breakSeconds);
        }
        runBreak();
      }, 1000);
  }

  $("#increaseBreak").on("click", function () {
    if (!breakRunning) {
      var value = parseInt($("#breakLength").html());
      value++;
      breakMinutes = value;
      $("#breakLength").html(value);
    }
  });

  $("#decreaseBreak").on("click", function () {
    if (!breakRunning) {
      var value = parseInt($("#breakLength").html());
      if (value !== 0) {
        value--;
        breakMinutes = value;
        $("#breakLength").html(value);
      }
    }
  });

});
