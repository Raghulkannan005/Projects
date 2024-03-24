const questions = [
    {
        question: "What is the capital city of India?",
        answers: [
            { text: "New Delhi", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Who was the first Prime Minister of India?",
        answers: [
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Mahatma Gandhi", correct: false },
            { text: "Indira Gandhi", correct: false },
            { text: "Rajiv Gandhi", correct: false }
        ]
    },
    {
        question: "Which river is considered the holiest in Hinduism and is often referred to as the 'Ganga'?",
        answers: [
            { text: "Yamuna", correct: false },
            { text: "Brahmaputra", correct: false },
            { text: "Ganges", correct: true },
            { text: "Godavari", correct: false }
        ]
    },
    {
        question: "What is the national animal of India?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Tiger", correct: true },
            { text: "Elephant", correct: false },
            { text: "Leopard", correct: false }
        ]
    },
    {
        question: "Who wrote the Indian national anthem, 'Jana Gana Mana'?",
        answers: [
            { text: "Rabindranath Tagore", correct: true },
            { text: "Mahatma Gandhi", correct: false },
            { text: "Subhas Chandra Bose", correct: false },
            { text: "Jawaharlal Nehru", correct: false }
        ]
    },
    {
        question: "What is the highest civilian award in India?",
        answers: [
            { text: "Padma Vibhushan", correct: false },
            { text: "Bharat Ratna", correct: true },
            { text: "Padma Bhushan", correct: false },
            { text: "Padma Shri", correct: false }
        ]
    },
    {
        question: "Which famous monument in India is also known as the 'Symbol of Love'?",
        answers: [
            { text: "Red Fort", correct: false },
            { text: "Qutub Minar", correct: false },
            { text: "Hawa Mahal", correct: false },
            { text: "Taj Mahal", correct: true }
        ]
    },
    {
        question: "Which Indian state is known as the 'Land of Five Rivers'?",
        answers: [
            { text: "Punjab", correct: true },
            { text: "Rajasthan", correct: false },
            { text: "Maharashtra", correct: false },
            { text: "Gujarat", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Father of the Indian Constitution'?",
        answers: [
            { text: "Mahatma Gandhi", correct: false },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Dr. B. R. Ambedkar", correct: true },
            { text: "Sardar Vallabhbhai Patel", correct: false }
        ]
    },
    {
        question: "Which Indian festival is also known as the Festival of Lights?",
        answers: [
            { text: "Holi", correct: false },
            { text: "Diwali", correct: true },
            { text: "Eid", correct: false },
            { text: "Navratri", correct: false }
        ]
    }
];

const questionContainer = document.getElementById('question-container');
const answerButtonsContainer = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let shuffledQuestions, currentQuestionIndex;

function startGame() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    clearAnswerButtons();
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answerButtonsContainer.appendChild(button);
    });
}

function clearAnswerButtons() {
    while (answerButtonsContainer.firstChild) {
        answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
}

function selectAnswer(correct) {
    if (correct) {
        console.log('Correct!');
    } else {
        console.log('Incorrect!');
    }
    nextButton.classList.remove('hide');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        console.log('Quiz completed!');
    }
}

startGame();