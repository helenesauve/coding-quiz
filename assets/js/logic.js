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
    // remove all text from start-screen, so the page is empty
    startScreen.textContent = '';
    displayQuestions()
  });

  

var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var questions = document.getElementById("questions");
var questionIndex = 0;
// var correct = new Audio(".assets/sfx/correct.wav");
// var incorrect = new Audio(".assets/sfx/incorrect.wav");


var displayQuestions = function(){
    // creating variables for the wav sounds

   // delete the .hide class in css so questions appear
    questions.classList.remove("hide");

    // Iterate through questions array to display one question and its choices at a time
    do {
    for (var i = 0; i < quizQuestions.length; i++) {
        questionTitle.textContent = quizQuestions[i].questionText;
        // questionChoices.textContent = quizQuestions[0].options;

        let data = quizQuestions[0].options
 
        let list = document.getElementById("choices");
         
        data.forEach((item)=>{
          let li = document.createElement("button");
          li.innerText = item;
          list.appendChild(li);
        })


       
      
        // need to add event listener for click. When clicked, change colour (event.currentTarget.set.attribute style)
            if (quizQuestions.options == correctAnswerIndex) {
                alert("Correct");
                correct.play()
            }
            else {
                alert("Wrong");
                timeEl-15;
                incorrect.play();
            }
            questionIndex++
    }}
    while 
        (questionIndex > quizQuestions.length ||  timeEl > 0);
            // endQuiz function
}


    // Questions contain buttons for each answer

    // When answer is clicked, the next question appears

    // If the answer clicked was incorrect then subtract time from the clock

//The quiz should end when all questions are answered or the timer reaches 0.


// function to add user's initials
    // When the game ends, it should display their score and give the user the ability to save their initials and their score


    // storing 
    // var seconds = localStorage.getItem("Points");