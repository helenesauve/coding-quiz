var timeEl = document.querySelector(".timer");
var secondsLeft = 76;
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen");
var submitButton = document.getElementById("submit");
var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var questions = document.getElementById("questions");
var questionIndex = 0;
var finalScore = document.getElementById("final-score");
var highScores = document.getElementById("highscores");
var correct = new Audio("../assets/sfx/correct.wav");
var incorrect = new Audio("../assets/sfx/incorrect.wav");

// function that listens to the Start Quiz button
startButton.addEventListener("click", function () {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
  // remove all text from start-screen, so the page is empty
  startScreen.textContent = "";
  displayQuestions();
});

var displayQuestions = function () {
  // delete the .hide class in css so questions appear
  questions.classList.remove("hide");

  // Iterate through questions array to display one question and its choices at a time

  questionTitle.textContent = quizQuestions[questionIndex].questionText;
  questionChoices.innerHTML = "";
  let askedQuestions = quizQuestions[questionIndex].options;
  // appending li to question choices
  askedQuestions.forEach((item) => {
    let btn = document.createElement("button");
    btn.innerText = item;
    btn.addEventListener("click", checkAnswers);
    questionChoices.appendChild(btn);
  });
};

var checkAnswers = function (event) {
  event.stopPropagation();
  event.preventDefault();
  var feedbackEl = document.getElementById("feedback");
  if (
    event.target.innerHTML ===
    quizQuestions[questionIndex].options[
      quizQuestions[questionIndex].correctAnswerIndex
    ]
  ) {
    feedbackEl.textContent = "Correct";
    correct.play();
  } else {
    feedbackEl.textContent = "Incorrect";
    secondsLeft -= 10;
    incorrect.play();
  }

  if (questionIndex === quizQuestions.length - 1 || secondsLeft <= 0) {
    quizEnd();
    return;
  }
  // once an answer is checked, move onto the next question
  questionIndex++;
  displayQuestions();
};

var quizEnd = function () {
  var points = secondsLeft;

  var finalScore = document.getElementById("final-score");
  finalScore.textContent = points;

  // removing last question
  questions.remove();
  // unhide end-screen
  endScreen.classList.remove("hide");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var user = {
      initials: document.getElementById("initials").value.trim(),
      points: points,
    };
    // set new submission
    localStorage.setItem("user", JSON.stringify(user));

    // get most recent submission
    var lastUser = JSON.parse(localStorage.getItem("user"));

    var initialsProvided = lastUser.initials;
    var endPoints = user.points;

    initialsProvided.textContent = initialsProvided;
    endPoints.textContent = endPoints;

    //sending information to the highscores.html file
    window.location.href = "highscores.html";
  });

  //getting information from index.html in highscore html
  document.getElementById("initials").textContent = initials;
  var initialsList = document.getElementById("highscores");
};
