const mostrarPokemon = document.getElementById("boton");
const container = document.getElementById("container");
const pantallaGris = document.getElementById("pantallita")

function llamarPokemon(){
const user = document.getElementById("nombre").value;  //El valor del user será el valor entragado en el label
fetch(`https://pokeapi.co/api/v2/pokemon/${user}/`)   //El fetcha ára poder usar la API
.then((response) => response.json())
.then((data) => {

  container.innerHTML = ""; //Aquí borro el cointainer y la pantallaGris para que cada vez que apreté el click
  pantallaGris.innerHTML =""; // en el botón se borre los datos del pokemón mostrado anteriormente

  //creo constantes sacadas de la API para usarlas en cada busqueda

  const pokedex = data.id;                                  // La id del pokémon
  const pokemon = data.name;                               // El nombre del pokémon
  const imagenPoke = data.sprites.front_default;          // La foto frontal del pokémon
  const spriteContainer = document.createElement("div");    //Creo un div para colocar la imagen del pokémon  
  spriteContainer.classList.add("img-container");          //Creo la clase para el css
  
  const sprite = document.createElement("img");           //La constante de la imagen 
  sprite.classList.add("img")                            //Creo la clase para el css
  sprite.src = imagenPoke;
  
  spriteContainer.appendChild(sprite);                  //Coloco el ultimo sprite en el div de la imagen
  
  const numero = document.createElement("p");         //Creo el parrafo para el id del pokémon
  numero.textContent = `#${pokedex.toString().padStart(3,0)}`;  //El padstart (3,0) para que se pueda ver por ejemplo:001
  
  const name = document.createElement("p");   //Creo parrafo para el nombre del pokémon
  name.classList.add("name");                //Creo clase para css
  name.textContent = pokemon;               

  const run = document.createElement("p")   //Creo un texto para colocar en la pantalla cada vez que buscas
  run.classList.add("run-text")
  run.textContent = "RUN!!!"

  container.appendChild(spriteContainer);   //Luego agrego cada constante a su respectivo Div
  container.appendChild(numero);
  container.appendChild(name);
  pantallaGris.appendChild(run);
  
});}




