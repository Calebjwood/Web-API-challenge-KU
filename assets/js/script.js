var startButton = document.querySelector(".startButton")
var timeElement = document.querySelector(".timerCount")
var quizOpen = document.querySelector(".quizOpen")
var quizExtra = document.querySelector(".quizExtra")
var quizTitle = document.querySelector(".quizTitle")
var quizExplain = document.querySelector(".quizExplain")




var score = 5;
var correctCounter = 0;
var incorrectCounter = 0;
var timeCounter;
var timer;
var chosenQuestion = ""
var questionAmount = 5;
var index;
// var questions = [
    
//     questionOne,
//     questionOne,
//     questionOne,
//     questionOne,
//     questionOne
// ]





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
var para = document.createElement("p");
var node = document.createTextNode("This is the first question");
para.appendChild(node);


var answers = document.createElement("ul")



var answerOne = document.createElement("li")
node = document.createTextNode("answer one")
answerOne.appendChild(node)
answers.appendChild(answerOne)

var answerTwo = document.createElement("li")
node = document.createTextNode('answer two')
answerTwo.appendChild(node)
answers.appendChild(answerTwo)

var answerThree = document.createElement("li")
node = document.createTextNode('answer three')
answerThree.appendChild(node)
answers.appendChild(answerThree)

var answerFour = document.createElement("li")
node = document.createTextNode('answer four')
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
    var para = document.createElement("p");
    var node = document.createTextNode("This is the second question");
    para.appendChild(node);
    
    
    var answers = document.createElement("ul")
    
    
    
    var answerOne = document.createElement("li")
    node = document.createTextNode("answer one")
    answerOne.appendChild(node)
    answers.appendChild(answerOne)
    
    var answerTwo = document.createElement("li")
    node = document.createTextNode('answer two')
    answerTwo.appendChild(node)
    answers.appendChild(answerTwo)
    
    var answerThree = document.createElement("li")
    node = document.createTextNode('answer three')
    answerThree.appendChild(node)
    answers.appendChild(answerThree)
    
    var answerFour = document.createElement("li")
    node = document.createTextNode('answer four')
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
        questionThree()
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
        questionThree()
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

function questionThree(){
        displayShow()
        quizExtra.style.display = "none";
        var questionOneSection = document.createElement("div")
        var para = document.createElement("p");
        var node = document.createTextNode("This is the third question");
        para.appendChild(node);
        
        
        var answers = document.createElement("ul")
        
        
        
        var answerOne = document.createElement("li")
        node = document.createTextNode("answer one")
        answerOne.appendChild(node)
        answers.appendChild(answerOne)
        
        var answerTwo = document.createElement("li")
        node = document.createTextNode('answer two')
        answerTwo.appendChild(node)
        answers.appendChild(answerTwo)
        
        var answerThree = document.createElement("li")
        node = document.createTextNode('answer three')
        answerThree.appendChild(node)
        answers.appendChild(answerThree)
        
        var answerFour = document.createElement("li")
        node = document.createTextNode('answer four')
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
            questionFour()
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
            questionFour()
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
function questionFour(){
    displayShow()
    quizExtra.style.display = "none";
    var questionOneSection = document.createElement("div")
    var para = document.createElement("p");
    var node = document.createTextNode("This is the fourth question");
    para.appendChild(node);
    
    
    var answers = document.createElement("ul")
    
    
    
    var answerOne = document.createElement("li")
    node = document.createTextNode("answer one")
    answerOne.appendChild(node)
    answers.appendChild(answerOne)
    
    var answerTwo = document.createElement("li")
    node = document.createTextNode('answer two')
    answerTwo.appendChild(node)
    answers.appendChild(answerTwo)
    
    var answerThree = document.createElement("li")
    node = document.createTextNode('answer three')
    answerThree.appendChild(node)
    answers.appendChild(answerThree)
    
    var answerFour = document.createElement("li")
    node = document.createTextNode('answer four')
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
    var para = document.createElement("p");
    var node = document.createTextNode("This is the fifth question");
    para.appendChild(node);
    
    
    var answers = document.createElement("ul")
    
    
    
    var answerOne = document.createElement("li")
    node = document.createTextNode("answer one")
    answerOne.appendChild(node)
    answers.appendChild(answerOne)
    
    var answerTwo = document.createElement("li")
    node = document.createTextNode('answer two')
    answerTwo.appendChild(node)
    answers.appendChild(answerTwo)
    
    var answerThree = document.createElement("li")
    node = document.createTextNode('answer three')
    answerThree.appendChild(node)
    answers.appendChild(answerThree)
    
    var answerFour = document.createElement("li")
    node = document.createTextNode('answer four')
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
        console.log("fin")
        
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
        console.log("fin")
        
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





function scoreIncorrect(){
score--
localStorage.setItem("score", score)
}

function displayNone(){
    quizOpen.style.display = "block";
}

function displayShow(){
    quizOpen.style.display = "show";
}















startButton.addEventListener("click", startGame);

