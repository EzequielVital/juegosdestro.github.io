async function loadGamesJSON() {
    try {
      const response = await fetch('/json/games.json');
      const data = await response.json();
      loadGames(data,"newGamesContainer", "newGames", 12);
      loadGames(data,"actionGamesContainer", "action", 12);
      loadGames(data,"popularGamesContainer", "popularGames", 12);
      loadGames(data,"threeDGamesContainer", "3d", 12);
      loadGames(data,"chicasGamesContainer", "girls", 12);
      loadGames(data,"strategyGamesContainer", "strategy", 12);
    } catch (error) {
      console.error('Error al obtener el archivo JSON:', error);
    }
  }

  function loadGames(data, id, category, cant) {
  
    const contenedor = document.getElementById(`${id}`);
    if(contenedor != null){
    let i = 0;
    data.forEach(elemento => {
      if(i==cant){
        return;
      }
      if(elemento.thumbnail === null){
        elemento.thumbnail = "/imagenes/img_logoDefaultGame.png";
      }
      if(category==="popularGames"){
        if(elemento.name==="Fragile Ball" || elemento.name==="Dragon Attack - Tower Defense" || elemento.name==="4 in a row 3D RTX" || elemento.name==="Cute Elements" || elemento.name==="slime.io" || elemento.name==="Castle Puzzle" || elemento.name==="Bottle Tap" || elemento.name==="Golf Royale" || elemento.name==="SpaceTown" || elemento.name==="Fishing Mania" || elemento.name==="Grass Cutter" || elemento.name==="Jelly Shift2"){
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
      }
      if(category==="newGames"){
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
      if(category === elemento.category.toLowerCase()){
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
  }
  }

  
loadGamesJSON();

//minigame
buttonGame = document.getElementById('mainButton');

if(buttonGame != null){
  buttonGame.addEventListener('click', function() {
  document.getElementById('miniGameContainer').classList.toggle("hidden");
});
}

