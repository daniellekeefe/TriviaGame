
  

  
    let counter = 60;
    let interval = setInterval(function() {
        counter--;
        // Display 'counter' wherever you want to display it.
        if (counter <= 0) {
             clearInterval(interval);
            $('#timer').html("<h3>Count down complete</h3>");  
            return;
        }else{
          $('#time').text(counter);
          console.log("Timer --> " + counter);
        }
    }, 1000);