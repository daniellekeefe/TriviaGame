
// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
window.onload = function() {
    $("#start").on("click", start);
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  let intervalId;
  
  // prevents the clock from being sped up unnecessarily
  let clockRunning = false;
  let time = 0;
  
  function reset() {
  
    time = 0;
  
    // DONE: Change the "display" div to "00:00."
    $("#timer").text("00:00");
  
  }
  function start() {
  
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }

  function count() {
  
    // DONE: increment time by 1, remember we cant use "this" here.
    time--;
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    const converted = timeConverter(time);
    console.log(converted);
  
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#timer").text(converted);
  }
  function timeConverter(t) {
  
    let minutes = Math.floor(t / 60);
    let seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "00" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }