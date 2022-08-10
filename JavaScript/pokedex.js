const url = `https://pokeapi.co/api/v2/`;
let ids = [];
const tiposPokemon = [
{tipo:'normal',clave:'#07227F'},
{tipo:'fire',clave:'#D32F2F'},
{tipo:'water',clave:'#323099'},
{tipo:'grass',clave:'#00701A'},
{tipo:'flying',clave:'#CF9966'},
{tipo:'fighting',clave:'#FF9800'},
{tipo:'poison',clave:'#6A1B9A'},
{tipo:'electric',clave:'#FACE48'},
{tipo:'ground',clave:'#795548'},
{tipo:'rock',clave:'#757575'},
{tipo:'psychic',clave:'#FFC107'},
{tipo:'ice',clave:'#64B5F6'},
{tipo:'bug',clave:'#43A047'},
{tipo:'ghost',clave:'#AB47BC'},
{tipo:'steel',clave:'#78909C'},
{tipo:'dragon',clave:'#FF9800'},
{tipo:'dark',clave:'#212529'},
{tipo:'fairy',clave:'#B37FE1'},
];
obtenerPokemons();
function obtenerPokemons (){
    
    fetch(url+'pokedex/1/').then( async(resp) =>{
       let cards = '';
       
        let {pokemon_entries} = await resp.json();
        pokemon_entries.forEach((pokemon,idx) => {
            let tp = '';
    fetch(url+'pokemon/'+pokemon.entry_number+'/').then( async (resp) => {
        let {types} = await resp.json();
 if(idx < 12){
        types.forEach(({type}) =>{
            let {clave} = tiposPokemon.find(data => data.tipo == type.name);
    
            tp+= `<span class="badge ms-3" style="background-color:${clave}">${capitalize(type.name)}</span>`
        });
       
        cards+= `
        <div class="col">
  <div class="card" id="CardID${pokemon.entry_number}" >
    <img  crossorigin="anonymous" id="PokemonID${pokemon.entry_number}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.entry_number}.png" class="card-img-top imagenPokemon" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">#${pokemon.entry_number} ${capitalize(pokemon.pokemon_species.name)}</h5>
      
      <center>${tp}</center>
      
    </div>
  </div>
</div>`;
ids.push(pokemon.entry_number);
}
document.getElementById("pokemonsCards").innerHTML = cards
    });
           

});

setTimeout(() => {
    ids.forEach(function(id) {
        var img = document.getElementById("PokemonID" + id);
        paletteReady = false;
    
    
        img.addEventListener('load', function() {
            if (!paletteReady)
            getPalette();
        });
        
        if (!paletteReady){
           
                getPalette();
        }
    
        function getPalette() {
            //paletteReady = true;
    
            var vibrant = new Vibrant(img),
                swatches = vibrant.swatches();
    
            // if (swatches['DarkVibrant']) {
                let colorFinal = `linear-gradient(180deg, ${swatches['Muted'].getHex()} 30%, rgba(255,255,255,1) 60%)`;
            $("#CardID" + id).css("background",colorFinal);
    
           
            //}
        }
    });
}, 2000);


    });
   
}

 capitalize =  (palabra) => {
    return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
  }