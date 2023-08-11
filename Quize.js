const quizData=[
    {
        question: "How many times has India won the Cricket World Cup?",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        correct: "a",
    },
    {
        question: "Which Indian cricketer is also known as the “God of Cricket?",
        a: "MS Dhoni",
        b: "Yuvraj Singh",
        c: "Virat Kohli",
        d: "Sachin Tendulkar",
        correct: "d",
    },
    {
        question: "How many times has India won the Asia Cup?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c",
    },
    {
        question: "Who is the current Captain of the Indian National Men’s Cricket Team?",
        a: "Virat Kohli",
        b: "Rohit Sharama",
        c: "MS Dhoni",
        d: "Yuvraj Singh",
        correct: "b",
    },
    {
        question: "When was India won the first ICC cricket World Cup ?",
        a: "1974",
        b: "1886",
        c: "1996",
        d: "1883",
        correct: "d"
    },
];

const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')

const submitBtn=document.getElementById('submit')

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData= quizData[currentQuiz]
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl=> answerEl.checked= false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEls=>{
        if(answerEls.checked){
            answer=answerEls.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', ()=>{
    const answer=getSelected()
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=`
            <h2>You answered ${score}/${quizData.length} questions correctly<h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})