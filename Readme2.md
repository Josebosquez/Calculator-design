Wiring up the calculator
In this assignment, we'll take the calculator that we built in the last assignment with HTML / CSS and add Javascript to make it actually work!

Solution GIF
https://i.imgur.com/YpdPMem.mp4

<!-- Steps
Starting with the HTML / CSS you wrote, create an main.js file to hold your Javascript
Import your main.js into your index.html using a script tag
Wire up the calculator!
Expected functionality -->
The calculator can display at most two numbers and one operation on the screen at any time i.e.: 2+3
If the equal button is pressed, the calculator will calculate the result of the expression and display on the screen
If the expression is incomplete (i.e.: no operation has been entered), nothing should happen
If an operation is pressed but the calculator already has two numbers and an operation on the screen i.e.: 2+3, the current expression will be calculated before setting the new operation
If an operation is pressed before any numbers are entered, nothing should happen
If the clear button is pressed, the screen is cleared completely
The dot button can be used to create decimal numbers
One possible strategy
There are numerous approaches you can take to this problem! Feel free to find your own path, or if you're looking for inspiration, check out the functions laid out below.

// One approach is to store our two numbers and one operation as strings so that 
// we can easily add characters as the user presses buttons
let firstNumber = ''
let operation = '';
let secondNumber = '';

// Calculates the result of the current expression if it is valid, then displays the result on the screen
function calcResult() {
  // TODO
}

// Handles when an operation button is pressed (+, -, /, *)
function operationPressed(op) {
  // TODO
}

// Handles when a number button is pressed
function numberPressed(number) {
  // TODO
}

// Clears the screen
function clearScreen() {
  // TODO
}

// Updates the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  // TODO
}

// TODO: write query selectors and add event listeners to the calculator's buttons