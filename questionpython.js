const questions =[
    {
        question:" Who developed Python Programming Language?",
        answers:[
            {text: "Wick van Rossum",correct:false},
            {text: "Rasmus Lerdorf",correct:false},
            {text: "Guido van Rossum",correct:true},
            {text: "Niene Stom",correct:false},


        ]
    },
    {

        question:"Which type of Programming does Python support?",
        answers:[
            {text: "object-oriented programming",correct:false},
            {text: "structured programming",correct:false},
            {text: "functional programming",correct:false},
            {text: "all of the mentioned",correct:true},


        ]

    },
    {
        question:"Which of the following is the correct extension of the Python file?",
        answers:[
            {text: ".python",correct:false},
            {text: ".py",correct:true},
            {text: ".p",correct:false},
            {text: ".ph",correct:false},


        ]
    },
    {

        question:"Which of the following is used to define a block of code in Python language?",
        answers:[
            {text: "Indentation",correct:true},
            {text: "Key",correct:false},
            {text: "Bracket",correct:false},
            {text: "All of the above",correct:false},


        ]

    },
    {

        question:"Which keyword is used for function in Python language?",
        answers:[
            {text: "Function",correct:false},
            {text: "def",correct:true},
            {text: "Fun",correct:false},
            {text: "Define",correct:false},


        ]

    },
    {

        question:"Which of the following character is used to give single-line comments in Python?",
        answers:[
            {text: "#",correct:true},
            {text: "//",correct:false},
            {text: "<>",correct:false},
            {text: "All of the above",correct:false},


        ]

    },
    {

        question:"Which of the following is not a core data type in Python programming?",
        answers:[
            {text: "Tuples",correct:false},
            {text: "Lists",correct:false},
            {text: "Class",correct:true},
            {text: "Dictionary",correct:false},


        ]

    },
    {

        question:"What arithmetic operators cannot be used with strings in Python?",
        answers:[
            {text: "*",correct:true},
            {text: "+",correct:false},
            {text: "-",correct:false},
            {text: "All of the above",correct:false},


        ]

    },
    {

        question:"Which of the following statements is used to create an empty set in Python?",
        answers:[
            {text: "()",correct:true},
            {text: "[]",correct:false},
            {text: "{}",correct:false},
            {text: "set()",correct:false},


        ]

    },
    
    {
        question:"Which one of the following is the use of function in python?",
        answers:[
            {text: "Functions don’t provide better modularity for your application",correct:false},
            {text: "you can’t also create your own functions",correct:true},
            {text: "Functions are reusable pieces of programs",correct:false},
            {text: "All of the above",correct:false},


        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const questionNumberElement = document.getElementById("question-number");

let currentQuestionIndex = 0;
let score = 0;
let timer;
let globalTimer;
let timeLeft = 10; 
let startTime; 


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startTime = Date.now(); 
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    
    questionNumberElement.innerHTML = `${questionNo}/${questions.length}`;
    
    questionElement.innerHTML = currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    startTimer();
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    clearInterval(timer);
    timeLeft = 10; 
    timerElement.innerHTML = timeLeft;
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
    clearInterval(timer); 
}


function showScore() {
    resetState();
    
   
    let timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
    let percentage = (score / questions.length) * 100;
    let grade = getGrade(percentage); 
    
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!<br>Percentage: ${percentage.toFixed(2)}%<br>Grade: ${grade}<br>Time Taken: ${timeTaken} seconds`;

   
    if (percentage >= 50) {
        questionElement.innerHTML += `<br>Congratulations! You passed the test.`;
        nextButton.innerHTML = "Back";
        nextButton.onclick = function () {
            window.location.href = "dash.html"; 
        };
    } else {
        questionElement.innerHTML += `<br>Sorry You failed.`;
        nextButton.innerHTML = "Back";
        nextButton.onclick = function () {
            window.location.href = "dash.html"; 
        };
    }
    timerElement.style.display = "none";
    nextButton.style.display = "block";
}


function getGrade(percentage) {
    if (percentage >= 90) {
        return "A";
    } else if (percentage >= 80) {
        return "B";
    } else if (percentage >= 70) {
        return "C";
    } else if (percentage >= 60) {
        return "D";
    } else if (percentage >= 50) {
        return "E";
    } else {
        return "F";
    }
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        timerElement.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleNextButton(); 
        }
    }, 1000);
}


nextButton.addEventListener("click", handleNextButton);
startQuiz(); 