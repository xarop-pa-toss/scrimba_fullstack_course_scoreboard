let homeScore = 0;
let guestScore = 0;
let homeScoreDisplay = document.getElementById('score-home');
let guestScoreDisplay = document.getElementById('score-guest');

function addScore(addNum, target) {
    if (target === 'H') {
        homeScore += addNum;
        homeScoreDisplay.textContent = homeScore;
    }
    
    if (target === 'G') {
        guestScore += addNum;
        guestScoreDisplay.textContent = guestScore;
    }
}