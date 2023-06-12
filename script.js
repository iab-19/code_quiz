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

var timeLeft = 5;
var timeInterval;
function setTimerText () {
    timerEl.textContent = timeLeft;
}


function countdown() {
    setTimerText();
    timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent = timeLeft;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endAttempt();
        }
    }, 1000);
}

// Creating go back button
var goBackButton = document.createElement('Button');
goBackButton.id = 'backButton';
goBackButton.innerHTML = 'Go Back';
goBackButton.style.background = 'grey';

// creating clear highscore button
// var btn = document.createElement('Button');
// btn.setAttribute('type', 'button');
// btn.setAttribute('value', 'Clear Highscores');
// btn.setAttribute('background-color', 'grey')

var clearScoreBtn = document.createElement('Button');
goBackButton.id = 'clearScore';
goBackButton.innerHTML = 'Clear Highscores';
goBackButton.style.background = 'grey';


function endAttempt() {
    mainAreaEl.textContent = 'Highscores';
    mainAreaEl.appendChild(goBackButton);
    // document.body.appendChild(clearScoreBtn);


}



beginEl.addEventListener('click', countdown);

// beginEl.addEventListener('click', function() {
//     timerEl.textContent = 'Time: ' + timeLeft;
// });
