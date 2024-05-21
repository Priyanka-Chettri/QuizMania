//get the user name and show it in the second page
const userName=document.getElementById("userName")
userName.innerText=localStorage.getItem("name")

//get the category in the second page
const category=localStorage.getItem("category")
console.log(category);


/*--------- Getting the data from the local storage----------------*/
const ele=localStorage.getItem("data");
const parsedObject = JSON.parse(ele);
console.log(parsedObject);
console.log(parsedObject.results[0])


//getting all the needed elements;
const questionNo=document.getElementById("count");
const question=document.getElementById("question");
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");


//Now setting the values in the page
let i=0;

questionNo.innerText=(i+1).toString();
question.innerText=parsedObject.results[0].question
option1.innerText=parsedObject.results[0].incorrect_answers[0];
option2.innerText=parsedObject.results[0].incorrect_answers[1];
option3.innerText=parsedObject.results[0].incorrect_answers[2];
option4.innerText=parsedObject.results[0].correct_answer;

i++;

//to navigate to the score page
const nextButton=document.getElementById("next")
const answered= document.getElementById("number");
let num=0;
answered.innerText=0;

let selected=null;

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


nextButton.addEventListener("click",(e)=>{
    selected=null;
    clickedAns.style.backgroundColor="white"
    clickedAns.style.color="black"
    if(i<10){
        questionNo.innerText=(i+1).toString();
        // Generate a random number between 0 and 2
        const randomNumber = getRandomNumberInRange(0, 2);
        console.log(randomNumber);
        if(randomNumber==0){
        question.innerText=parsedObject.results[i].question
        option1.innerText=parsedObject.results[i].incorrect_answers[0];
        option2.innerText=parsedObject.results[i].incorrect_answers[1];
        option3.innerText=parsedObject.results[i].incorrect_answers[2];
        option4.innerText=parsedObject.results[i].correct_answer;
        }
        if(randomNumber==1){
            question.innerText=parsedObject.results[i].question
            option1.innerText=parsedObject.results[i].correct_answer;
            option2.innerText=parsedObject.results[i].incorrect_answers[1];
            option3.innerText=parsedObject.results[i].incorrect_answers[2];
            option4.innerText=parsedObject.results[i].incorrect_answers[0];
            }
        if(randomNumber==2){
            question.innerText=parsedObject.results[i].question
            option1.innerText=parsedObject.results[i].incorrect_answers[1];
            option2.innerText=parsedObject.results[i].correct_answer
            option3.innerText=parsedObject.results[i].incorrect_answers[2];
            option4.innerText=parsedObject.results[i].incorrect_answers[0];
        }
        answered.innerText=num+1;
        num++;
        i++;
    }

    else {
        window.location.href = 'third_page.html';

    }
});


//to select the answer 
let ans=null;
let clickedAns;
let points=0;
let j=0;


const buttonContainer=document.getElementById("buttonContainer");
buttonContainer.addEventListener("click",(e)=>{
 if(e.target.tagName="DIV"){
    let divid=e.target.id;
    if((divid=="option1"|| divid=="option2" || divid=="option3" || divid=="option4") && selected==null){
    const divEle=document.getElementById(divid);
    selected=divEle;
    divEle.style.backgroundColor="#7AB2B2";
    divEle.style.color="white";
    ans=divEle.innerText;
    clickedAns=divEle;
    console.log(`Clicked answer is ${clickedAns}`)
    if(ans==parsedObject.results[j].correct_answer)
    {
        points+=10;
           
    }
    j++;
    console.log(`Point is ${points}`)
    console.log(`The answer is ${ans}`)
    localStorage.setItem("points", points);
    }

 }
})



