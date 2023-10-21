const questions = [
  {
    question: "What is the pH value of the human body?",
    answer: [
      { text: "9.2 to 9.8", correct: false },
      { text: "7.0 to 7.8", correct: true },
      { text: "6.1 to 6.3", correct: false },
      { text: "5.4 to 5.6", correct: false },
    ]
  },
  {
    question: "Elections to panchayats in state are regulated by",
    answer: [
      { text: "Gram panchayat", correct: false },
      { text: "Nagar Nigam", correct: false },
      { text: "Election Commission of India", correct: false },
      { text: "State Election Commission", correct: true },
    ]
  },
  {
    question: "Which was the 1st non Test playing country to beat India in an international match?",
    answer: [
      { text: "Canada", correct: false },
      { text: "Sri-lanka", correct: true },
      { text: "Zimbawawe", correct: false },
      { text: "East Africa", correct: false },
    ]
  },

  {
    question: "The Dr. Babasaheb Ambedkar Marathwada University is at which of the following places?",
    answer: [
      { text: "Aurangabad", correct: true },
      { text: "Nanded", correct: false },
      { text: "Pune", correct: false },
      { text: "Mumbai", correct: false },
    ]
  },
  {
    question: "Which City is known for 'Electronic City of India'?",
    answer: [
      { text: "Mumbai", correct: false },
      { text: "Pune", correct: false },
      { text: "Banglore", correct: true },
      { text: "Hydrabad", correct: false },
    ]
  },


   

]
const questionselemet = document.getElementById("question")
const answerbuttons = document.getElementById("answer-btn")
const nextbutton = document.getElementById("nextbtn")
let currentQuestionIndex =0;
let score = 0;


function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextbutton.innerHTML ="Next"
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionselemet.innerHTML = questionNumber + ". " + currentQuestion.question

    currentQuestion.answer.forEach(answer =>  {
        const button = document.createElement("button");
        button.innerHTML =answer .text
        button.classList.add("btn")
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer)
    });

}
 
function resetState(){
    console.log("pratik")
    nextbutton.style.display ="none";
    console.log("mayuri")
    while (answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }

}
function selectAnswer (e){
    const selectedbtn =e.target;
    const isCorrect = selectedbtn.dataset.correct ==="true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextbutton.style.display ="block"

    
}
function showScore(){
  resetState();
  questionselemet.innerHTML =`You score ${score} out of ${questions.length}`
  nextbutton.innerHTML="play again"
  nextbutton.style.display="block"
}
function handleNextButton(){
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length){
    showQuestion()
  }else{
    showScore() 
  }

}

nextbutton.addEventListener("click", () =>{
    if(currentQuestionIndex <questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();




