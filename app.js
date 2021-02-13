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

var liEl = document.getElementsByTagName("LI");
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
        question: "The syntax of a blur method in a button object is ______________",
        answers: {
            first: "Blur( )",
            second: "Blur(contrast)",
            third: "Blur(value)",
            fourth: "Blur(depth)"
        },
        answer: "Blur( )"
    }, {
        question: "A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript.",
        answers: {
            first: "JavaArray",
            second: "JavaClass",
            third: "JavaObject",
            fourth: "JavaPackage"
        },
        answer: "JavaClass"
    }, {
        question: "Which best explains getSelection()?",
        answers: {
            first: "Returns the VALUE of a selected OPTION.",
            second: "Returns document.URL of the window in focus.",
            third: "Returns the value of cursor-selected text.",
            fourth: "Returns the VALUE of a checked radio input."
        },
        answer: "Returns the value of cursor-selected text."
    }, {
        question: "Choose the client-side JavaScript object",
        answers: {
            first: "Database",
            second: "Cursor",
            third: "Client",
            fourth: "FileUpLoad"
        },
        answer: "FileUpLoad"
    }, {
        question: "What is mean by 'this' keyword in javascript?",
        answers: {
            first: "It refers current object",
            second: "It refers previous object",
            third: "It is variable which contains value",
            fourth: "None of the above"
        },
        answer: "It refers current object"
    }, {
        question: "The syntax of close method for document object is ______________",
        answers: {
            first: "Close(doC.",
            second: "Close(object)",
            third: "Close(val)",
            fourth: "Close()"
        },
        answer: "Close()"
    }, {
        question: "To open a dialog box each time an error occurs, which of the following is added to prefs.js?",
        answers: {
            first: "user_pref('javascript.classic.error_alerts', true);",
            second: "user_pref('javascript.classic.error_alerts ', false);",
            third: "user_pref('javascript.console.open_on_error ', true);",
            fourth: "user_pref('javascript.console.open_on_error ', false);"
        },
        answer: "user_pref('javascript.classic.error_alerts', true);"
    }, {
        question: "_______ class provides an interface for invoking JavaScript methods and examining JavaScript properties.",
        answers: {
            first: "ScriptObject",
            second: "JSObject",
            third: "JavaObject",
            fourth: "J-pop"
        },
        answer: "JSObject"
    }, {
        question: " To enable data tainting, the end user sets the _________ environment variable.",
        answers: {
            first: "ENABLE_TAINT",
            second: "MS_ENABLE_TAINT",
            third: "NS_ENABLE_TAINT",
            fourth: "ENABLE_TAINT_NS"
        },
        answer: "NS_ENABLE_TAINT"
    }, {
        question: "Which tag(s) can handle mouse events in Netscape",
        answers: {
            first: "<IMG>",
            second: "<A>",
            third: "<BR>",
            fourth: "None of the above"
        },
        answer: "<A>"
    },

];

function startTimer() {
    timerCount = 2000;

    timer = setInterval(function () {
        timerCount--;
        timeLeft.textContent = timerCount;
        score.innerText = timerCount;

        if (timerCount < 1) {
            clearInterval(timer);
            testQuestion.innerText = "Game Over - Time Out!"
            startButton.disabled = false;
        }

    }, 1000);
};

function gameWon() {
            console.log("success");
            i++;
            helper.textContent = "Good job!!"
            possibleAnswer.innerHTML = ""
            
            renderGame();
};

function gameLose() {
     // console.log(selection);
     console.log(testQuestions[i].answer);
     // console.log("failure");
     timerCount = timerCount - 5;
     helper.textContent = "Oh sorry, wrong answer try again! -5 seconds!"
};

function checkWin() {
    document.addEventListener('click', function(e) {
        e.stopPropagation();
        var selection = e.target.textContent;

        if (selection === testQuestions[i].answer) {
            
            gameWon();
            

        } else {
            gameLose();
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

    if (i < 9) {
        checkWin();
        
    } else {
        helper.innerHTML = "Game Over!";
        possibleAnswer.innerHTML = "";
        testQuestion.innerHTML = "Game Over!"
        clearInterval(timer);
        if (score.innerText > savedHighScore) {
            localStorage.setItem("savedHighScore", score.innerText);
        }
        
    };
    

    };


function startGame() {
    startButton.disabled = true;
    possibleAnswer.innerHTML = "";
    renderGame();
    startTimer();
};

startButton.addEventListener('click', startGame);


