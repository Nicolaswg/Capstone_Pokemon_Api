import comPopUp from './commentPopUp.js';

const header = document.querySelector('.header');
const pokedex = document.getElementById('pokedex');
const pokemonNumber = 150;
const displayHeader = () => {
  const html = `<div class="logo"></div><ul class="nav-bar"><li><a href="#" class="nav-link">Pokemons (${pokemonNumber})</a></li><li><a href="#" class="nav-link">Game List</a></li><li><a href="#"class="nav-link">Players</a></li></ul>`;
  header.innerHTML = html;
};

const pokeCard = (pokeArr) => {
  let pokeHTML = '';
  pokeArr.map((e, i) => {
    pokeHTML += `<div class="pokemon">
    <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeArr[i].id}.png" class="poke-img">
    </div>
    <div class="poke-title"><p class="poke-name">${pokeArr[i].name}</p><i class="far fa-heart"></i>
    </div>
    <div class="poke-like"><p class="likes">Likes</p>
    </div>
    <div class="btn-container">
    <button class="com-btn">Comments</button>
     </div>
     </div>`;
    pokedex.innerHTML = pokeHTML;

      });
      const commentBtn = document.querySelectorAll('.com-btn');
           for(let i = 0; i < commentBtn.length; i += 1){
                 commentBtn[i].addEventListener('click', () => {
                  comPopUp(pokeArr, i);
                 });
           };
   
           return pokeArr;
};
export { displayHeader, pokeCard };

