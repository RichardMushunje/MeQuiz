<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f0e5cf; /* Light Beige */
        }

        #greeting {
            color: #333; /* Dark Gray */
        }

        .quiz-container {
            background-color: #fef9f6; /* Light Peach */
            border-radius: 8px;
            padding: 20px;
            width: 400px;
            margin: 0 auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        #question {
            color: #4CAF50; /* Green */
        }

        .choices {
            display: flex;
            flex-direction: column;
        }

        .choice {
            margin: 5px;
            padding: 10px;
            background-color: #3498db; /* Blue */
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .choice:hover {
            background-color: #2980b9; /* Darker Blue */
        }

        #score {
            color: #e74c3c; /* Red */
        }

        #username,
        #age,
        #feedback,
        #start-button {
            margin: 10px;
        }
    </style>
</head>
<body>

    <h1 id="greeting">Welcome to the Quiz Game!</h1>

    <div id="user-inputs">
        <label for="username">Enter your username: </label>
        <input type="text" id="username">

        <label for="age">Enter your age: </label>
        <input type="number" id="age">

        <label for="feedback">Share your feedback: </label>
        <textarea id="feedback" rows="4"></textarea>

        <button id="start-button">Start Quiz</button>
    </div>

    <div id="quiz-container" style="display: none;">
        <h2 id="question"></h2>
        <div id="choices"></div>
        <p id="score"></p>
    </div>

    <script>
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
        let username = "";
        let age = 0;
        let feedback = "";

        const greetingElement = document.getElementById("greeting");
        const userInputContainer = document.getElementById("user-inputs");
        const usernameInput = document.getElementById("username");
        const ageInput = document.getElementById("age");
        const feedbackInput = document.getElementById("feedback");
        const startButton = document.getElementById("start-button");
        const quizContainer = document.getElementById("quiz-container");
        const questionElement = document.getElementById("question");
        const choicesElement = document.getElementById("choices");
        const scoreElement = document.getElementById("score");

        startButton.addEventListener("click", startQuiz);

        function startQuiz() {
            username = usernameInput.value;
            age = parseInt(ageInput.value);
            feedback = feedbackInput.value;

            if (username.trim() === "" || isNaN(age) || age <= 0) {
                alert("Please enter a valid username and age.");
                return;
            }

            greetingElement.textContent = `Hello, ${username}! Let's start the quiz!`;
            userInputContainer.style.display = "none";
            quizContainer.style.display = "block";
            showQuestion();
        }

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
            let resultMessage = "";
            if (age < 18) {
                resultMessage = "Good effort, young one!";
            } else {
                resultMessage = "Well done, wise soul!";
            }
            questionElement.textContent = "Quiz Complete!";
            choicesElement.innerHTML = "";
            scoreElement.textContent = `${resultMessage} Your Score, ${username}: ${score} / ${questions.length}`;

            // Display feedback
            if (feedback.trim() !== "") {
                scoreElement.innerHTML += `<p>Your Feedback: ${feedback}</p>`;
            }
        }
    </script>

</body>
</html>
