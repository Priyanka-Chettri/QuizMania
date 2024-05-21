const getStarted=document.getElementById("get-started");
const button_container=document.getElementById("button-div")

let previousClickedButton=null;
let activeState=null;


//added event listener to the button container
button_container.addEventListener("click",(e)=>{
    console.log("button container clicked")
    if(e.target.tagName=="BUTTON")
    {
        if(previousClickedButton!==null){
            previousClickedButton.style.backgroundColor="#7AB2B2"
        }
        
        let button_id=e.target.id;
        console.log(button_id);
        const button_element=document.getElementById(button_id)
        //-------------------
        activeState=button_element;
        if(activeState==previousClickedButton) {
            button_element.style.backgroundColor='#7AB2B2'
            activeState=null;
        }
        else{
        button_element.style.backgroundColor='#97E7E1';
        previousClickedButton=button_element;
        } 
    }
})

getStarted.addEventListener("click",async(e)=>{
    let userName=document.getElementById("name")
    console.log(`The user name before entering the values is ${userName}`)
    console.log(`active state is ${activeState}`)

  
    if((userName.value=== null || userName.value.trim() === '') && activeState==null)
    {
        alert("Please enter the values")
        e.preventDefault();
    }
   
     
    else {
        localStorage.setItem('name',userName.value.trim())
        localStorage.setItem('category', activeState.id)
        console.log(localStorage.getItem('name'))
        console.log(localStorage.getItem('category'))
        await apiCall();
    }
})

//api call function
async function apiCall(){
  let category=localStorage.getItem("category");
//   console.log(category)
  let apiUrl;
  if(category=="history")
    apiUrl="https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple";
  else if(category=="books")
    apiUrl="https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple";
  else if(category=="gk")
    apiUrl="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
  else if(category=="geography")
    apiUrl="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
  else if(category=="Politics")
    apiUrl="https://opentdb.com/api.php?amount=10&category=24&difficulty=easy&type=multiple";
  else if(category=="arts")
    apiUrl="https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple";
  else if(category=="any")
    apiUrl="https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

  try {
    const parsedData = await helper(apiUrl);
} catch (error) {
    console.error('Error', error);
   
}
}

 function helper(link){
    const val= fetch(link).then(async (response)=>{
    parsed=await response.json();
    localStorage.setItem("data",JSON.stringify(parsed));
    console.log(parsed);
    // const ele=localStorage.getItem("data");
    // const parsedObject = JSON.parse(ele);
    // console.log(parsedObject)

    window.location.href = 'second_page.html';
})
}
















/*async function helper(link) {
    try {
        const response = await fetch(link);
        // console.log(response.json)
        if (!response.ok) {
            throw new Error('response was not ok');
        }
        const parsed = await response.json();
        console.log(parsed);
        // window.location.href = 'second_page.html';
        return parsed;
    } catch (error) {
        console.error('errror fetching', error);
        throw error;
    }
}*/