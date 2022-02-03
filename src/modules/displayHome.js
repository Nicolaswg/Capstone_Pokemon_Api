import { comPopUp, getCounter, getCommentArr } from './commentPopUp.js';
import { postLike, getLike } from './likeApi.js';
import itemCount from './counters.js';

const header = document.querySelector('.header');
const pokedex = document.getElementById('pokedex');
const displayHeader = (arr) => {
  const pokeNum = itemCount(arr);
  const html = `<div class="logo"></div><ul class="nav-bar"><li><a href="#" class="nav-link">Pokemons (${pokeNum})</a></li><li><a href="#" class="nav-link">Game List</a></li><li><a href="#"class="nav-link">Players</a></li></ul>`;
  header.innerHTML = html;
};
const pokeCard = async (pokeArr) => {
  let pokeHTML = '';
  const lkNum = await getLike();
  pokeArr.forEach((element, i) => {
    pokeHTML += `<div class="pokemon" id="${pokeArr[i].id}">
      <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeArr[i].id}.png" class="poke-img">
      </div>
      <div class="poke-title">
      <p class="poke-name">${pokeArr[i].name}</p>
      <i class="far fa-heart lk"></i></div>
      <div class="poke-like">
      <span class ="lk-counter">${lkNum[i].likes}</span>
      <p class="likes">Likes</p></div>
      <div class="btn-container">
      <button class="com-btn">Comments</button>
      </div>
      </div>`;
    pokedex.innerHTML = pokeHTML;
  });
  // console.log(pokeArr);
  const likes = document.querySelectorAll('.lk');
  const sapns = document.querySelectorAll('.lk-counter');
  // console.log(likes);
  likes.forEach((like, i) => {
    like.addEventListener('click', async () => {
      sapns[i].textContent = Number(sapns[i].textContent) + 1;
      await postLike(i);
      const lk = await getLike();
      document.querySelector('.lk-counter').textContent = lk[i].likes;
    });
  });

  const commentBtn = document.querySelectorAll('.com-btn');
  commentBtn.forEach((e, i) => {
    commentBtn[i].addEventListener('click', async (e) => {
      const pokId = e.target.parentNode.parentNode.id;
      comPopUp(pokeArr, i, pokId);

      document.querySelector('.counter').textContent = await getCounter(pokId);

      const commentDiv = document.querySelector('.comments');
      const comments = await getCommentArr(pokId);

      comments.forEach((elemnt) => {
        const div = document.createElement('div');
        div.className = 'comment';
        const nameWithComment = document.createElement('p');
        nameWithComment.className = 'comment';
        const title = `${elemnt.creation_date} ${elemnt.username} : ${elemnt.comment}`;
        nameWithComment.textContent = title;
        div.appendChild(nameWithComment);
        commentDiv.appendChild(div);
      });
    });
  });
  // const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
};
export { displayHeader, pokeCard };
