const url = `https://pokeapi.co/api/v2/`;

obtenerPokemons();

function obtenerPokemons (){

    fetch(url+'pokedex/1/').then( async(resp) =>{
       let cards = '';
        let {pokemon_entries} = await resp.json();

        pokemon_entries.forEach((pokemon) => {

            let tp = '';
    fetch(url+'pokemon/'+pokemon.entry_number+'/').then( async (resp) => {
        let {types} = await resp.json();

        types.forEach(tipo =>{

            tp+= `<span class="badge bg-success">${tipo.type.name}</span>`
        })

    })
            cards+= `
            <div class="col">
      <div class="card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.entry_number}.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">#${pokemon.entry_number} ${pokemon.pokemon_species.name}</h5>
          <p class="card-text">
          ${tp}
          </p>
        </div>
      </div>
    </div>`;
          
        });

        document.getElementById("pokemonsCards").innerHTML = cards
    });
}