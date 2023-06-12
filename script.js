/*
When start button is clicked, clear page except for highscore and time and display question.

When correct answer is chosen, move on to next question.
When wrong answer is chosen, subtract ten seconds from the timer and move on to next question
When timer runs out, display final score and text box to enter initials and save.
Go back button to restart quiz and clear scores button to wipe scores


*/

var timerEl = document.getElementById('countdown');
var mainAreaEl = document.getElementById('main-area');
var beginEl = document.getElementById('start-button');

var timeLeft = 150;
function setTimerText () {
    timerEl.textContent = timeLeft;
}


function countdown() {
    setTimerText();
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textcontent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            endAttempt();
        }
    }, 1000);
}

function endAttempt() {
    mainAreaEl.textContent = cancelAnimationFrame();

}

// beginEl.addEventListener('click', function() {
//     timerEl.textContent = 'Time: ' + timeLeft;
// });

beginEl.addEventListener('click', countdown());
