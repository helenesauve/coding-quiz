// When start button is clicked, timer starts and first question appears
var timeEl = document.querySelector(".timer");
var secondsLeft = 75;
// creating a variable for the start button
var startButton = document.getElementById("start")

startButton.addEventListener("click", function() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // display score and give the user the ability to save their initials and their score
        
        }
  
    }, 1000);
  });


  
    // Questions contain buttons for each answer

    // When answer is clicked, the next question appears

    // If the answer clicked was incorrect then subtract time from the clock

//The quiz should end when all questions are answered or the timer reaches 0.

    // When the game ends, it should display their score and give the user the ability to save their initials and their score