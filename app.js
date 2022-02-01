const buttonDisplay = document.getElementById("buttonDisplay");
const showPunchlineBtn = document.getElementById("showPunchlineBtn");
const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
let apiData;
let jokeId;

buttonDisplay.addEventListener('click', () => {
    getData();
});

showPunchlineBtn.addEventListener('click', () => {
    showPunchline();
})

function getData() {
    fetch(`http://localhost:5000/jokes`, {
        "method": "GET"
    })
    .then(res => res.json())
    .then((data, error) => {
        if (data) {
            let randomNumber = Math.floor(Math.random() * data.length);
            apiData = data;
            jokeId = randomNumber;
            showRandomJoke(randomNumber);
        }
        else console.log(error);
    })
}

function showRandomJoke(id) {
    if (apiData && apiData.length > 0) {
        apiData.forEach(joke => {
            if (joke.id === id.toString()) {
                // TODO: cuando nos encontremos con saltos de línea, cambiarlo
                setup.innerText = joke.setup;
                punchline.classList.add('hidden');
                punchline.innerText = joke.punchline;
                showPunchlineBtn.classList.remove('hidden');
            }
        });
    }
}

function showPunchline() {
 punchline.classList.remove('hidden');   
}