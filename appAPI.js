const fragment = document.createDocumentFragment();
// Trabajando y llamando a los elementos del html para los jugadores del API
const listaJugadoresYimg = document.getElementById("listaJugadoresYimg");



// funcion para los jugadores
const callJugAPI = () => {
    fetch("https://localhost:44308/api/jugadores/datos-de-jugadores")
    .then(res => res.json())
    .then(data => {

        
        for(i = 0; i < data.length; i++){
            // console.log(data[i]);
            const tituloH3 = document.createElement("h3");
            const tituloH2 = document.createElement("h2");
            const tituloH2club = document.createElement("h2");
            
            const removerEspacios = () => {
                let nombresJug = data[i].nombre; 
              
                let nombSinEspacio =  
                    nombresJug.split(" ").join("");

                    return nombSinEspacio.split("-").join("") + data[i].id;
            }

            var jugID = "jug" + removerEspacios();
            tituloH3.setAttribute('id', jugID);
            tituloH3.innerHTML = data[i].nombre + ', ' + "Edád: " + data[i].edad;
            fragment.appendChild(tituloH3);
            
            listaJugadoresYimg.appendChild(fragment);
            
            var imgID = "img" + removerEspacios();
            const imgJugador = document.createElement("img");
            imgJugador.setAttribute('id', imgID)
            imgJugador.src = 'Jugadores Imágenes/' + data[i].imagen;

            listaJugadoresYimg.appendChild(imgJugador);

            var posID = "pos" + removerEspacios();
            tituloH2.setAttribute('id', posID);
            tituloH2.innerHTML = "<br> Posición: " + data[i].posición;
            listaJugadoresYimg.appendChild(tituloH2);

            var clubID = "club" + removerEspacios();
            tituloH2club.setAttribute("id", clubID);
            tituloH2club.innerHTML = `<br>Club actual: ${data[i].club}`;

            listaJugadoresYimg.appendChild(tituloH2club);

            

    }
  }).catch(e => console.error(new Error(e)));

}

callJugAPI();



// Funcion para mostrar los grupos, imágenes y Selecciones nacionales que integran los grupos
// Trabajando y llamando a los elementos del html para los grupos del API
const accordionPanel = document.getElementById("firstGroupAccordionPanelsStayOpenExample");
const accordionPanelDos = document.getElementById("secondGroupAccordionPanelsStayOpenExample");

    const gruposYPaises = [{
      "Idgrupo": 1,
      "Grupo": "Grupo A",
      "selecciones": [{
          "Pais": "Qatar",
          "imagen": "QatarFlag.png"
        },
        {
          "Pais": "Ecuador",
          "imagen": "EcuadorFlag.png"
        },
        {
          "Pais": "Senegal",
          "imagen": "SenegalFlag.png"
        },
        {
          "Pais": "Holanda",
          "imagen": "HolandaFlag.png"
        }
      ]
    },
    {
      "Idgrupo": 2,
      "Grupo": "Grupo B",
      "selecciones": [{
          "Pais": "Inglaterra",
          "imagen": "InglaterraFlag.png"
        },
        {
          "Pais": "Irán",
          "imagen": "IranFlag.png"
        },
        {
          "Pais": "EE.UU",
          "imagen": "UsaFlag.png"
        },
        {
          "Pais": "Gales",
          "imagen": "GalesFlag.png"
        }
      ]
    }
  ];

  for (i = 0; i < gruposYPaises.length; i++) {
 
          const divContainer = document.createElement("div");
          divContainer.setAttribute("class", "accordion-item");
          divContainer.innerHTML = `<h2 class="accordion-header" id="panelsStayOpen-heading${gruposYPaises[i].Idgrupo}">
          <button id="Grupoid${gruposYPaises[i].Idgrupo}" class="bg-warning accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${gruposYPaises[i].Idgrupo}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${gruposYPaises[i].Idgrupo}">
          ${gruposYPaises[i].Grupo}
          </button>
        </h2>  
        <div id="panelsStayOpen-collapse${gruposYPaises[i].Idgrupo}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${gruposYPaises[i].Idgrupo}">
            <div class="accordion-body">

            ${gruposYPaises[i].selecciones[0].Pais} 
            <br> <hr> 
            ${gruposYPaises[i].selecciones[1].Pais} 
            <br> <hr>
            ${gruposYPaises[i].selecciones[2].Pais} 
            <br> <hr> 
            ${gruposYPaises[i].selecciones[3].Pais}
            </div>
          </div>`
          accordionPanel.appendChild(divContainer);
         

  }

// Función para los paises
// Trabajando y llamando a los elementos del html para los paises del API

const paises = document.getElementById("paises1");

const callCountriesAPI = () => {
  fetch("https://localhost:44308/api/Paises")
  .then(res => res.json())
  .then(data => {

    
  }).catch(e => console.error(new Error(e)));

}

// callCountriesAPI();


// Trabajando con las ciudades del API
const seccionCiudades = document.getElementById("seccionCiudades");

const callCitiesAPI = () => {
  fetch("https://localhost:44308/api/Ciudades")
  .then(res => res.json())
  .then(data => {
    for(i = 0; i < data.length; i++){
      const ciudadH6 = document.createElement("h2");
      ciudadH6.setAttribute("id", "city");
      ciudadH6.innerText = "La ciudad de " + data[i].nombre;

      seccionCiudades.appendChild(ciudadH6);
    }
    
  }).catch(e => console.error(new Error(e)));

}

callCitiesAPI();

const seccionTotalTeamStats = document.getElementById("seccionTotalTeamStats");

const callEstTotEquiposAPI = () => {
  fetch("https://localhost:44308/api/equipos/estadisticas-totales")
  .then(res => res.json())
  .then(data => {

      for(i = 0; i < data.length; i++){
        
        const totalTeamStatsH4 = document.createElement("h4");
        totalTeamStatsH4.setAttribute("id", "teamStats" + data[i].estTotalEquipoId);
        totalTeamStatsH4.innerText = "La Selección de " + data[i].pais +
        " tiene en total: " + data[i].amarillas + " tarjeta/s amarilla/s, " + 
        data[i].lesionados + " jugador/es lesionado/s, " + data[i].gf + " goles marcados, " + 
        data[i].gc + " goles concedidos, y lleva " + data[i].puntos + " puntos en total.";
  
        seccionTotalTeamStats.appendChild(totalTeamStatsH4);
  }

}).catch(e => console.error(new Error(e)));

}

callEstTotEquiposAPI();

const stadiums = document.getElementById("stadiums");

const callEstadiosAPI = () => {
  fetch("https://localhost:44308/api/Estadios")
  .then(res => res.json())
  .then(data => {

    for (i = 0; i < data.length; i++) {

      const estadiosH4 = document.createElement("h4");
      estadiosH4.setAttribute("id", "estadio" + data[i].idEstadio);
      estadiosH4.innerText = data[i].nombre;

      stadiums.appendChild(estadiosH4);
    }
  }).catch(e => console.error(new Error(e)));
}

callEstadiosAPI();

const divPartidos = document.getElementById("divPartidos");

const callPartidosAPI = () => {
  fetch("https://localhost:44308/api/partidos/informacion")
  .then(res => res.json())
  .then(data => {
    
    for(i = 0; i < data.length; i++) {

      if (data[i].idPartido == 1) {
      const seleccionesH2 = document.createElement("h2");
      seleccionesH2.setAttribute("id", "partido" + data[i].idPartido)
      seleccionesH2.innerHTML = `<img id="ArgFlag" src="/Flags_imagenes/ArgentinaFlag.png" alt="ArgFlag">
      ${data[i].paisA + " - " + data[i].paisB} <img id="PoloniaFlag" src="/Flags_imagenes/PoloniaFlag.png" alt="PolandFlag">`;
      divPartidos.appendChild(seleccionesH2);

      const info = document.createElement("p");
      info.setAttribute("id", "partido" + data[i].idPartido)
      info.innerHTML = `Estado: ${data[i].estado} <br>
      Sede: ${data[i].estadio} <br>
      Fase: ${data[i].fase} <br>
      Clima: ${data[i].clima}`;

      divPartidos.appendChild(info);
    } else if (data[i].idPartido == 2) {
      const seleccionesH2 = document.createElement("h2");
      seleccionesH2.setAttribute("id", "partido" + data[i].idPartido)
      seleccionesH2.innerHTML = `<img id="QatarFlag" src="/Flags_imagenes/QatarFlag.png" alt="QatarFlag">
      ${data[i].paisA + " 0 - 0 " + data[i].paisB} <img id="EcuadorFlag" src="/Flags_imagenes/EcuadorFlag.png" alt="EcuFlag">`;
      divPartidos.appendChild(seleccionesH2);

      const info = document.createElement("p");
      info.setAttribute("id", "partido" + data[i].idPartido)
      info.innerHTML = `Estado: ${data[i].estado} <br>
      Sede: ${data[i].estadio} <br>
      Fase: ${data[i].fase} <br>
      Clima: ${data[i].clima}`;

      divPartidos.appendChild(info);
    }

    else if (data[i].idPartido == 3) {
      const seleccionesH2 = document.createElement("h2");
      seleccionesH2.setAttribute("id", "partido" + data[i].idPartido)
      seleccionesH2.innerHTML = `<img id="EspañaFlag" src="/Flags_imagenes/EspañaFlag.png" alt="EspFlag">
      ${data[i].paisA + " 2 - 2 " + data[i].paisB} <img id="AlemaniaFlag" src="/Flags_imagenes/AlemaniaFlag.png" alt="GermanFlag">`;
      divPartidos.appendChild(seleccionesH2);

      const info = document.createElement("p");
      info.setAttribute("id", "partido" + data[i].idPartido)
      info.innerHTML = `Estado: ${data[i].estado} <br> 
      Sede: ${data[i].estadio} <br>
      Fase: ${data[i].fase} <br>
      Clima: ${data[i].clima}`;

      divPartidos.appendChild(info);
    }
  }

  }).catch(e => console.error(new Error(e)));
}

callPartidosAPI();