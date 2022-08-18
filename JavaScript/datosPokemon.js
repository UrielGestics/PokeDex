const pokemonName = window.location.search.slice(6, window.location.search.length);

const urlApi = 'https://pokeapi.co/api/v2/';
let colorGrafica = '';
fetch(`${urlApi}pokemon/${pokemonName}`).then(async (pokemon) => {
    const {id, forms, abilities, stats, types, base_experience, height, weight } = await pokemon.json();
    document.getElementById("nombrePokemon").innerHTML = capitalize(forms[0].name);
    document.getElementById("imagenPokemonMostrar").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
    document.getElementById("pExperiencia").innerHTML = `${base_experience} points`;
    document.getElementById("peso").innerHTML = `${weight / 10} kg`;
    document.getElementById("altura").innerHTML = `${height / 10} m`;
    generarGrafica(stats[0].base_stat,stats[1].base_stat,stats[2].base_stat,stats[3].base_stat,stats[4].base_stat,stats[5].base_stat);

    let abi = '';
    let tp = '';
    abilities.forEach(({ability, is_hidden}) => {
        let tipoHabilidad = '';
        if(!is_hidden){
            tipoHabilidad = 'Main';
        }else{
            tipoHabilidad = 'Hidden';
        }
        abi += ` <li class="list-group-item">${capitalize(ability.name)}<strong>(${tipoHabilidad})</strong></li>`;
    })
        types.forEach(({ type }) => {
            let { clave } = tiposPokemon.find(data => data.tipo == type.name);
             tp += `<span class="badge ms-3" style="background-color:${clave}">${capitalize(type.name)}</span>`
        });
        document.getElementById("abilities").innerHTML = abi;
    document.getElementById("typesPokemon").innerHTML = tp;
    obtenerColor();

});

generarGrafica = (hp,attack,defense,specialAttack,SpecialDefense,Speed) =>{
     let ctxR = document.getElementById("radarChart").getContext('2d');
    let myRadarChart = new Chart(ctxR, {
        type: 'radar',
        data: {
            labels: ["HP", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"],
            datasets: [{
                label: "Stats",
                data: [hp, attack, defense, specialAttack, SpecialDefense, Speed],
                backgroundColor: [
                    'rgba(105, 0, 132, .2)',
                ],
                borderColor: [
                    'rgba(200, 99, 132, .7)',
                ],
                borderWidth: 1
            },
            
            ]
        },
        options: {
            responsive: false,
            cales: {
                xAxes: [{
                    ticks: {
                      max: 100,
                      stepSize: 5
                    }
                  }]
            }
            
        }
    });
}

obtenerColor = () =>{
    var img = document.getElementById("imagenPokemonMostrar");
                paletteReady = false;


                img.addEventListener('load', function () {
                    if (!paletteReady)
                        getPalette();
                });

                if (!paletteReady) {

                    getPalette();
                }

                function getPalette() {
                    //paletteReady = true;

                    var vibrant = new Vibrant(img),
                        swatches = vibrant.swatches();
                        const colorFondo = swatches['Vibrant'].getHex();
                        console.log(colorFondo+'20');
                        colorGrafica = swatches['DarkVibrant'].getHex();
                    // if (swatches['DarkVibrant']) {
                    let colorFinal = `radial-gradient(ellipse farthest-corner at 0 10%, ${colorFondo+'50'} 15%, rgba(255,255,255,0.2) 60%)`;
                    $('#CuerpoPokemonDatos').css("background", colorFinal);


                    //}
                }
}
