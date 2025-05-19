const questions = [
    { question: "Яка була головна річка, на якій заснували Рим?", answers: ["Ніл", "Дніпро", "Тибр", "Дунай"], correct: 2 },
    { question: "Як називали воїнів, які бились у спеціальних аренах для розваг?", answers: ["Легіонери", "Гладіатори", "Кентаври", "Самураї"], correct: 1 },
    { question: "Яка була головна мова в Римській імперії?", answers: ["Латина", "Грецька", "Французька", "Іспанська"], correct: 0 },
    { question: "Як називали римські громадські площі для зустрічей та торгівлі?", answers: ["Форум", "Колізей", "Терми", "Храм"], correct: 0 },
    { question: "Хто був верховним богом у римській міфології?", answers: ["Посейдон", "Юпітер", "Аполлон", "Вулкан"], correct: 1 },
    { question: "Як називалася будівля, де проходили бої гладіаторів?", answers: ["Форум", "Колізей", "Терми", "Храм"], correct: 1 },
    { question: "Яка головна будівля, де жили римські імператори?", answers: ["Форум", "Палац", "Арена", "Храм"], correct: 1 },
    { question: "Як називали римських воїнів?", answers: ["Легіонери", "Гладіатори", "Самураї", "Вікінги"], correct: 0 },
    { question: "Яке місто було столицею Римської імперії?", answers: ["Рим", "Афіни", "Карфаген", "Александрія"], correct: 0 },
    { question: "Де римляни дивилися гладіаторські бої?", answers: ["Форум", "Колізей", "Театр", "Цирк"], correct: 1 },
    { question: "Хто зробив християнство офіційною релігією Римської імперії?", answers: ["Костянтин Великий", "Юлій Цезар", "Октавіан Август", "Нерон"], correct: 0 },
    { question: "На чому писали римляни?", answers: ["Кам'яні таблички", "Пергамент", "Папірус", "Глиняні таблички"], correct: 2 },
];

function generateQuiz() {
    let quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    questions.forEach((q, index) => {
        let questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.answers.forEach((answer, i) => {
            questionDiv.innerHTML += `<label><input type="radio" name="q${index}" value="${i}"> ${answer}</label><br>`;
        });
        quizContainer.appendChild(questionDiv);
    });
}

function calculateScore() {
    let score = 0;
    let correctAnswers = 0;
    let resultData = [];

    questions.forEach((q, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            correctAnswers++;
            resultData.push({ question: q.question, correct: true });
        } else {
            resultData.push({ question: q.question, correct: false, correctAnswer: q.answers[q.correct] });
        }
    });

    let grade = "";
    if (correctAnswers >= 10) {
        grade = "Відмінно! 🌟";
    } else if (correctAnswers >= 7) {
        grade = "Добре 👍";
    } else if (correctAnswers >= 5) {
        grade = "Задовільно 😐";
    } else {
        grade = "Спробуй ще раз! ❌";
    }

    localStorage.setItem("score", correctAnswers);
    localStorage.setItem("grade", grade);
    localStorage.setItem("results", JSON.stringify(resultData));

    window.location.href = "results.html"; // Перехід на сторінку з результатами
}

window.onload = generateQuiz;