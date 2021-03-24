// TODO: write query selectors and add event listeners to the calculator's buttons
const keyOperators = document.querySelectorAll(".operator");
const keyNumbers = document.querySelectorAll(".num");
const clear = document.querySelector("#clear");
const screenBox = document.querySelector("#screen");
const equalSign = document.querySelector("#equalSign");
// grab the Num from that target.

let firstNumber = '';
let operation = '';
let secondNumber = '';
let screen = 0;


// Calculates the result of the current expression if it is valid, then displays the result on the screen
sum = 
function calcResult() {
    // TODO
    sum = firstNumber; operation; secondNumber
}
// const equals = document.querySelector(".equalSign");
//     equals.addEventListener("click", calcResult )
//     console.log("your great")

// Handles when an operation button is pressed (+, -, /, *)

let operationVariable = "";
function operationPressed(op) {
}

// Handles when a number button is pressed

    // TODO
    for (const element of keyOperators){
        element.addEventListener("click", function (){
            console.log(element.innerText)
        });
    } 

    for (const value of keyNumbers){
        value.addEventListener('click', function (){
            firstNumber += value.innerText;
            screen += firstNumber;
            console.log(value.innerText)
        });
    } 

    equalSign.addEventListener("click", function (){
        screen = firstNumber; operation; secondNumber;
    });

    


// Clears the screen
function clearScreen() {
    // TODO
    clear.addEventListener("click", function(){
        firstNumber = "";
        secondNumber = "";
        operation = "";
        screen = 0;
    });
}



// Updates the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
    // TODO
}

