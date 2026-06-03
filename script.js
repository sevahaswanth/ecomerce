let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {

    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");

    if (guess === randomNumber) {
        message.innerHTML = "🎉 Correct! You guessed it!";
    }
    else if (guess < randomNumber) {
        message.innerHTML = "📉 Too Low!";
    }
    else {
        message.innerHTML = "📈 Too High!";
    }
}