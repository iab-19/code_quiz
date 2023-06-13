/*
When start button is clicked, clear page except for highscore and time and display question.

When correct answer is chosen, move on to next question.
When wrong answer is chosen, subtract ten seconds from the timer and move on to next question
When timer runs out, display final score and text box to enter initials and save.
Go back button to restart quiz and clear scores button to wipe scores


*/
// Manipulates the countdown id
var timerEl = document.getElementById('countdown');
var mainAreaEl = document.getElementById('main-area');
var beginEl = document.getElementById('start-button');
var question1 = document.getElementById('question1');
var q1answer = document.getElementById('q1-answer');
var question2 = document.getElementById('question2');
var q2answer = document.getElementById('q2-answer');
var question3 = document.getElementById('question3');
var q3answer = document.getElementById('q3-answer');
var question4 = document.getElementById('question4');
var q4answer = document.getElementById('q4-answer');
var question5 = document.getElementById('question5');
var q5answer = document.getElementById('q5-answer');

var timeLeft = 70;
var timeInterval;

function endAttempt() {
    mainAreaEl.setAttribute('display', 'none');
}

function wrongAnswer() {
    timeLeft-= 10;
}
function setTimerText () {
    timerEl.textContent = timeLeft;
}


function countdown() {
    setTimerText();
    timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent = timeLeft;
            // Hide main area and show questions 1
            mainAreaEl.setAttribute('display', 'none');
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endAttempt();
        }
    }, 1000);
}

beginEl.addEventListener('click', countdown);

// Add event listener to correct answer of question 1 and clear screen
// and display question 2.
q1answer.addEventListener('click', function);

q2answer.addEventListener('click', );

q3answer.addEventListener('click', );

q4answer.addEventListener('click', );

q5answer.addEventListener('click', );
