// TODO: write query selectors and add event listeners to the calculator's buttons
const keyNumbers = document.querySelectorAll(".num");

for (const value of keyNumbers){
    value.addEventListener('click', function (){
        firstNumber+= value.innerText;
        console.log(value.innerText)
    });
} 


const keyOperators = document.querySelectorAll(".operator");

for (const element of keyOperators){
    element.addEventListener('click', function (){
        console.log("it works")
    });
} 



// const keyMinus = document.querySelector("#minus");
// const keyMultiply = document.querySelector("#multiply");
// const keyDivide = document.querySelector("#divide");
const keyEqual = document.querySelector("#equalSign")
const screens = document.querySelector("#screen")

let firstNumber = '';
let operation = '';
let secondNumber = '';
let screen = "";

// grab the Num from that target.



// Calculates the result of the current expression if it is valid, then displays the result on the screen
function calcResult() {
    // TODO
}

// Handles when an operation button is pressed (+, -, /, *)

// const operators = "keyDivide, keyPlus, keyMinus, keyMultiply"; 
// function operationPressed(op) {
//     // TODO
//     let sum = ""
// ;    if (operator === "+"){
//         sum = firstNumber + secondNumber;
//     }
//     if (operator === "-"){
//         sum = firstNumber - secondNumber;
//     }
//     if (operator === "/"){
//         sum = firstNumber / secondNumber;
//     }
//     if (operator === "x"){
//         sum = firstNumber * secondNumber;
//     }
// }

// Handles when a number button is pressed

    // TODO
//     key1.addEventListener("click", function (){
//         console.log("you clicked one")
// })

// Clears the screen
const reset = document.getElementById("#C");
function clearScreen() {
    // TODO
    reset.addEventListener("click", function(){
});
}

// Updates the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
    // TODO
}

