// Elements that change
let startButton = document.getElementById("startButton");
let timeLeft = document.getElementById("timeRemaining");
let score = document.getElementById("playerScore");
let highScore = document.getElementById("highScore");
let testQuestion = document.getElementById("testQuestion");
let possibleAnswer = document.getElementById("possibleAnswers");
let initials = document.getElementById("initials");
let helper = document.getElementById("helper");

var timerCount;
var timer;
var i = 0;
// var isCorrect = false;

// let selectedAnswer = document.body.addEventListener('click', function(e) {
//     console.log(e.target.textContent);
//     return e.target.textContent;

// });



// Local storage elements
let savedHighScore = localStorage.getItem("savedHighScore");
highScore.textContent = savedHighScore;

let savedInitials = localStorage.getItem("savedInitials");
initials.textContent = savedInitials;

let testQuestions = [{
        question: " The syntax of a blur method in a button object is ______________",
        answers: {
            first: "Blur( )",
            second: "Blur(contrast)",
            third: "Blur(value)",
            fourth: "Blur(depth)"
        },
        answer: "Blur( )"
    }, {
        question: "which of these are not fruits",
        answers: {
            first: "apple",
            second: "banana",
            third: "grape",
            fourth: "Javascript Arrays"
        },
        answer: "Javascript Arrays"
    }, {
        question: "which of these are not fruits",
        answers: {
            first: "apple",
            second: "banana",
            third: "grape",
            fourth: "Javascript Arrays"
        },
        answer: "fourth"
    }, {
        question: "which of these are not fruits",
        answers: {
            first: "apple",
            second: "banana",
            third: "grape",
            fourth: "Javascript Arrays"
        },
        answer: "fourth"
    }, {
        question: "which of these are not fruits",
        answers: {
            first: "apple",
            second: "banana",
            third: "grape",
            fourth: "Javascript Arrays"
        },
        answer: "fourth"
    }, {
        question: "which of these are not fruits",
        answers: {
            first: "apple",
            second: "banana",
            third: "grape",
            fourth: "Javascript Arrays"
        },
        answer: "fourth"
    }, {
        question: "which of these are not fruits",
        answers: {
            first: "apple",
            second: "banana",
            third: "grape",
            fourth: "Javascript Arrays"
        },
        answer: "fourth"
    }, {
        question: "which of these are not fruits",
        answers: {
            first: "apple",
            second: "banana",
            third: "grape",
            fourth: "Javascript Arrays"
        },
        answer: "fourth"
    }, {
        question: "which of these are not fruits",
        answers: {
            first: "apple",
            second: "banana",
            third: "grape",
            fourth: "Javascript Arrays"
        },
        answer: "fourth"
    }, {
        question: "which of these are not fruits",
        answers: {
            first: "apple",
            second: "banana",
            third: "grape",
            fourth: "Javascript Arrays"
        },
        answer: "fourth"
    },

];

function startTimer() {
    timerCount = 200;

    timer = setInterval(function () {
        timerCount--;
        timeLeft.textContent = timerCount;
        score.innerText = timerCount;


    }, 1000);
};

function checkWin() {
    document.addEventListener('click', function(e) {
        var selection = e.target.textContent;
        if (selection === testQuestions[i].answer) {
            console.log(selection);
            console.log("success");
            i++;
            helper.textContent = "Good job!!"

            possibleAnswer.innerHTML = ""
            
            renderGame();
        } else {
            console.log(selection);
            console.log("failure");
            timerCount = timerCount - 5;
            helper.textContent = "Oh sorry, wrong answer try again! -5 seconds!"   
        };
    });
};

function renderGame() {
    testQuestion.innerText = testQuestions[i].question;

    let firstAnswer = document.createElement("li");
    let secondAnswer = document.createElement("li");
    let thirdAnswer = document.createElement("li");
    let fourthAnswer = document.createElement("li");

    firstAnswer.className = "btn btn-secondary col-sm-12";
    secondAnswer.className = "btn btn-secondary col-sm-12";
    thirdAnswer.className = "btn btn-secondary col-sm-12";
    fourthAnswer.className = "btn btn-secondary col-sm-12";

    firstAnswer.textContent = testQuestions[i].answers.first;
    secondAnswer.textContent = testQuestions[i].answers.second;
    thirdAnswer.textContent = testQuestions[i].answers.third;
    fourthAnswer.textContent = testQuestions[i].answers.fourth;

    possibleAnswer.appendChild(firstAnswer);
    possibleAnswer.appendChild(secondAnswer);
    possibleAnswer.appendChild(thirdAnswer);
    possibleAnswer.appendChild(fourthAnswer);

    checkWin();

    };


function startGame() {
    startButton.disabled = true;
    renderGame();
    startTimer();
};

startButton.addEventListener('click', startGame);


localStorage.setItem("savedInitials", "???");
localStorage.setItem("savedHighScore", "???");