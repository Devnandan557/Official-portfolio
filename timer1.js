const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountDown, 1000);

function updateCountDown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time = time < 0 ? 0 : time; 
    // minutes = minutes < 10 ? minutes + '0' : minutes;
    // seconds = seconds < 10 ? '0' + seconds : seconds;
    time--;
}
// updateCountDown();