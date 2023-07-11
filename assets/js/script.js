var startButton = document.querySelector(".startButton")





var correctCounter = 0;
var incorrectCounter = 0;
var timeCounter;
var timer;





function startGame(){
    timeCounter = 60;
    startButton.disable = true;
    // first question function
    startTimer()
}














startButton.addEventListener("click", startGame);

