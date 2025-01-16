const display = document.getElementById('display');
const titleText = document.querySelector('.title');

// Function to append a value to the display
function appendValue(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
 
}

// Function to delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    titleText.innerText = "Invalid Expression";
    setTimeout(function() {
      titleText.innerText = "Basic Calculator";
    },1000);
    clearDisplay();
  }
}
