const mostrarPokemon = document.getElementById("boton");
const container = document.getElementById("container");
const pantallaGris = document.getElementById("pantallita")
function llamarPokemon(){

const user = document.getElementById("nombre").value;
fetch(`https://pokeapi.co/api/v2/pokemon/${user}/`)
.then((response) => response.json())
.then((data) => {

  container.innerHTML = "";
  pantallaGris.innerHTML =";"

  const pokedex = data.id;
  const pokemon = data.name;
  const imagenPoke = data.sprites.front_default; 
  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");
  
  const sprite = document.createElement("img");
  sprite.classList.add("img")
  sprite.src = imagenPoke;
  
  spriteContainer.appendChild(sprite);
  
  const numero = document.createElement("p");
  numero.textContent = `#${pokedex.toString().padStart(3,0)}`;
  
  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon;

  const run = document.createElement("p")
  run.classList.add("run-text")
  run.textContent = "RUN!!!"

  container.appendChild(spriteContainer);
  container.appendChild(numero);
  container.appendChild(name);
  pantallaGris.appendChild(run);
  
});}




