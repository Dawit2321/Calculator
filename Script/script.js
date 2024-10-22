

let currentValue = null;
let currentOperator = null;
let shouldResetInput = false;


//Input Number List
const input= document.querySelector(".output");
const numbers = document.querySelectorAll("#zero,#one,#two,#three,#four,#five,#six,#seven,#eight,#nine");


numbers.forEach(currentBtn => {
    currentBtn.addEventListener("click", () =>{
        if(shouldResetInput){
              input.innerHTML = currentBtn.innerText;
              shouldResetInput = false;
        }
        else{
            displayNum(currentBtn.innerText);
        }
    })
});

function displayNum(num){
    if(input.innerHTML === "0"){
        input.innerHTML = "";
    }
    input.innerHTML += num;
}

//Input none number list 

document.getElementById("percent").addEventListener("click" ,percentCal);
document.getElementById("clear").addEventListener("click" ,cleanAllCal);
document.getElementById("dot").addEventListener("click" ,dotCal);
document.getElementById("square").addEventListener("click" ,squareCal);
document.getElementById("squareRoot").addEventListener("click" ,squareRootCal);
document.getElementById("oneDiv").addEventListener("click" ,oneDiveCal);
document.getElementById("delete").addEventListener("click" ,deleteCal);
document.getElementById("seconValue").addEventListener("click" ,cleanSecondNumCal);
document.getElementById("plusMinus").addEventListener("click" ,plusMinusCal);



//Operators List 

document.getElementById("add").addEventListener("click" ,() => setOperator("+"));
document.getElementById("sub").addEventListener("click" ,() => setOperator("-"));
document.getElementById("mul").addEventListener("click" ,() => setOperator("x"));
document.getElementById("div").addEventListener("click" ,() => setOperator("÷"));
document.getElementById("equal").addEventListener("click" , displayEqual);

//Event Listener List for the Input Numbers

function setOperator(operator){
    if (currentOperator === null) {
        currentValue = parseFloat(input.innerHTML);
        currentOperator = operator;
        input.innerHTML += ` ${operator} `;
        shouldResetInput = false;
    }

}

function displayEqual(){
   if(currentOperator){
    let secondNumber = parseFloat(input.innerHTML.split(currentOperator)[1]);
    if(input.innerHTML.length < 2) return;
    let result;
    switch(currentOperator){
     case "+" : 
     result = addCal(currentValue,secondNumber);
     break;
 
     case "-" : 
     result = subCal(currentValue,secondNumber);
     break;
 
     case "x" : 
     result = mulCal(currentValue,secondNumber);
     break;
 
     case "÷" : 
     result = divCal(currentValue,secondNumber);
     break;
    }

    input.innerHTML = result;
    currentValue = result; 
    currentOperator = null;
    shouldResetInput = true;
   }


}

// Arithmetic Operators Funtion
function addCal(value1,value2){
    return value1 + value2;
}

function subCal(value1,value2){
    return value1 - value2;
}

function mulCal(value1,value2){
    return value1 * value2;
}

function divCal(value1,value2){
    return value1 / value2;
}

function squareRootCal(){
    let value = parseFloat(input.innerHTML);
    input.innerHTML = Math.sqrt(value);
}

function squareCal(){
    let value = parseFloat(input.innerHTML);
    input.innerHTML = value * value;
}

function oneDiveCal(){
    let value = parseFloat(input.innerHTML);
    input.innerHTML = 1/value;
}

function percentCal(){
   let value = parseFloat(input.innerHTML);
   input.innerHTML = value * 0.01;
}

function cleanAllCal(){
    input.innerHTML = "0";

}

function cleanSecondNumCal(){

   if (currentOperator) { // Check if an operator exists
    let parts = input.innerHTML.split(currentOperator);
    if (parts.length > 1) { // Ensure there's a second number
      input.innerHTML = parts[0] + currentOperator + " "; // Keep the first part and operator
    }
  }
}


function dotCal(){
    if(shouldResetInput){
        input.innerHTML = currentBtn.innerText;
        shouldResetInput = true;
  }
  else{
    input.innerHTML += ".";
  }
    
}


function deleteCal(){
    let currentInput = input.innerHTML;

    if (currentInput.length > 0) {
      input.innerHTML = currentInput.slice(0, -1); 
    } else {
      input.innerHTML = "0";
    }
}

function plusMinusCal(){
    let currentDis = parseFloat(input.innerHTML);
    input.innerHTML = -currentDis; // Directly negate the value
}


