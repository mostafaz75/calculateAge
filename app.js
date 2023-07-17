// age project 
// create & Design by Mostafa
let useerInput= document.getElementById("userinput")
useerInput.max= new Date().toISOString().split("T")[0];
let result =  document.getElementById("result")
const resultButton = document.getElementById('button')
function calculateAge(){
    let birthDate= new Date(useerInput.value)
    let dayBirth= birthDate.getDate();
    let monthBirth=birthDate.getMonth()+1;
    let yearBirth=birthDate.getFullYear();

    let today= new Date();
    let todayDate= today.getDate();
    let todayMonth= today.getMonth()+1;
    let todayYear= today.getFullYear();

    let years=Math.abs(todayYear-yearBirth)
    let month=Math.abs(todayMonth-monthBirth)
    let day=Math.abs(todayDate-dayBirth)

    
    result.innerHTML=  `<p>Your  Age  Is <span  class='numone'>${years}</span> Year And  <span  class='numtwo'> ${month} </span>Months And <span  class='numthree'> ${day}</span>  Day Old </p>`
    result.style.border= "solid var(--glow-color)"
    result.style.borderRadius="0.45em"
    result.style.padding=" 0.35em 1em"
    result.style.color="var(--glow-color)"
    result.style.boxShadow="inset 0px 0px 0.5em 0px var(--glow-color)",
    "0px 0px 0.5em 0px var(--glow-color)"
   
}
useerInput.addEventListener('keydown',(e)=>{
  e.preventDefault()
})
useerInput.addEventListener('click',()=>{
  useerInput.showPicker()
})


function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date = new Date()) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}
useerInput.value= formatDate()

// resultButton.click()
