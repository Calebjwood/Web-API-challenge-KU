var startButton = document.querySelector(".startButton")
var timeElement = document.querySelector(".timerCount")
var quizOpen = document.querySelector(".quizOpen")
var quizExtra = document.querySelector(".quizExtra")
var quizTitle = document.querySelector(".quizTitle")
var quizExplain = document.querySelector(".quizExplain")
var highScoreButton = document.querySelector(".veiwHighScores")




var score = 5;
var correctCounter = 0;
var incorrectCounter = 0;
var timeCounter;
var timer;
var chosenQuestion = ""
var questionAmount = 5;
var index;
// var questions = []





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

        if(timeCounter === 0){
            clearInterval(setInterval)
            location.reload()
            }
        }
     , 1000);
}



function StartQuestions(){
// // quizOpen.style.display = "show"
//         function randomQuestion(){
//             index = Math.floor(Math.random() * questionAmount)
//             questionAmount--
//             chosenQuestion = questions[index]
//             questions.splice(index, 1)

//         //     if( questions.length > 0){
//         //         var index = questions.randsplice()
//         //     }
//         }
// randomQuestion(index)

questionOne()

        



}

function questionOne(){
displayShow()
quizExtra.style.display = "none";
var questionOneSection = document.createElement("div")
questionOneSection.classList.add("bg-primary-subtle")
questionOneSection.classList.add("fs-3")
questionOneSection.classList.add("row")
// questionOneSection.classList.add("")
var para = document.createElement("p");
var node = document.createTextNode("Inside which HTML element do we put the JavaScript?");
para.appendChild(node);


var answers = document.createElement("ul")



var answerOne = document.createElement("li")
node = document.createTextNode("<script>")
answerOne.appendChild(node)
answers.appendChild(answerOne)

var answerTwo = document.createElement("li")
node = document.createTextNode('<js>')
answerTwo.appendChild(node)
answers.appendChild(answerTwo)

var answerThree = document.createElement("li")
node = document.createTextNode('<scripting>')
answerThree.appendChild(node)
answers.appendChild(answerThree)

var answerFour = document.createElement("li")
node = document.createTextNode('<javascript>')
answerFour.appendChild(node)
answers.appendChild(answerFour)

function correct(){
answerOne.removeEventListener("click", correct)
answerTwo.removeEventListener("click", incorrect)
answerThree.removeEventListener("click", incorrect)
answerFour.removeEventListener("click", incorrect)
var result = document.createElement("h4")
var node = document.createTextNode("Correct")
result.appendChild(node)
console.log(node)
questionOneSection.appendChild(result)
var next = document.createElement("button")
next.innerHTML = "Next"
questionOneSection.appendChild(next)
next.addEventListener("click", function(){
    questionOneSection.style.display = 'none'
    questionTwo()
})
}

function incorrect(){
answerOne.removeEventListener("click", correct)
answerTwo.removeEventListener("click", incorrect)
answerThree.removeEventListener("click", incorrect)
answerFour.removeEventListener("click", incorrect)
var result = document.createElement("h4")
var node = document.createTextNode("incorrect")
result.appendChild(node)
questionOneSection.appendChild(result)
scoreIncorrect()
var next = document.createElement("button")
next.innerHTML = "Next"
questionOneSection.appendChild(next)
next.addEventListener("click", function(){
    questionOneSection.style.display = 'none'
    questionTwo()
})
} 




questionOneSection.appendChild(para)
questionOneSection.appendChild(answers)
quizOpen.appendChild(questionOneSection)

answerOne.addEventListener("click", correct)
answerTwo.addEventListener("click", incorrect)
answerThree.addEventListener("click", incorrect)
answerFour.addEventListener("click", incorrect)
}

function questionTwo(){
    displayShow()
    quizExtra.style.display = "none";
    var questionOneSection = document.createElement("div")
    questionOneSection.classList.add("bg-primary-subtle")
    questionOneSection.classList.add("fs-3")
    questionOneSection.classList.add("row")
    var para = document.createElement("p");
    var node = document.createTextNode("How do you write 'Hello World' in an alert box?");
    para.appendChild(node);
    
    
    var answers = document.createElement("ul")
    
    
    
    var answerOne = document.createElement("li")
    node = document.createTextNode('alertBox("Hello World");')
    answerOne.appendChild(node)
    answers.appendChild(answerOne)
    
    var answerTwo = document.createElement("li")
    node = document.createTextNode('msg("Hello World");')
    answerTwo.appendChild(node)
    answers.appendChild(answerTwo)
    
    var answerThree = document.createElement("li")
    node = document.createTextNode("alert('Hello World');")
    answerThree.appendChild(node)
    answers.appendChild(answerThree)
    
    var answerFour = document.createElement("li")
    node = document.createTextNode('msgBox("Hello World");')
    answerFour.appendChild(node)
    answers.appendChild(answerFour)
    
    function correct(){
    answerOne.removeEventListener("click", incorrect)
    answerTwo.removeEventListener("click", incorrect)
    answerThree.removeEventListener("click", correct)
    answerFour.removeEventListener("click", incorrect)
    var result = document.createElement("h4")
    var node = document.createTextNode("Correct")
    result.appendChild(node)
    console.log(node)
    questionOneSection.appendChild(result)
    var next = document.createElement("button")
    next.innerHTML = "Next"
    questionOneSection.appendChild(next)
    next.addEventListener("click", function(){
        questionOneSection.style.display = 'none'
        questionThree()
    })
    }
    
    function incorrect(){
    answerOne.removeEventListener("click", incorrect)
    answerTwo.removeEventListener("click", incorrect)
    answerThree.removeEventListener("click", correct)
    answerFour.removeEventListener("click", incorrect)
    var result = document.createElement("h4")
    var node = document.createTextNode("incorrect")
    result.appendChild(node)
    questionOneSection.appendChild(result)
    scoreIncorrect()
    var next = document.createElement("button")
    next.innerHTML = "Next"
    questionOneSection.appendChild(next)
    next.addEventListener("click", function(){
        questionOneSection.style.display = 'none'
        questionThree()
    })
    } 
    
    
    
    
    questionOneSection.appendChild(para)
    questionOneSection.appendChild(answers)
    quizOpen.appendChild(questionOneSection)
    
    answerOne.addEventListener("click", incorrect)
    answerTwo.addEventListener("click", incorrect)
    answerThree.addEventListener("click", correct)
    answerFour.addEventListener("click", incorrect)
}

function questionThree(){
        displayShow()
        quizExtra.style.display = "none";
        var questionOneSection = document.createElement("div")
        questionOneSection.classList.add("bg-primary-subtle")
        questionOneSection.classList.add("fs-3")
        questionOneSection.classList.add("row")
        var para = document.createElement("p");
        var node = document.createTextNode("How do you create a function in JavaScript?");
        para.appendChild(node);
        
        
        var answers = document.createElement("ul")
        
        
        
        var answerOne = document.createElement("li")
        node = document.createTextNode("function(myFunction)")
        answerOne.appendChild(node)
        answers.appendChild(answerOne)
        
        var answerTwo = document.createElement("li")
        node = document.createTextNode('function = myFunction()')
        answerTwo.appendChild(node)
        answers.appendChild(answerTwo)
        
        var answerThree = document.createElement("li")
        node = document.createTextNode('function:myFunction()')
        answerThree.appendChild(node)
        answers.appendChild(answerThree)
        
        var answerFour = document.createElement("li")
        node = document.createTextNode('function myFunction()')
        answerFour.appendChild(node)
        answers.appendChild(answerFour)
        
        function correct(){
        answerOne.removeEventListener("click", incorrect)
        answerTwo.removeEventListener("click", incorrect)
        answerThree.removeEventListener("click", correct)
        answerFour.removeEventListener("click", incorrect)
        var result = document.createElement("h4")
        var node = document.createTextNode("Correct")
        result.appendChild(node)
        console.log(node)
        questionOneSection.appendChild(result)
        var next = document.createElement("button")
        next.innerHTML = "Next"
        questionOneSection.appendChild(next)
        next.addEventListener("click", function(){
            questionOneSection.style.display = 'none'
            questionFour()
        })
        }
        
        function incorrect(){
        answerOne.removeEventListener("click", incorrect)
        answerTwo.removeEventListener("click", incorrect)
        answerThree.removeEventListener("click", correct)
        answerFour.removeEventListener("click", incorrect)
        var result = document.createElement("h4")
        var node = document.createTextNode("incorrect")
        result.appendChild(node)
        questionOneSection.appendChild(result)
        scoreIncorrect()
        var next = document.createElement("button")
        next.innerHTML = "Next"
        questionOneSection.appendChild(next)
        next.addEventListener("click", function(){
            questionOneSection.style.display = 'none'
            questionFour()
        })
        } 
        
        
        
        
        questionOneSection.appendChild(para)
        questionOneSection.appendChild(answers)
        quizOpen.appendChild(questionOneSection)
        
        answerOne.addEventListener("click", incorrect)
        answerTwo.addEventListener("click", incorrect)
        answerThree.addEventListener("click", incorrect)
        answerFour.addEventListener("click", correct)
}
function questionFour(){
    displayShow()
    quizExtra.style.display = "none";
    var questionOneSection = document.createElement("div")
    questionOneSection.classList.add("bg-primary-subtle")
    questionOneSection.classList.add("fs-3")
    questionOneSection.classList.add("row")
    var para = document.createElement("p");
    var node = document.createTextNode('How do you call a function named "myFunction"?');
    para.appendChild(node);
    
    
    var answers = document.createElement("ul")
    
    
    
    var answerOne = document.createElement("li")
    node = document.createTextNode("myFunction()")
    answerOne.appendChild(node)
    answers.appendChild(answerOne)
    
    var answerTwo = document.createElement("li")
    node = document.createTextNode('call function myFunction()')
    answerTwo.appendChild(node)
    answers.appendChild(answerTwo)
    
    var answerThree = document.createElement("li")
    node = document.createTextNode('call myFunction()')
    answerThree.appendChild(node)
    answers.appendChild(answerThree)
    
    var answerFour = document.createElement("li")
    node = document.createTextNode('myFunction = call')
    answerFour.appendChild(node)
    answers.appendChild(answerFour)
    
    function correct(){
    answerOne.removeEventListener("click", correct)
    answerTwo.removeEventListener("click", incorrect)
    answerThree.removeEventListener("click", incorrect)
    answerFour.removeEventListener("click", incorrect)
    var result = document.createElement("h4")
    var node = document.createTextNode("Correct")
    result.appendChild(node)
    console.log(node)
    questionOneSection.appendChild(result)
    var next = document.createElement("button")
    next.innerHTML = "Next"
    questionOneSection.appendChild(next)
    next.addEventListener("click", function(){
        questionOneSection.style.display = 'none'
        questionFive()
    })
    }
    
    function incorrect(){
    answerOne.removeEventListener("click", correct)
    answerTwo.removeEventListener("click", incorrect)
    answerThree.removeEventListener("click", incorrect)
    answerFour.removeEventListener("click", incorrect)
    var result = document.createElement("h4")
    var node = document.createTextNode("incorrect")
    result.appendChild(node)
    questionOneSection.appendChild(result)
    scoreIncorrect()
    var next = document.createElement("button")
    next.innerHTML = "Next"
    questionOneSection.appendChild(next)
    next.addEventListener("click", function(){
        questionOneSection.style.display = 'none'
        questionFive()
    })
    } 
    
    
    
    
    questionOneSection.appendChild(para)
    questionOneSection.appendChild(answers)
    quizOpen.appendChild(questionOneSection)
    
    answerOne.addEventListener("click", correct)
    answerTwo.addEventListener("click", incorrect)
    answerThree.addEventListener("click", incorrect)
    answerFour.addEventListener("click", incorrect)
}
function questionFive(){
    displayShow()
    quizExtra.style.display = "none";
    var questionOneSection = document.createElement("div")
    questionOneSection.classList.add("bg-primary-subtle")
    questionOneSection.classList.add("fs-3")
    questionOneSection.classList.add("row")
    var para = document.createElement("p");
    var node = document.createTextNode("How can you add a comment in a JavaScript?");
    para.appendChild(node);
    
    
    var answers = document.createElement("ul")
    
    
    
    var answerOne = document.createElement("li")
    node = document.createTextNode("<!--This is a comment-->")
    answerOne.appendChild(node)
    answers.appendChild(answerOne)
    
    var answerTwo = document.createElement("li")
    node = document.createTextNode('//This is a comment')
    answerTwo.appendChild(node)
    answers.appendChild(answerTwo)
    
    var answerThree = document.createElement("li")
    node = document.createTextNode("'This is a comment")
    answerThree.appendChild(node)
    answers.appendChild(answerThree)
    
    var answerFour = document.createElement("li")
    node = document.createTextNode('This is a comment')
    answerFour.appendChild(node)
    answers.appendChild(answerFour)
    
    function correct(){
    answerOne.removeEventListener("click", incorrect)
    answerTwo.removeEventListener("click", correct)
    answerThree.removeEventListener("click", incorrect)
    answerFour.removeEventListener("click", incorrect)
    var result = document.createElement("h4")
    var node = document.createTextNode("Correct")
    result.appendChild(node)
    console.log(node)
    questionOneSection.appendChild(result)
    var next = document.createElement("button")
    next.innerHTML = "Next"
    questionOneSection.appendChild(next)
    next.addEventListener("click", function(){
        questionOneSection.style.display = 'none'
        finishScore()
        
    })
    }
    
    function incorrect(){
    answerOne.removeEventListener("click", incorrect)
    answerTwo.removeEventListener("click", correct)
    answerThree.removeEventListener("click", incorrect)
    answerFour.removeEventListener("click", incorrect)
    var result = document.createElement("h4")
    var node = document.createTextNode("incorrect")
    result.appendChild(node)
    questionOneSection.appendChild(result)
    scoreIncorrect()
    var next = document.createElement("button")
    next.innerHTML = "Next"
    questionOneSection.appendChild(next)
    next.addEventListener("click", function(){
        
        questionOneSection.style.display = 'none'
        finishScore()
        
    })
    } 
    
    
    
    
    questionOneSection.appendChild(para)
    questionOneSection.appendChild(answers)
    quizOpen.appendChild(questionOneSection)
    
    answerOne.addEventListener("click", incorrect)
    answerTwo.addEventListener("click", correct)
    answerThree.addEventListener("click", incorrect)
    answerFour.addEventListener("click", incorrect)
}
function finishScore(){
 window.clearInterval(timer)
 
 var infoPage = document.createElement("form")
 infoPage.classList.add("fs-4")
 var yourScore = document.createTextNode("your score is " + score)
 infoPage.appendChild(yourScore)
 var userName = document.createElement("input")
 infoPage.appendChild(userName)
 userName.setAttribute("type", "text");
 userName.setAttribute("name", "userName");
 userName.setAttribute("placeholder", "Full Name");
 var submitEl = document.createElement("button")
 submitEl.innerHTML = "Submit Score"
 infoPage.appendChild(submitEl)


function submitResults(event){
    event.preventDefault()
    infoPage.style.display = "none"

    var highScoreList = []

    var highScores = {
        user: userName.value,
        userScore: score
    }

    highScoreList.push(highScores)
    highScoreList = highScoreList.concat(JSON.parse(localStorage.getItem("highScoreList") || "[]"))

    localStorage.setItem("highScoreList", JSON.stringify(highScoreList))
   
    highScoreScreen()

}


 quizOpen.appendChild(infoPage)
 submitEl.addEventListener("click", submitResults);
}

function highScoreScreen(){
    var highScoreScreen = document.createElement("div")
    // highScoreScreen.classList.add("")
    var highscoreTitle = document.createElement("h2")
    var node = document.createTextNode("High Scores")
    highscoreTitle.appendChild(node)
    highScoreScreen.appendChild(highscoreTitle)

    var userHighScores = JSON.parse(localStorage.getItem("highScoreList"))

    var userList = document.createElement("h4")
    for (var i = 0; i < userHighScores.length; i++){
    var node = document.createTextNode("  " + userHighScores[i].user + "  " + userHighScores[i].userScore + "  ")
    userList.appendChild(node)
    highScoreScreen.appendChild(userList)
    }
   
    

    var backButton = document.createElement("button")
    backButton.innerHTML = "Back"
    highScoreScreen.appendChild(backButton)
    backButton.addEventListener("click", function(){
        location.reload()
    })

    var clearHighScores = document.createElement("button")
    clearHighScores.innerHTML = "Clear Scores"
    highScoreScreen.appendChild(clearHighScores)
    clearHighScores.addEventListener("click", function(){
        localStorage.clear();
    })





quizOpen.appendChild(highScoreScreen)
}



function scoreIncorrect(){
score--
timeCounter = timeCounter - 10
}

function displayNone(){
    quizOpen.style.display = "block";
}

function displayShow(){
    quizOpen.style.display = "show";
}

function veiwScoreScreen(){
    quizExtra.style.display = "none";
    highScoreScreen() 
}













highScoreButton.addEventListener("click", veiwScoreScreen)

startButton.addEventListener("click", startGame);

