// When start button is clicked, timer starts and first question appears
var timeEl = document.querySelector(".timer");
var secondsLeft = 76;
// creating a variable for the start button
var startButton = document.getElementById("start");
// creating a variable for start screen
var startScreen = document.getElementById("start-screen");
//creating a variable for end screen
var endScreen = document.getElementById("end-screen");


startButton.addEventListener("click", function() {
    displayQuestions()
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

var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var questions = document.getElementById("questions");


var displayQuestions = function(){
   // delete the .hide class in css so questions appear
    questions.classList.remove("hide")
    // Iterate through questions array to display one question and its choices at a time
    for (var i = 0; i < quizQuestions.length; i++) {
        alert(quizQuestions[i].question);
        alert(quizQuestions[i].choices);
        // event listener
            // if current question's answer is wrong
                //remove 15 seconds // timeEl-15
                // incorrect.wav
                //and go to next question
            // else if it's correct, 
                // correct.wav
                //go to next question

    }
}

    // Questions contain buttons for each answer

    // When answer is clicked, the next question appears

    // If the answer clicked was incorrect then subtract time from the clock

//The quiz should end when all questions are answered or the timer reaches 0.

    // When the game ends, it should display their score and give the user the ability to save their initials and their score

