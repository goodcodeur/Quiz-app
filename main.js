const questions = [{
              question: "Which language runs in a web browser?",
              choices: ["Java", "C", "Python", "Javascript"],
              correctAnswer: 3
       },
       {
              question: "What does CSS stand for?",
              choices: ["Center Style Sheets", "Cascading Style Sheets", "Cascading Style shop", "Cars Suv SailBoard"],
              correctAnswer: 1
       },
       {
              question: "What does HTML stand for?",
              choices: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperlink Machine Language", "Helicopters Terminals Motorboats lamborghini's"],
              correctAnswer: 0
       },
       {
              question: "What year was JavaScript launched?",
              choices: ["1996", "1994", "1995", "none of the above"],
              correctAnswer: 2
       }
];

const btnNext = document.getElementById("nextBtn");
const blockResult = document.querySelector(".block-result");
const blockQuestion = document.querySelector(".block-question");
const result = document.querySelector(".result");

let currentQuestion = 0;
let correctAnswers = 0;
let quizOver = false;

window.addEventListener("DOMContentLoaded", () => {
       displayCurrentQuestion();

       btnNext.addEventListener("click", () => {
              if (!quizOver) {
                     let checked = document.querySelector("input[type=radio]:checked");

                     if (checked === null) {
                            alert("Please select a answer");
                     } else if (parseInt(checked.value) === questions[currentQuestion].correctAnswer) {
                            correctAnswers++
                     }

                     currentQuestion++

                     if (currentQuestion < questions.length) {
                            displayCurrentQuestion();
                     } else {
                            showResult();
                            quizOver = true;
                     }
              } else {
                     quizOver = false;
                     resetGame();
                     displayCurrentQuestion();
                     hideQuestion();
              }
       })
})

function displayCurrentQuestion() {
       const question = questions[currentQuestion].question;
       const numChoice = questions[currentQuestion].choices.length;
       const inputQuestion = document.getElementById("displayQuestion");
       const choiceList = document.querySelector(".choice-list");

       //set the current Question
       inputQuestion.innerText = question;

       // remove all <li> into the list
       choiceList.innerHTML = "";

       let choice;
       for (let i = 0; i < numChoice; i++) {
              choice = questions[currentQuestion].choices[i];
              const li = document.createElement("li");
              li.innerHTML = `<li><input type="radio" value="${i}" name="dymRadio"/>${choice}</li>`;
              choiceList.appendChild(li);
       }
}

function resetGame() {
       currentQuestion = 0;
       correctAnswers = 0;
}

function showResult() {
       blockQuestion.classList.add("hide");
       blockResult.classList.add("show");
       btnNext.textContent = "Reload"
       result.textContent = `You answered  ${correctAnswers}/${questions.length} questions correctly`;
}

function hideQuestion() {
       blockQuestion.classList.remove("hide");
       blockResult.classList.remove("show");
       btnNext.textContent = "Submit"
}

function animateEmojis() {
       function randomEmote() {
              const emojis = ["💯", "👍", "🤹‍♂️", "🌟", "❤️", "😍", "🤑"]

              const item = emojis[Math.floor(Math.random() * emojis.length)];
              const emoji = document.createElement("div");
              emoji.style.left = `${Math.random() * 100}vw`;
              emoji.style.animationDuration = `${Math.random() *2 + 3}s`;
              emoji.className = "emoji"
              emoji.textContent = item;
              document.body.appendChild(emoji);
       }

       setInterval(randomEmote, 300)
}

animateEmojis();