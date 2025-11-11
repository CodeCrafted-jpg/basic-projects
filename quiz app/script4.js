document.addEventListener("DOMContentLoaded",()=>{

   const startBtn=document.getElementById("start-btn");
   const nextbtn=document.getElementById("next-btn");
   const restartBtn=document.getElementById("restart-btn");
   const questionContainer=document.getElementById("question-container");
   const questionText=document.getElementById("question-text");
   const ChoicesList=document.getElementById("choice-list");
   const resultContainer=document.getElementById("result-container");
   const ScoreDispaly=document.getElementById("score");
 
   
    const questions=[
        {
question:"What is the capital of Afghanistan?",
choices:["Tirana", "Luanda", "Yerevan", "Kabul"],
answer:"Kabul",
        },
        {
    question:"What is the capital of Australia?",
    choices:["Bishkek","Canberra","Kathmandu","Milan"],
    answer:"Canberra",
        },
   {
    question:"What is the capital of Sri Lanka?",
    choices:["Dushanbe","Colombo","Dhaka","Monaco"],
    answer:"Colombo",
   },

   {
     question:"What is the capital of Oman?",
     choices:["Muscat","Manchester","Los Angeles","Doha"],
     answer:"Muscat",
   },
   {
    question:"What is the capital of New Zealand?",
    choices:["London","Manchester","Wellington","Jerusalem"],
    answer:"Wellington",
   },
   {
    question:"What is the capital of Laos?",
    choices:["Vientiane","Bishkek","Doha","Jerusalem"],
    answer:"Vientiane",
   },
   {
    question:"What is the capital of Argentina?",
    choices:["Paris","Buenos Aires","Rio","Dushanbe"],
    answer:"Buenos Aires",
   },
   {
    question:"What is the capital of Italy?",
    choices:["Dublin","Rome","Tokiyo","Nairobi"],
    answer:"Rome",
   },
   {
    question:"What is the capital of Russia?",
    choices:["Apia","Moscow","Dublin","Victoria"],
    answer:"Moscow",
   },
   {
    question:"What is the capital of Switzerland?",
    choices:["Singapore","Moscow","Paramaribo","Bern"],
    answer:"Bern",
   },
   
    
   

];
let currentQuestionIndex=0;
let score=0;


startBtn.addEventListener("click", startQuiz)
nextbtn.addEventListener("click",()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showResult();
    }
})
function startQuiz(){
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();

}
function showQuestion(){
    nextbtn.classList.add("hidden");
    questionText.textContent=questions[currentQuestionIndex].question;
    ChoicesList.innerHTML="";
    questions[currentQuestionIndex].choices.forEach(choice=> {
        const li = document.createElement('li');
        li.textContent= choice;
        li.addEventListener("click", () => selectAnswer(choice))
        ChoicesList.appendChild(li);
    });
}
 function selectAnswer(choice){
  const correctAnswer=questions[currentQuestionIndex].answer;
  if(choice === correctAnswer){
    score++;
    
 
  }
 nextbtn.classList.remove("hidden");

 
  
 }
 function showResult(){
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    ScoreDispaly.textContent=`${score} out of ${questions.length}`;
 }

 restartBtn.addEventListener("click", ()=>{
   
    
    currentQuestionIndex=0;
    score=0;
   
    startQuiz();
 });

 

});