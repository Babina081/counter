var counter = 0;
var increase = document.getElementById('incrementBtn');
var decrease = document.getElementById('decrementBtn');
var reset = document.getElementById('reset');
var counterValue = document.getElementById('counterValue');

function increaseCounter() {
  counter++;
  counterValue.innerHTML = counter;
}
function decreaseCounter() {
  counter--;
  counterValue.innerHTML = counter;
}
function resetCounter() {
  counter = 0;
  counterValue.innerHTML = counter;
}
