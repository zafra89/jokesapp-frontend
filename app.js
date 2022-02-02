// DOM ELEMENTS
const buttonDisplay = document.getElementById('buttonDisplay');
const punchlineCard = document.getElementById('punchlineCard');
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');

// VARIABLES
let apiData;
let jokeId;

//EVENT LISTENERS
buttonDisplay.addEventListener('click', () => {
    getData();
});

// FUNCTIONS
function getData() {
    fetch(`http://localhost:5000/jokes`, {
        'method': 'GET'
    })
    .then(res => res.json())
    .then((data, error) => {
        if (data && data.length > 0) {
            apiData = data;
            let randomNumber = Math.floor(Math.random() * data.length);
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
                setup.innerText = joke.setup;
                punchline.innerText = joke.punchline;
                punchlineCard.classList.remove('hidden');
            }
        });
    }
}

