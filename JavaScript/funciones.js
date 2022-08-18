const tiposPokemon = [
    { tipo: 'normal', clave: '#07227F' },
    { tipo: 'fire', clave: '#D32F2F' },
    { tipo: 'water', clave: '#323099' },
    { tipo: 'grass', clave: '#00701A' },
    { tipo: 'flying', clave: '#CF9966' },
    { tipo: 'fighting', clave: '#FF9800' },
    { tipo: 'poison', clave: '#6A1B9A' },
    { tipo: 'electric', clave: '#FACE48' },
    { tipo: 'ground', clave: '#795548' },
    { tipo: 'rock', clave: '#757575' },
    { tipo: 'psychic', clave: '#FFC107' },
    { tipo: 'ice', clave: '#64B5F6' },
    { tipo: 'bug', clave: '#43A047' },
    { tipo: 'ghost', clave: '#AB47BC' },
    { tipo: 'steel', clave: '#78909C' },
    { tipo: 'dragon', clave: '#FF9800' },
    { tipo: 'dark', clave: '#212529' },
    { tipo: 'fairy', clave: '#B37FE1' },
];
capitalize = (palabra) => {
    return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
}