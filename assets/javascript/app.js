
  window.onload = function() {
    $("#start").on("click", start);
  };
//click to start the timer
  function start() {

    let counter = 60;
    let interval = setInterval(function() {
        counter--;
        // Display 'counter' wherever you want to display it.
        if (counter <= 0) {
             clearInterval(interval);
            $('#timer').html("<h3>Times Up! Lets see your results...</h3>");  
            return;
        }else{
          $('#time').text(counter);
          console.log("Timer --> " + counter);
        }
    }, 1000);
  }