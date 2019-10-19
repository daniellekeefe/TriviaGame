
  window.onload = function() {
    $("#start").on("click", start);
  };
//click to start the timer
  function start() {

    let counter = 5;
    let interval = setInterval(function() {
        counter--;
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
  
  (function() {
    function quiz() {
      // HTML output
      const output = [];
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // store list of answer choices
        const answers = [];
  
        //  available answer
        for (letter in currentQuestion.answers) {
          //radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // write question and its answers to the HTML output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
          //join https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
        );
      });
  
      // output list string of HTML to the page
      quizContainer.innerHTML = output.join("");
    }
  
    function results() {
      const answerContainers = quizContainer.querySelectorAll(".answers");
      let numCorrect = 0;
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // answer chosen
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // answer validation
        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
          // correct score logging
          answerContainers[questionNumber].style.color = "lightgreen";
          console.log('correct'); 
        } else {
          // if answer wrong/empt make color red
          answerContainers[questionNumber].style.color = "red";
          console.log('wrong');
        }
      });
  
      // correct output, leveraged from unit 4 game
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: 'Rah, rah, ah, ah, ah, roma, roma, ma. Gaga, ooh, la, la... want your bad romance!',
        answers: {
          a: 'Lily Allen',
          b: 'Beatles',
          c: 'Lady Gaga'
        },
        correctAnswer: 'c'
      },
      {
        question: 'Do you ever feel, like a plastic bag, drifting through the wind, wanting to start again?',
        answers: {
          a: 'Katy Perry',
          b: 'Trick Daddy',
          c: 'Pearl Jam'
        },
        correctAnswer: 'a'
      },
              //needed to use "" because the sentence had a few ' in it
      {
        question: "I can't wait 'til I get you on the floor good-looking",
        answers: {
          a: 'Florence & the Machine',
          b: 'Justin Timberlake',
          c: 'Gordon Lightfoot',
        },
        correctAnswer: "b"
      }
    ];
  
    quiz();
  
    // on submit, show results
    submitButton.addEventListener("click", results);
  })();

  //test