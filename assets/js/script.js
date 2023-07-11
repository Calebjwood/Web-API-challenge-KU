var startButton = document.querySelector(".startButton")
var timeElement = document.querySelector(".timerCount")
var quizOpen = document.querySelector(".quizOpen")
var quizTitle = document.querySelector(".quizTitle")
var quizExplain = document.querySelector(".quizExplain")





var correctCounter = 0;
var incorrectCounter = 0;
var timeCounter;
var timer;
var chosenQuestion = ""
var questionAmount = 5;
var index;
var questions = [
    
    "questionOne",
    "questionTwo",
    "questionThree",
    "questionFour",
    "questionFive"
]





function startGame(){
    timeCounter = 60;
    startButton.disabled = true;
    // first question function
    StartQuestions()
    startTimer()
    console.log()
}


function startTimer(){
    timer = setInterval(function(){
        timeCounter--;
        timeElement.textContent = timeCounter;
    }
     , 1000);
}

function randomQuestion(){
    index = Math.floor(Math.random() * questionAmount)
    questionAmount--
    chosenQuestion = questions[index]
    questions.splice(index, 1)
}

function StartQuestions(){
randomQuestion()

}

function questionOne(){
quizOpen
}















startButton.addEventListener("click", startGame);

