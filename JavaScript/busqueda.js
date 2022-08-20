$("#alertaVacio").hide();
document.getElementById("inputBusqueda").addEventListener("keypress", function ({ key }) {

    let { value } = this;

    if (key == 'Enter') {
        if (value == '') {
            $("#alertaVacio").show();
            setTimeout(() => {
                $("#alertaVacio").hide();
            }, 5000);
        }
        else {
            let tp = '';
            fetch('https://pokeapi.co/api/v2/pokemon/' + value + '/').then(async (resp) => {
                const pokemonBuscado = await resp.json();
                pokemonBuscado.types.forEach(({ type }) => {
                    let { clave } = tiposPokemon.find(data => data.tipo == type.name);

                    tp += `<span class="badge ms-3" style="background-color:${clave}">${capitalize(type.name)}</span>`
                });
                document.getElementById("pokemonEncontrado").innerHTML = dibujarTarjetas(pokemonBuscado.id, pokemonBuscado.name, tp);
            })
        }
    }


})

dibujarTarjetas = (idx, name, tp) => `<div class="col">
    <div class="card" id="CardID${idx}" onclick="abrirPokemon('${name}')" >
      <img  crossorigin="anonymous" id="PokemonID${idx}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idx}.png" class="card-img-top imagenPokemon" alt="...">
      <div class="card-body">
        <h5 class="card-title text-center">#${idx} ${capitalize(name)}</h5>
        
        <center>${tp}</center>
        
      </div>
    </div>
  </div>`;
