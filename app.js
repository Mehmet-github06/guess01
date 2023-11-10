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

  if (isNaN(guess) || guess < 1 || guess > 100) {
    text.textContent = "Lütfen 1 ile 100 arasında bir sayı girin!";
  } else {
    if (guess === random) {
      text.textContent = "Tebrikler, doğru tahmin ettiniz! 👏";
      tekrar();
    } else if (guess < random) {
      text.textContent = " 👆 Sayınızı Arttırın 👆";
      first.textContent = guess;
      text2.style.display = "block";
      testNumber.textContent++;
    } else {
      text.textContent = "👇 Sayınızı Azaltın 👇";
      second.textContent = guess;
      text2.style.display = "block";
      testNumber.textContent++;
    }
    if (scoreNumber.textContent > 1) {
      scoreNumber.textContent--;
    } else if (scoreNumber.textContent == 1) {
      text.textContent = "😞GAME OVER😞";
      tekrar()
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
});


let tekrar = () =>{
    document.querySelector("h1").textContent="";
    document.querySelector("h2").textContent="";
    input.style.display="none";
    check.style.display="none";
    score.style.display="none";
    again.style.display="block";
    text2.style.display="none";

}