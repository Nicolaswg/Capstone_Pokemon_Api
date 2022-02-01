const header = document.querySelector('.header');
const pokedex = document.getElementById('pokedex');
const pokemonNumber = 150;

const displayHeader = () => {
  const html = `<div class="logo"></div><ul class="nav-bar"><li><a href="#" class="nav-link">Pokemons (${pokemonNumber})</a></li><li><a href="#" class="nav-link">Game List</a></li><li><a href="#"class="nav-link">Players</a></li></ul>`;
  header.innerHTML = html;
};

const pokeCard = (pokemon) => {
  const pokeContainer = document.createElement('div');
  pokeContainer.classList.add('pokemon');
  const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const pokeHTML = `
  <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png" class="poke-img">
  </div>
    <div class="poke-title">
    <p class="poke-name">${pokeName}</p>
    <i class="far fa-heart"></i>
    </div>
    <div class="poke-like">
    <p class="likes">Likes</p>
    </div>
    <div class="btn-container">
    <button>Comments</button>
    <button>Reservations</button>
    </div>
  `;
  pokeContainer.innerHTML = pokeHTML;
  pokedex.appendChild(pokeContainer);
};

export { displayHeader, pokeCard };