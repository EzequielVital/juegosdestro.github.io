let gameCategoryLoaded;
let juegoUrl;

async function loadGamesJSON() {
    try {
      const response = await fetch('/json/games.json');
      const data = await response.json();

      loadGame(data);
    } catch (error) {
      console.error('Error al obtener el archivo JSON:', error);
    }
    loadSimilarGames();
}


function loadGame(data){
    url = window.location.href;
    const arr = url.split('/');
    const contenedor = document.querySelector(".gameiFrameContainer");
    data.forEach(elemento => {
      
        if(elemento.name.replaceAll(" ", "-") === arr[arr.length-1]){
            const name = document.querySelector(".gameTitle");
            const gameDescription = document.querySelector(".gameDescription");
            name.append(elemento.name);
            gameDescription.append(elemento.description);
            const div = document.createElement('div');
            div.classList.add("iframeContainer");
            if(navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad") || navigator.userAgent.includes("iPod") || navigator.userAgent.includes("Android")){
              div.innerHTML = `<img src=${elemento.thumbnail} width="100%" height="100%">`;
              if(elemento.mobile == false){
                const startButton = document.querySelector(".startButton");
                startButton.innerHTML = `<div>Mobile device not supported</div>`;
              }else{
                if(elemento.tags != undefined){
                  if(!elemento.tags.includes("Mobile")){
                    const startButton = document.querySelector(".startButton");
                    startButton.innerHTML = `<div>Mobile device not supported</div>`;
                  }
                }
              }
            }else{
              div.innerHTML = `<iframe src=${elemento.url} width="100%" height="100%" allow="fullscreen" id="my-iframe"></iframe>`;
            }
            juegoUrl = elemento.url;
            gameCategoryLoaded = elemento.category;
            contenedor.appendChild(div);
            document.title = elemento.name + " - Juega gratis en Juegos Destro";
            var metaDescription = document.querySelector('meta[name="description"]');
            metaDescription.content = elemento.description;
            throw "Juego encontrado";
        }
      });
      
}

async function initGame(){
  const body = document.body;
  const gameContainerMobile = document.querySelector(".gameContainerMobile");
if(gameContainerMobile == null){
  const div = document.createElement("div");
  div.classList.add("gameContainerMobile");
  div.innerHTML = `<iframe src=${juegoUrl} width="100%" height="100%" allow="fullscreen" id="my-iframe"></iframe>
                    <div class="backButton" onclick="ocultarGameContainerMobile()">
                    <img class="imgBack" src="/imagenes/img-arrow.png">
                    </div>`;
  body.append(div);
}else{
  mostrarGameContainerMobile();
}
}

function ocultarGameContainerMobile(){
  const gameContainerMobile = document.querySelector(".gameContainerMobile");
  gameContainerMobile.classList.add("isActive");
}

function mostrarGameContainerMobile(){
  const gameContainerMobile = document.querySelector(".gameContainerMobile");
  gameContainerMobile.classList.remove("isActive");
}

async function loadSimilarGames(){
    try {
        const response = await fetch('/json/games.json');
        const data = await response.json();
        const contenedor = document.getElementById(`similarGamesContainer`);
        
        let i = 0;
        data.forEach(elemento => {
            if(i==12){
                return;
            }
            if(elemento.category.toLowerCase() === gameCategoryLoaded.toLowerCase()){
            if(elemento.thumbnail === null){
              elemento.thumbnail = "/imagenes/img_logo.png";
            }
            const a = document.createElement('a');
            a.classList.add("gameContainer");
            a.setAttribute("href", `https://juegosdestro.com/juego/${elemento.name.replaceAll(" ", "-")}`);
            a.innerHTML = `<div class="gameTitle">
                        <h2>${elemento.name}</h2>
                       </div>
                       <div class="imgGameContainer">
                         <img class="imgGameThumbnail" src="${elemento.thumbnail}" alt="${elemento.name.replaceAll("-", " ")}"></img>
                       </div>`;
      
            contenedor.appendChild(a);
            
            i++;
          }
        });
      } catch (error) {
        console.error('Error al obtener el archivo JSON:', error);
      }
}

if(navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad") || navigator.userAgent.includes("iPod") || navigator.userAgent.includes("Android")){
}else{
  const startButton = document.querySelector(".startButton");
  startButton.classList.add("hidden");
}

let nameAux = window.location.href;
const nameAux2 = nameAux.split('/');

const template = document.createElement('template');
template.innerHTML = `<link rel="canonical" href="https://juegosdestro.com/juego/${nameAux2[nameAux2.length-1]}">`;
head.appendChild(template.content);

loadGamesJSON();


