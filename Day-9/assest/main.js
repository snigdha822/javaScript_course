// Generate a random number
const random_number = Math.floor(Math.random() * 100) +1;

console.log(random_number);

const guessForm = document.getElementById("guessForm");
const message = document.getElementById("message");

guessForm.addEventListener("submit", function(event){
    event.preventDefault();

    const userGuess = parseInt(document.getElementById("guess").value);

    if(userGuess === random_number) {
        // message.classlist.add("text-green-500");
        message.innerText = `Congratulations! You win!`;
    }else{
        // message.classlist.add("text-red-500");
        message.innerText = `Sorry! you lose! The correct number was ${random_number}.`;
    }

    guessForm.reset();
    
})

