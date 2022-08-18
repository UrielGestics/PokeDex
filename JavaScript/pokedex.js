const url = `https://pokeapi.co/api/v2/`;
let urlSiguiente = '';
let ids = [];

obtenerPokemons();
function obtenerPokemons() {
    $("#mostrarOcultarTarjteas").hide();
    fetch(url + 'pokemon?limit=12&order=1').then(async (resp) => {
        let cards = '';

        let { results, next } = await resp.json();
        urlSiguiente = next;
        results.forEach((pokemon, idx) => {
            let tp = '';
            idx++;

            fetch(url + 'pokemon/' + idx + '/').then(async (resp) => {

                let { types } = await resp.json();

                types.forEach(({ type }) => {
                    let { clave } = tiposPokemon.find(data => data.tipo == type.name);

                    tp += `<span class="badge ms-3" style="background-color:${clave}">${capitalize(type.name)}</span>`
                });

                cards = dibujarTarjetas(idx, pokemon.name, tp);
                $("#pokemonsCards").append(cards);


                ids.push(idx);

            });

        });

        setTimeout(() => {
            ids.forEach(function (id) {
                var img = document.getElementById("PokemonID" + id);
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

                    // if (swatches['DarkVibrant']) {
                    let colorFinal = `linear-gradient(180deg, ${swatches['Muted'].getHex()} 30%, rgba(255,255,255,1) 60%)`;
                    $("#CardID" + id).css("background", colorFinal);


                    //}
                }

            });

        }, 2000);


    });

}

function cargarSiguientesPokemons() {
    $("#mostrarOcultarTarjteas").show();
    fetch(urlSiguiente).then(async (resp) => {
        let cards = '';
        const { results, next } = await resp.json();

        results.forEach(({ name, url }) => {
            const idx = url.slice(34, -1);
            let tp = '';
            fetch('https://pokeapi.co/api/v2/' + 'pokemon/' + idx + '/').then(async (resp) => {
                let { types } = await resp.json();

                types.forEach(({ type }) => {
                    let { clave } = tiposPokemon.find(data => data.tipo == type.name);

                    tp += `<span class="badge ms-3" style="background-color:${clave}">${capitalize(type.name)}</span>`
                });

                cards = dibujarTarjetas(idx, name, tp);
                $("#mostrarOcultarTarjteas").hide();
                $("#pokemonsCards").append(cards);


                ids.push(idx);
            });
        });
        urlSiguiente = next;
        setTimeout(() => {
            ids.forEach(function (id) {
                var img = document.getElementById("PokemonID" + id);
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

                    // if (swatches['DarkVibrant']) {
                    let colorFinal = `linear-gradient(180deg, ${swatches['Muted'].getHex()} 30%, rgba(255,255,255,1) 60%)`;
                    $("#CardID" + id).css("background", colorFinal);


                    //}
                }

            });

        }, 2000);

    });
}

$(window).on('scroll', function () {
    if ($(window).scrollTop() + $(window).height() > ($(document).height() - 10)) {
        //Cargar Mas Pokemons
        cargarSiguientesPokemons();
    }
});

dibujarTarjetas = (idx, name, tp) => `<div class="col">
    <div class="card" id="CardID${idx}" onclick="abrirPokemon('${name}')" >
      <img  crossorigin="anonymous" id="PokemonID${idx}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idx}.png" class="card-img-top imagenPokemon" alt="...">
      <div class="card-body">
        <h5 class="card-title text-center">#${idx} ${capitalize(name)}</h5>
        
        <center>${tp}</center>
        
      </div>
    </div>
  </div>`;


function abrirPokemon(name) {
    window.open("pokemon?name=" + name);
}





