// const { DateTime } = require('luxon');


const comPopUp = (pokemon, i) => {   
const parent = document.createElement('div'); 
parent.classList.add('modal-bg');
parent.classList.add('overlay');
const commentContainer = document.createElement('div');
commentContainer.classList.add('com-contain');

   let commentHtml = '';
    commentHtml += `<section class="coment-sec">
    <button class="close-popUp">X</button>
    <div class="img-div-contain">
       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon[i].id}.png" class="poke-img"> 
    </div>
    <div class="description">
        <p>weight: ${pokemon[i].weight}</p>
        <p>height: ${pokemon[i].height}</p>
        <p>species: ${pokemon[i].species.name}</p>
        <p>type: ${pokemon[i].types[0].type.name}</p>
    </div>
    <div>
        <div class="comments">
                <p class="label2"> Comments () </p>  
        </div>
        <div class="Add-comment">
            <form class="form">
                <label class="label">Add a comment ✍</label>
                <input class="input-name" id="name" type="text" placeholder="Your name">
                <textarea class="input-area" id="txtArea" cols="30" rows="10" placeholder="Your insights"></textarea>
                <button class="btn" type="submit">Comment</button>
            </form>
        </div>
    </div>
    </section>`

    commentContainer.innerHTML = commentHtml;
    parent.appendChild(commentContainer);
    document.body.appendChild(parent);
  
   const btnClose = document.querySelector('.close-popUp');

   btnClose.addEventListener('click', () => {
    parent.remove();
   })
    
};

 export default comPopUp;

