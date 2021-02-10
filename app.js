// Elements that change
let startButton = document.getElementById("startButton");
let timeLeft = document.getElementById("timeRemaining");
let score = document.getElementById("playerScore");
let highScore = document.getElementById("highScore");
let testQuestion = document.getElementById("testQuestion");
let possibleAnswer = document.getElementById("possibleAnswers");
let initials = document.getElementById("initials");

var timerCount; 
var timer;




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
        answer: "first"
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
    timerCount = 100;
    timer = setInterval(function() {
        timerCount--;
        timeLeft.textContent = timerCount;
        

    }, 1000);
}

function renderGame() {
    for (i = 0; i < testQuestions.length;) {
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

        i++;

    };
};



function startGame() {

    startButton.disabled = true;
    renderGame();
    startTimer();

};

startButton.addEventListener('click', startGame);


localStorage.setItem("savedInitials", "???");
localStorage.setItem("savedHighScore", "???");

