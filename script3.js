const goBackButton=document.getElementById("gobackbtn")
goBackButton.addEventListener("click",()=>{
    window.location.href="index.html"
})

const points=localStorage.getItem("points");
console.log(points);
const pointNo=document.getElementById("pointNo");
pointNo.innerText=points;