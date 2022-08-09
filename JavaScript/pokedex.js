const url = `https://pokeapi.co/api/v2/pokedex/1/`;

obtenerPokemons();

function obtenerPokemons (){

    fetch(url).then( async(resp) =>{
        let pokemons = await resp.json();
        console.log(pokemons);
        // let {pokemon_entries} = await resp.json();
        // pokemon_entries.forEach((pokemon) => {
        //     console.log(pokemon.pokemon_species.name);
        // });
    });
}