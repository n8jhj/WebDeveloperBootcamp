var p1Button = document.getElementById('p1');
var p2Button = document.querySelector('#p2');
var resetButton = document.getElementById('reset');
var p1Display = document.querySelector('#p1Score');
var p2Display = document.getElementById('p2Score');
var goalInput = document.getElementById('goalInput');
var goalNum = document.getElementById('goalNum');

var goal = 5;
var p1Score = 0;
var p2Score = 0;

var gameOver = false;

p1Button.addEventListener('click', function(){
  if(!gameOver) {
    p1Score++;
    p1Display.textContent = p1Score;
    console.log(p1Score, goal);
    if(p1Score === goal) {
      p1Display.style.color = 'green';
      gameOver = true;
    }
  }
});

p2Button.addEventListener('click', function(){
  if(!gameOver) {
    p2Score++;
    p2Display.textContent = p2Score;
    if(p2Score === goal) {
      p2Display.style.color = 'green';
      gameOver = true;
    }
  }
});

resetButton.addEventListener('click', function(){
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.style.color = 'black';
  p2Display.style.color = 'black';
});

goalInput.addEventListener('click', function(){
  goal = this.valueAsNumber;
  goalNum.textContent = this.value;
});
