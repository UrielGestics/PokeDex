const pokemonName = window.location.search.slice(6, window.location.search.length);

const urlApi = 'https://pokeapi.co/api/v2/';

fetch(`${urlApi}pokemon/${pokemonName}`).then(async (pokemon) => {
    const { abilities, stats, types, base_experience, height, weight } = await pokemon.json();
    console.log(abilities, stats, types, base_experience, height / 10, weight / 10);
    // document.querySelector('h1').innerHTML = height / 10s;

});

//radar
var ctxR = document.getElementById("radarChart").getContext('2d');
var myRadarChart = new Chart(ctxR, {
    type: 'radar',
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [{
            label: "My First dataset",
            data: [65, 59, 90, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(105, 0, 132, .2)',
            ],
            borderColor: [
                'rgba(200, 99, 132, .7)',
            ],
            borderWidth: 2
        },
        {
            label: "My Second dataset",
            data: [28, 48, 40, 19, 96, 27, 100],
            backgroundColor: [
                'rgba(0, 250, 220, .2)',
            ],
            borderColor: [
                'rgba(0, 213, 132, .7)',
            ],
            borderWidth: 2
        }
        ]
    },
    options: {
        responsive: true
    }
});