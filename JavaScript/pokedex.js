const url = `https://pokeapi.co/api/v2/`;

obtenerPokemons();

function obtenerPokemons (){
    fetch(url+'pokedex/1/').then( async(resp) =>{
       let cards = '';
        let {pokemon_entries} = await resp.json();
        pokemon_entries.forEach((pokemon,idx) => {
            let tp = '';
    fetch(url+'pokemon/'+pokemon.entry_number+'/').then( async (resp) => {
        let {types} = await resp.json();

        types.forEach(tipo =>{
            tp+= `<span class="badge bg-success ms-3">${tipo.type.name}</span>`
        });
        if(idx < 12){
        cards+= `
        <div class="col">
  <div class="card" style="background: linear-gradient(180deg, rgba(69,190,83,1) 30%, rgba(255,255,255,1) 60%);">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.entry_number}.png" class="card-img-top imagenPokemon" alt="...">
    <div class="card-body">
      <h5 class="card-title">#${pokemon.entry_number} ${pokemon.pokemon_species.name}</h5>
      <p class="card-text">
      ${tp}
      </p>
    </div>
  </div>
</div>`;
}
document.getElementById("pokemonsCards").innerHTML = cards
    });
           

});

    });
    
}

function getPalette() {
    paletteReady = true;
    
    var vibrant = new Vibrant(img),
        swatches = vibrant.swatches(),
        listFragment = new DocumentFragment();
    
    for ( var swatch in swatches ) {
        if (swatches.hasOwnProperty(swatch) && swatches[swatch]) { 
            console.log(swatch, swatches[swatch].getHex());
            var li = document.createElement('li'),
                p = document.createElement('p'),
                small = document.createElement('small');
            
            p.textContent = swatches[swatch].getHex();
            p.style.color = swatches[swatch].getTitleTextColor();
            small.textContent = swatch;
            small.style.color = swatches[swatch].getBodyTextColor();
            li.style.backgroundColor = swatches[swatch].getHex();
            li.appendChild(p);
            li.appendChild(small);
            listFragment.appendChild(li);
        }
    }
    
    list.appendChild(listFragment);
    
    if (swatches['DarkVibrant']) {
        section.style.backgroundColor = swatches['DarkVibrant'].getHex();
    }
}


setTimeout(() => {
    let arregloImagenes = document.querySelector(".imagenPokemon");
    Array.prototype.forEach.call(arregloImagenes ,function (img) {
       img.attachEvent("onload", (imagen) =>{
        console.log(imagen)
       });
    })
}, 1000);
