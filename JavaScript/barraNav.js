const valorBusqueda = document.getElementById("barraNavRoja").dataset.pag;
let home = '';
let search = '';
if (valorBusqueda == 'search'){
search = ' <a style="background-color: #F9C708; border-radius: 10px;" class="nav-link font-weight-bold" href="search">Search</a>';
home = ' <a class="nav-link text-white" aria-current="page" href="index">Home</a>';
}else{
  search = ' <a  class="nav-link text-white font-weight-bold" href="search">Search</a>';
home = ' <a style="background-color: #F9C708; border-radius: 10px;" class="nav-link" aria-current="page" href="index">Home</a>';
}
let barraRoja = `<nav class="navbar navbar-expand-lg bg-danger">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"> <h2 class="tituloPokemon">PokéDex</h2></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
               ${home}
              </li>
              <li class="nav-item">
               ${search}
              </li>
            </ul>
          </div>
        </div>
    </nav>`;

    document.getElementById("barraNavRoja").innerHTML = barraRoja;