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
    title.innerHTML = "Busqueda";
    if(contenedor != null){
    data.forEach(elemento => {
      if(arr[arr.length-1].toUpperCase() === elemento.name.toUpperCase().replaceAll(" ", "-")){
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
                         <img class="imgGameThumbnail" src='${elemento.thumbnail}' alt='${elemento.name.replaceAll("-", " ")}'></img>
                       </div>`;
      console.log(elemento.thumbnail);
      contenedor.appendChild(a);
      }
    });
  }
  }

loadGamesJSON();