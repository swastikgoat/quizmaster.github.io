const quizdb = [


{
    questions: "1.   In 1768, Captain James Cook set out to explore which ocean?",
a: "Pacific Ocean",
 
b: "Atlantic Ocean",

c: "Indian Ocean",

d: "Arctic Ocean",

ans: "ans1",
},
{

    questions: " 2.   What is actually electricity?",
a: "A flow of water",

b: "A flow of air",

c:"A flow of electrons",

d: "A flow of atoms",


ans: "ans3",
},
{
    questions: "3.   Which of the following is not an international organisation?",
a: "FIFA",

b: "NATO",

c: "ASEAN",

d: "FBI",

ans: "ans4",
},
{
    questions: "4. Which of the following disorders is the fear of being alone?",
a: "Agoraphobia",

b: "Aerophobia",

c: "Acrophobia",

d: "Arachnophobia",


ans: "ans1",
},
{
questions: "5.   Which of the following is a song by the German heavy metal band “Scorpions”?",
a: "Stairway to Heaven",

b: "Wind of Change",

c: "Don’t Stop Me Now",

d: "Hey Jude",


ans: "ans2",
},

];
const questions = document.querySelector('.questions');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let questioncnt = 0;
let score = 0;

const loadquestions = () =>{

    questions.innerHTML = quizdb[questioncnt].questions;

    option1.innerHTML = quizdb[questioncnt].a;
    option2.innerHTML = quizdb[questioncnt].b;
    option3.innerHTML = quizdb[questioncnt].c;
    option4.innerHTML = quizdb[questioncnt].d;
    

  

}
loadquestions();

const getcheckanswer = () =>{
    let answer;
    answers.forEach((curanselement ) => {

        if (curanselement.checked) {
            answer = curanselement.id;
            
        }
       
    });
return answer;
};
const deselectall = () =>{
    answers.forEach((curanselement ) => curanselement.checked = false)
    
}

submit.addEventListener('click' , () => {
    const checkanswer = getcheckanswer();
    console.log(checkanswer);
    if (checkanswer === quizdb[questioncnt].ans) {
        score ++;
    };
    questioncnt ++;
    deselectall();
    
    if(questioncnt < quizdb.length){
        loadquestions();
    }
    else{
        showscore.innerHTML = `

        <h3> you scored ${score}/${quizdb.length} </h3>
        <button class = "btn" onclick =location.reload() ">play again</button>

        `;
        showscore.classList.remove(scorearea);
    
    }
  
   
});

