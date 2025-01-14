// script.js
let display = document.getElementById("display");
let currentExpression = "";

function appendValue(value) {
  // Append the clicked value to the expression
  currentExpression += value;
  display.value = currentExpression; // Update the display to show the complete equation
}

function operate(operator) {
  if (currentExpression === "" && operator === "-") {
    // Allow negative numbers
    currentExpression = "-";
    display.value = currentExpression;
    return;
  }
  const lastChar = currentExpression.slice(-1);
  if (["+", "-", "*", "/"].includes(lastChar)) {
    // Prevent multiple consecutive operators
    currentExpression = currentExpression.slice(0, -1) + operator;
  } else {
    currentExpression += operator;
  }
  display.value = currentExpression; // Show the updated equation
}

function calculate() {
  try {
    // Use `eval` to calculate the result
    const result = eval(currentExpression);
    display.value = result.toString(); // Display the result
    currentExpression = result.toString(); // Allow continued calculations
  } catch {
    display.value = "Error"; // Handle invalid equations
    currentExpression = ""; // Reset expression
  }
}

function clearDisplay() {
  currentExpression = "";
  display.value = ""; // Clear the input field
}
