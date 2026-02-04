async function loadGamesJSON() {
    try {
      const response = await fetch('/json/games.json');
      const data = await response.json();
      loadGames(data);
    } catch (error) {
      console.error('Error al obtener el archivo JSON:', error);
    }
  }

  function loadGames(data) {
    url = window.location.href;
    const arr = url.split('/');
    const contenedor = document.getElementById(`gamesCategorySection`);
    const title = document.querySelector(".gameCategoryTitle");
    title.innerHTML = arr[arr.length-1].charAt(0).toUpperCase() + arr[arr.length-1].slice(1);
    document.title = "Juegos de " + arr[arr.length-1].charAt(0).toUpperCase() + arr[arr.length-1].slice(1) + " - Juegos Destro";
    if(contenedor != null){
    data.forEach(elemento => {
      if(arr[arr.length-1] === elemento.category.toLowerCase()){
        if(elemento.thumbnail === null){
          elemento.thumbnail = "/imagenes/img_logoDefaultGame.png";
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
      }

      if(arr[arr.length-1] === "newGames"){
        if(elemento.thumbnail === null){
          elemento.thumbnail = "/imagenes/img_logoDefaultGame.png";
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
      }

    });
  }
  }

let nameAux = window.location.href;
const nameAux2 = nameAux.split('/');

const template = document.createElement('template');
template.innerHTML = `<link rel="canonical" href="https://juegosdestro.com/categoria/${nameAux2[nameAux2.length-1]}">`;
head.appendChild(template.content);

loadGamesJSON();