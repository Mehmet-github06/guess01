let check = document.querySelector(".btn");
let input = document.querySelector(".input");
let text  = document.querySelector(".text");
let fist  = document.querySelector(".first");
let second = document.querySelector(".second");
let text2 = document.querySelector(".text2");
let testNumber = document.querySelector(".test-number");

let random = Math.floor(Math.random() *101);
console.log(random);


check.addEventListener("click", () => {
    const guess = parseInt(input.value, 10);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        text.textContent = "Lütfen 1 ile 100 arasında bir sayı girin!";
    } else {
        
        if (guess === random) {
            text.textContent = "Tebrikler, doğru tahmin ettiniz! 👏";
            text.textContent=`Tebrikler ${+(testNumber.textContent)+1} tahminde bildiniz!` ;
        } else if (guess < random) {
            text.textContent = " 👆 Sayınızı Arttırın 👆";
            fist.textContent=guess
            text2.style.display="block";
            testNumber.textContent++;
        } else {
            text.textContent = "👇 Sayınızı Azaltın 👇";
            second.textContent=guess;
            text2.style.display="block";
            testNumber.textContent++;
        }
    }
});
document.addEventListener("keydown", function(e){
    if(e.key ==="Enter"){
        check.click()
    }
})