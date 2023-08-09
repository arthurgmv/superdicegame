function playGame() {

//dice01
    function dice01() {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        let img01 = document.querySelector(".img1"); // Alterado de ".img01"

        if (randomNumber === 1) {
            img01.setAttribute("src", "images/dice1.png");
        } else if (randomNumber === 2) {
            img01.setAttribute("src", "images/dice2.png");
        } else if (randomNumber === 3) {
            img01.setAttribute("src", "images/dice3.png");
        } else if (randomNumber === 4) {
            img01.setAttribute("src", "images/dice4.png");
        } else if (randomNumber === 5) {
            img01.setAttribute("src", "images/dice5.png");
        } else {
            img01.setAttribute("src", "images/dice6.png");
        }

        return randomNumber;
    }

//dice02
    function dice02() {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        let img02 = document.querySelector(".img2"); // Alterado de ".img02"

        if (randomNumber === 1) {
            img02.setAttribute("src", "images/dice1.png");
        } else if (randomNumber === 2) {
            img02.setAttribute("src", "images/dice2.png");
        } else if (randomNumber === 3) {
            img02.setAttribute("src", "images/dice3.png");
        } else if (randomNumber === 4) {
            img02.setAttribute("src", "images/dice4.png");
        } else if (randomNumber === 5) {
            img02.setAttribute("src", "images/dice5.png");
        } else {
            img02.setAttribute("src", "images/dice6.png");
        }

        return randomNumber;
    }

    const resultDice01 = dice01();
    const resultDice02 = dice02();

// result
    if (resultDice01 < resultDice02) {
        document.querySelector("h1").innerText = "Player 02 wins!!";
    } else if (resultDice01 > resultDice02) {
        document.querySelector("h1").innerText = "Player 01 wins!!";
    } else {
        document.querySelector("h1").innerText = "Draw!!";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const refreshButton = document.querySelector("h1");
    refreshButton.addEventListener("click", playGame);
});

// Code made by: https://github.com/arthurgmv