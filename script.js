const questions = [
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5"],
        correctAnswer: "4",
    },
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris"],
        correctAnswer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Mars", "Jupiter"],
        correctAnswer: "Mars",
    },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");

function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    choicesElement.innerHTML = "";
    q.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.className = "choice";
        button.addEventListener("click", checkAnswer);
        choicesElement.appendChild(button);
    });
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Quiz Complete!";
    choicesElement.innerHTML = "";
    scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
}

showQuestion();
