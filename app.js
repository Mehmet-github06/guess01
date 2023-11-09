let check = document.querySelector(".btn");
let input = document.querySelector(".input");
let text  = document.querySelector(".text");
let fist  = document.querySelector(".first");
let second = document.querySelector(".second");


let random = Math.floor(Math.random() *101);
console.log(random);


check.addEventListener("click", () => {
    const guess = parseInt(input.value, 10);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        text.textContent = "Lütfen 1 ile 100 arasında bir sayı girin!";
    } else {
        
        if (guess === random) {
            text.textContent = "Tebrikler, doğru tahmin ettiniz! 👏";
        } else if (guess < random) {
            text.textContent = "Daha büyük bir sayı deneyin.";
            fist.textContent=guess
        } else {
            text.textContent = "Daha küçük bir sayı deneyin.";
            second.textContent=guess;
        }
    }
});
