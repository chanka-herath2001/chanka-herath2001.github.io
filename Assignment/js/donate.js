let txtName = document.getElementById("fname");
let button = document.getElementById("donate");
let donate = document.getElementById("donateform");
const theForm = document.getElementById("form");

const txtOutput = document.getElementById("output");

button.addEventListener("click",donation);
function donation(){
    if(theForm.checkValidity()){
    let txtAmount = document.getElementById("amount");
    let amount = txtAmount.value;
    let name = txtName.value;
    event.preventDefault(event);
    txtOutput.innerText=`Thank you ${name} for donating LKR${amount}`;
    }
}
