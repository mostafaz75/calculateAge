let useerInput= document.getElementById("userinput")
useerInput.max= new Date().toISOString().split("T")[0];
let result =  document.getElementById("result")

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

    
    result.innerHTML=  `your  age  is ${years} year and   ${month} months and  ${day}  day old `
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