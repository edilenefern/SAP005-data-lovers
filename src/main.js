// import pokemon from "./data/pokemon/pokemon.js";
import data from "./data/pokemon/pokemon.js";



const pokemons = data.pokemon;
function print(array) {
  let card = "";
  for (let pokemon of array) {
    card += `
      <article class="card">
      <p class="card-text">Numero:${pokemon.num}</p>
      <p class="card-title">Nome:${pokemon.name}</p>
      <img class="card-text" src=${pokemon.img}>
      <p class="card-text">Tipo:${pokemon.type}</p>
      <p class="card-text">${pokemon.about}</p>
      </article>`;
  }
  return card;
}
const cardsPokemon = document.getElementById("main");
cardsPokemon.innerHTML = print(pokemons);

