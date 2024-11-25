let currentQuestion = 0;

function checkAnswer(correctAnswer, event) {
    let userAnswer = event.target.value.trim().toLowerCase();
    if (userAnswer === correctAnswer.toLowerCase()) {
        event.target.style.borderColor = 'green';
    } else {
        event.target.style.borderColor = 'red';
    }
}

function nextQuestion() {
    if (currentQuestion === 0) {
        document.getElementById("question-container").classList.add("hidden");
        document.getElementById("next-question").classList.remove("hidden");
        currentQuestion++;
    } else if (currentQuestion === 1) {
        document.getElementById("next-question").classList.add("hidden");
        document.getElementById("next-question-2").classList.remove("hidden");
        currentQuestion++;
    } else if (currentQuestion === 2) {
        document.getElementById("next-question-2").classList.add("hidden");
        document.getElementById("next-question-3").classList.remove("hidden");
        currentQuestion++;
    } else if (currentQuestion === 3) {
        document.getElementById("next-question-3").classList.add("hidden");
        document.getElementById("next-question-4").classList.remove("hidden");
        currentQuestion++;
    } else if (currentQuestion === 4) {
        document.getElementById("next-question-4").classList.add("hidden");
        document.getElementById("result-message").classList.remove("hidden");
        currentQuestion++;
    }
}
