document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const submitButton = document.getElementById("submit-button");
    const resultsContainer = document.getElementById("results");
    const correctAnswersSpan = document.getElementById("correct-answers");

    const correctAnswers = {
        q1: "a",
        q2: "a",
        q3: "a"
    };

    let score = 0;

    submitButton.addEventListener("click", function () {
        let userAnswers = {};
        let formData = new FormData(quizForm);

        for (let pair of formData.entries()) {
            userAnswers[pair[0]] = pair[1];
        }

        for (let question in userAnswers) {
            if (userAnswers[question] === correctAnswers[question]) {
                score++;
            }
        }

        resultsContainer.style.display = "block";
        correctAnswersSpan.textContent = score;
    });
});