let check = document.querySelector(".check");
let input = document.querySelector(".input");
let text = document.querySelector(".text");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let text2 = document.querySelector(".text2");
let testNumber = document.querySelector(".test-number");
let again = document.querySelector(".again");
let score = document.querySelector(".score");
let scoreNumber = document.querySelector(".score-number");

let random = Math.floor(Math.random() * 101);
console.log(random);

check.addEventListener("click", () => {
  const guess = parseInt(input.value, 10);
  click.play();

  if (isNaN(guess) || guess < 1 || guess > 100) {
    text.textContent = "Enter a number between 1 and 100!";
  } else {
    if (guess === random) {
      text.textContent = "Congratulations, You Guess It Right! 👏";
      win.play();
    //   lose.pause();
      tekrar();
    } else if (guess < random) {
      text.textContent = " 👆Increase the number👆";
      first.textContent = guess;
      text2.style.display = "block";
      testNumber.textContent++;
    } else {
      text.textContent = "👇Reduce the number👇";
      second.textContent = guess;
      text2.style.display = "block";
      testNumber.textContent++;
    }
    if (scoreNumber.textContent > 1) {
      scoreNumber.textContent--;
    } else if (scoreNumber.textContent == 1) {
      text.textContent = "😞GAME OVER😞";
      tekrar();
      lose.play();
    }
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    check.click();
  }
});
window.addEventListener("load", () => {
  input.focus();
});

again.addEventListener("click", function () {
  random = Math.floor(Math.random() * 101);
  console.log(random);
  window.location.reload();
  click.play();
});

let tekrar = () => {
  document.querySelector("h1").textContent = "";
  document.querySelector("h2").textContent = "";
  input.style.display = "none";
  check.style.display = "none";
  score.style.display = "none";
  again.style.display = "block";
  text2.style.display = "none";
};
