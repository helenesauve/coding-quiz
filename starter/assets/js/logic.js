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
    displayQuestions()
  });

// displayQuestions()

var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var questions = document.getElementById("questions");
var h1 = document.getElementById("h1");
var p = document.getElementById("p");




var displayQuestions = function(){
    // remove all text from start-screen, so the page is empty
    startScreen.textContent = '';
   
    // h1.classList.add("hide");
    // p.classList.add("hide");
   // delete the .hide class in css so questions appear
    questions.classList.remove("hide")
    // Iterate through questions array to display one question and its choices at a time
    for (var i = 0; i < quizQuestions.length; i++) {
        quizQuestions[i].question;
        quizQuestions[i].choices;
        // event listener for click. When clicked, change colour (event.currentTarget.set.attribute style)
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

