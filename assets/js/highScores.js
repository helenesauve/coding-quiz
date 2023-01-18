// get most recent submission
var lastUser = JSON.parse(localStorage.getItem("user"));

var initialsProvided = lastUser.initials;
var endPoints = lastUser.points


//getting information from index.html in highscore html
var initialsList = document.getElementById("highscores");
// appending li to high scores submitted
let liElement = document.createElement("li");
liElement.innerText = initialsProvided + ": " + endPoints
initialsList.appendChild(liElement);
// });