let firstNumber = [];
let operation = [];
let secondNumber = [];
let screen = 0;

// TODO: write query selectors and add event listeners to the calculator's buttons
const keyOperators = document.querySelectorAll(".operator");
const keyNumbers = document.querySelectorAll(".num");
const clear = document.querySelector("#clear");
const screenBox = document.querySelector("#screen");
const equalSign = document.querySelector("#equalSign");
const decimal = document.querySelector("#period")


// Calculates the result of the current expression if it is valid, then displays the result on the screen
sum = 
function calcResult() {
    // TODO
    if (operator.length !==0){
        
    }
}

// Handles when an operation button is pressed (+, -, /, *)
for (value of operator){
    operator.addEventListener("click", function{})
}


// Handles when a number button is pressed
    for (const element of keyOperators){
        element.addEventListener("click", function (){
        });
    } 

// create a function for numbers being Pressed
function numKeysPress (event){
    if (operator.length === 0){
        firstNumber.push(event.target.innerText)
    } else {
        firstNumber.push(event.target.innerText)
        // this isnt working. why?
    } updateScreen
}

//create a function for my equal sign being pressed.
    equalSign.addEventListener("click", calcResult);

// Clears the screen
function clearScreen() {
    // TODO
    clear.addEventListener("click", function(){
        firstNumber.splice(0);
        secondNumber.splice(0);
        operation.splice(0);
    });
}



// Updates the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
    // TODO
}

