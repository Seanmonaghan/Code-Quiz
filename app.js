// Elements that change
let startButton = document.getElementById("startButton");
let timeLeft = document.getElementById("timeRemaining");
let score = document.getElementById("playerScore");
let highScore = document.getElementById("highScore");
let testQuestion = document.getElementById("testQuestion");
let possibleAnswer = document.getElementById("possibleAnswers");
let initials = document.getElementById("initials");



// Local storage elements
let savedHighScore = localStorage.getItem("savedHighScore");
highScore.textContent = savedHighScore;
let savedInitials = localStorage.getItem("savedInitials");
initials.textContent = savedInitials;

let testQuestions = [{
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

]

// Basic Game

// testQuestion.innerText = "What is the equivalent of a python list in Javascript?";


    // Generates and iterates through the questions and answers from testQuestion array
    // displaying them as text for the question and list items for the answers.

function startGame() {
   
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

        if (testQuestionClicked != testQuestions[i].answer) {
            time = (time - 5);
            testQuestionClicked.style.color = "red";
        } else if (testQuestionClicked === testQuestion[i].answer) {
            i++
        }
    }
}

startButton.addEventListener('click', startGame);



localStorage.setItem("savedInitials", "???");
localStorage.setItem("savedHighScore", "???");

// init