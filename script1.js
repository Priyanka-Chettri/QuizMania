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
            previousClickedButton.style.backgroundColor="#7AA2E3"
        }
        
        let button_id=e.target.id;
        console.log(button_id);
        const button_element=document.getElementById(button_id)
        //--------
        activeState=button_element;
        if(activeState==previousClickedButton) {
            button_element.style.backgroundColor='#7AA2E3'
            activeState=null;
        }
        else{
        button_element.style.backgroundColor='#97E7E1';
        previousClickedButton=button_element;
        }
        
        
    }

})

getStarted.addEventListener("click",(e)=>{
    const userName=document.getElementById("name")
    console.log(`active state is ${activeState}`)

    if(userName.value.trim()==null || activeState==null)
    {
        alert("Please enter the value and select the category")
        e.preventDefault();
    }
    else{
        localStorage.setItem('name',userName.value.trim())
        localStorage.setItem('category', activeState.id)
        console.log(localStorage.getItem('name'))
        console.log(localStorage.getItem('category'))
        window.location.href = 'second_page.html';


    }
})

