const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('right-answers');

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.innerText = 'Restart'; // Change to "Restart" after the first play
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    quizScore = 0;
    scoreElement.innerText = quizScore;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct === 'true');
    });

    if (correct) {
        quizScore++;
        scoreElement.innerText = quizScore;
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.classList.remove('hide');
        nextButton.classList.add('hide');
        questionElement.innerText = "Quiz Completed! Want to play again?";
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
   {
       question: 'Which one of these is a JavaScript framework?',
        answers: [
            { text: 'Angular', correct: true },
            { text: 'Laravel', correct: false },
            { text: 'Flask', correct: false },
            { text: 'Spring Boot', correct: false },
        ],
    },
    {
        question: 'Who is the current Chief Minister of Andhra Pradesh?',
        answers: [
            { text: 'Y. S. Jagan Mohan Reddy', correct: false },
            { text: 'N. Chandrababu Naidu', correct: true},
            { text: 'K. Rosaiah', correct: false },
            { text: 'Narendra Modi', correct: false },
        ],
    },
    {
        question: 'Who is the current Prime Minister of India?',
        answers: [
            { text: 'Narendra Modi', correct: true },
            { text: 'Ram Nath Kovind', correct: false },
        ],
    },
    {
        question: 'In which year was the movie "Bahubali" released?',
        answers: [
            { text: '2015', correct: true },
            { text: '2016', correct: false },
            { text: '2017', correct: false },
            { text: '2014', correct: false },
        ],
    },


    {
        question: "Who is the current President of India?",
        answers: [
            { text: "Droupadi Murmu", correct: true },
            { text: "Ram Nath Kovind", correct: false },
            { text: "Pratibha Patil", correct: false },
            { text: "Narendra Modi", correct: false },
        ],
    },
    {
        question: "Which city will host the 2024 Summer Olympics?",
        answers: [
            { text: "Tokyo", correct: false },
            { text: "Paris", correct: true },
            { text: "Los Angeles", correct: false },
            { text: "Rome", correct: false },
        ],
    },
    {
        question: "Which Indian state launched the ‘Mission Schools of Excellence’ initiative?",
        answers: [
            { text: "Gujarat", correct: true },
            { text: "Rajasthan", correct: false },
            { text: "Maharashtra", correct: false },
            { text: "Tamil Nadu", correct: false },
        ],
    },
    {
        question: "Who is the Chairman of ISRO in 2024?",
        answers: [
            { text: "S. Somanath", correct: true },
            { text: "K. Sivan", correct: false },
            { text: "A. S. Kiran Kumar", correct: false },
            { text: "Vikram Sarabhai", correct: false },
        ],
    },
    {
        question: "What is the name of the lunar mission launched by ISRO in 2023?",
        answers: [
            { text: "Chandrayaan-3", correct: true },
            { text: "Chandrayaan-2", correct: false },
            { text: "Mangalyaan", correct: false },
            { text: "Gaganyaan", correct: false },
        ],
    },
    {
        question: "Which country won the ICC Cricket World Cup 2023?",
        answers: [
            { text: "India", correct: true },
            { text: "Australia", correct: false },
            { text: "England", correct: false },
            { text: "New Zealand", correct: false },
        ],
    },
    {
        question: "Who is the current CEO of Twitter (X)?",
        answers: [
            { text: "Elon Musk", correct: false },
            { text: "Linda Yaccarino", correct: true },
            { text: "Jack Dorsey", correct: false },
            { text: "Parag Agrawal", correct: false },
        ],
    },
    {
        question: "Which country hosted the G20 Summit in 2023?",
        answers: [
            { text: "India", correct: true },
            { text: "USA", correct: false },
            { text: "China", correct: false },
            { text: "Brazil", correct: false },
        ],
    },
    {
        question: "What is the name of the 5G rollout initiative in India?",
        answers: [
            { text: "5G Bharat", correct: true },
            { text: "Digital India 5G", correct: false },
            { text: "Bharat Net", correct: false },
            { text: "India Connect", correct: false },
        ],
    },
    {
        question: "Who is the Chief Minister of Andhra Pradesh in 2024?",
        answers: [
            { text: "Y. S. Jagan Mohan Reddy", correct: true },
            { text: "N. Chandrababu Naidu", correct: false },
            { text: "K. Rosaiah", correct: false },
            { text: "Narendra Modi", correct: false },
        ],
    },
    {
        question: "What is India's projected GDP growth rate for 2024 according to the IMF?",
        answers: [
            { text: "6.3%", correct: true },
            { text: "5.8%", correct: false },
            { text: "7.1%", correct: false },
            { text: "6.8%", correct: false },
        ],
    },
    {
        question: "Who won the Nobel Prize in Physics 2023?",
        answers: [
            { text: "Pierre Agostini, Ferenc Krausz, Anne L'Huillier", correct: true },
            { text: "Syukuro Manabe", correct: false },
            { text: "Giorgio Parisi", correct: false },
            { text: "Klaus Hasselmann", correct: false },
        ],
    },
    {
        question: "Which country is set to join BRICS in 2024?",
        answers: [
            { text: "Saudi Arabia", correct: true },
            { text: "Pakistan", correct: false },
            { text: "Bangladesh", correct: false },
            { text: "Sri Lanka", correct: false },
        ],
    },
    {
        question: "What is the new name for India’s UIDAI mAadhaar app?",
        answers: [
            { text: "MyAadhaar", correct: true },
            { text: "Aadhaar Card Pro", correct: false },
            { text: "Aadhaar Mobile", correct: false },
            { text: "India ID", correct: false },
        ],
    },
    {
        question: "Which Indian city is ranked first in the Swachh Bharat Mission rankings of 2023?",
        answers: [
            { text: "Indore", correct: true },
            { text: "Surat", correct: false },
            { text: "Visakhapatnam", correct: false },
            { text: "Mumbai", correct: false },
        ],
    },
    {
        question: "Who is the Union Finance Minister of India?",
        answers: [
            { text: "Nirmala Sitharaman", correct: true },
            { text: "Smriti Irani", correct: false },
            { text: "Piyush Goyal", correct: false },
            { text: "Amit Shah", correct: false },
        ],
    },
    {
        question: "Who is the current Chief Justice of India?",
        answers: [
            { text: "D. Y. Chandrachud", correct: true },
            { text: "N. V. Ramana", correct: false },
            { text: "Ranjan Gogoi", correct: false },
            { text: "Sharad Arvind Bobde", correct: false },
        ],
    },
    {
        question: "Which country launched the first 6G satellite in 2023?",
        answers: [
            { text: "China", correct: true },
            { text: "USA", correct: false },
            { text: "India", correct: false },
            { text: "Russia", correct: false },
        ],
    },
    {
        question: "Who won the Ballon d'Or award in 2023?",
        answers: [
            { text: "Lionel Messi", correct: true },
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Erling Haaland", correct: false },
            { text: "Kylian Mbappé", correct: false },
        ],
    },
    {
        question: "Which Indian state introduced the 'Mukhyamantri Ladli Behna Yojana'?",
        answers: [
            { text: "Madhya Pradesh", correct: true },
            { text: "Uttar Pradesh", correct: false },
            { text: "Bihar", correct: false },
            { text: "Rajasthan", correct: false },
        ],
    },
    {
        question: "Which Indian city recently became a UNESCO World Heritage Site in 2023?",
        answers: [
            { text: "Gwalior-Orchha", correct: true },
            { text: "Jaipur", correct: false },
            { text: "Hyderabad", correct: false },
            { text: "Agra", correct: false },
        ],
    },
    {
        question: "Which country will host the FIFA World Cup in 2026?",
        answers: [
            { text: "USA, Canada, Mexico", correct: true },
            { text: "Qatar", correct: false },
            { text: "Brazil", correct: false },
            { text: "France", correct: false },
        ],
    },
    {
        question: "Which Indian state was declared the 'Best Performer' in the Startup India Ranking 2023?",
        answers: [
            { text: "Gujarat", correct: true },
            { text: "Karnataka", correct: false },
            { text: "Maharashtra", correct: false },
            { text: "Tamil Nadu", correct: false },
        ],
    },
    {
        question: "Who is the Secretary-General of the United Nations?",
        answers: [
            { text: "António Guterres", correct: true },
            { text: "Ban Ki-moon", correct: false },
            { text: "Kofi Annan", correct: false },
            { text: "Tedros Adhanom", correct: false },
        ],
    },
    {
        question: "What is the name of the recent Indian initiative for a Digital Personal Data Protection Bill?",
        answers: [
            { text: "Digital Personal Data Protection Act", correct: true },
            { text: "Data Privacy Act", correct: false },
            { text: "Right to Privacy Bill", correct: false },
            { text: "Cybersecurity Act", correct: false },
        ],
    },
    {
        question: "Which Indian cricketer became the fastest to reach 13,000 ODI runs in 2023?",
        answers: [
            { text: "Virat Kohli", correct: true },
            { text: "Sachin Tendulkar", correct: false },
            { text: "Rohit Sharma", correct: false },
            { text: "MS Dhoni", correct: false },
        ],
    },
    {
        question: "Which country launched the Artemis II mission to the Moon?",
        answers: [
            { text: "USA", correct: true },
            { text: "Russia", correct: false },
            { text: "China", correct: false },
            { text: "India", correct: false },
        ],
    },
    {
        question: "Who is the current Prime Minister of the United Kingdom?",
        answers: [
            { text: "Rishi Sunak", correct: true },
            { text: "Boris Johnson", correct: false },
            { text: "Theresa May", correct: false },
            { text: "Liz Truss", correct: false },
        ],
    },
    {
        question: "Which Indian startup achieved unicorn status in 2024 with its focus on AI and machine learning?",
        answers: [
            { text: "Fractal Analytics", correct: true },
            { text: "Zerodha", correct: false },
            { text: "CRED", correct: false },
            { text: "Byju's", correct: false },
        ],
    },
    {
        question: "What is the name of India's first solar observatory mission?",
        answers: [
            { text: "Aditya-L1", correct: true },
            { text: "AstroSat", correct: false },
            { text: "SolarProbe", correct: false },
            { text: "SuryaSat", correct: false },
        ],
    },
    {
        question: "Which country recently passed a controversial 'Online Safety Act' in 2023?",
        answers: [
            { text: "United Kingdom", correct: true },
            { text: "United States", correct: false },
            { text: "Australia", correct: false },
            { text: "India", correct: false },
        ],
    },
    {
        question: "What is the name of India's first indigenous aircraft carrier, commissioned in 2022?",
        answers: [
            { text: "INS Vikrant", correct: true },
            { text: "INS Arihant", correct: false },
            { text: "INS Virat", correct: false },
            { text: "INS Shakti", correct: false },
        ],
    },
    {
        question: "Which Indian company recently acquired Air India?",
        answers: [
            { text: "Tata Group", correct: true },
            { text: "Adani Group", correct: false },
            { text: "Reliance Industries", correct: false },
            { text: "SpiceJet", correct: false },
        ],
    },
    {
        question: "Which global organization launched the 'Net Zero by 2050' initiative?",
        answers: [
            { text: "International Energy Agency (IEA)", correct: true },
            { text: "United Nations", correct: false },
            { text: "World Economic Forum", correct: false },
            { text: "World Bank", correct: false },
        ],
    },


];
