const button = document.querySelector('.button');
const div = document.querySelector('.joke');

button.addEventListener("click", generateJoke);

function generateJoke() {
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(response => response.json())
    .then(result => { 
        div.textContent = result.joke;
    })
}

