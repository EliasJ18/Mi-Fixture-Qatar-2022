const fragment = document.createDocumentFragment();
// Trabajando y llamando a los elementos del html para los jugadores del API
const listaJugadoresYimg = document.getElementById("listaJugadoresYimg");



// funcion para los jugadores
const callJugAPI = () => {
    fetch("https://localhost:44308/api/Jugadores")
    .then(res => res.json())
    .then(data => {

        
        for(i = 0; i < data.length; i++){
            // console.log(data[i]);
            const tituloH3 = document.createElement("h3");
            
            const removerEspacios = () => {
                let nombresJug = data[i].nombre; 
              
                let nombSinEspacio =  
                    nombresJug.split(" ").join("");

                    return nombSinEspacio.split("-").join("") + data[i].id;
            }

            var JugID = "jug" + removerEspacios();
            tituloH3.setAttribute('id', JugID);
            tituloH3.innerHTML = data[i].nombre + ', ' + "Edád: " + data[i].edad;
            fragment.appendChild(tituloH3);
            
            listaJugadoresYimg.appendChild(fragment);
            
            var ImgID = "img" + removerEspacios();
            const imgJugador = document.createElement("img");
            imgJugador.setAttribute('id', ImgID)
            imgJugador.src = 'Jugadores Imágenes/' + data[i].imagen;

            listaJugadoresYimg.appendChild(imgJugador);
    }
  }).catch(e => console.error(new Error(e)));

}

callJugAPI();



// Funcion para mostrar los grupos, imágenes y Selecciones nacionales que integran los grupos
// Trabajando y llamando a los elementos del html para los grupos del API
const accordionPanel = document.getElementById("firstGroupAccordionPanelsStayOpenExample");
const accordionPanelDos = document.getElementById("secondGroupAccordionPanelsStayOpenExample");

const callGroupsAPI = () => {
    fetch("https://localhost:44308/api/Fgrupos")
    .then(res => res.json())
    .then(data => {

      // Todo lo comentado en esta funcion corresponde a cuando se trabajaba con
      // el endpoint MostrarSEGrupos (código incoompleto)

      // let gruposArr = [];

      // for(n = 0; n < data.length; n++){
      //   gruposArr.push(data[n].grupos)
      // }
      
      //  var grupoSinRepetir = [... new Set(gruposArr)];

        for(i = 0; i < data.length; i++){
          
          if ([i] < 4) {
            const divContainer = document.createElement("div");
            divContainer.setAttribute("class", "accordion-item")
            divContainer.innerHTML = `<h2 class="accordion-header" id="panelsStayOpen-heading${+ (i+1)}">
            <button class="bg-warning accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${+ (i+1)}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${+ (i+1)}">
              ${data[i].grupos}
            </button>
          </h2>
          <div id="panelsStayOpen-collapse${+ (i+1)}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${+ (i+1)}">
            <div class="accordion-body">
            
            </div>
          </div>`

            accordionPanel.appendChild(divContainer);

          } else if ([i] <= 7) {
        
            const divContainerDos = document.createElement("div");
            divContainerDos.setAttribute("class", "2acordiones accordion-item")
            divContainerDos.innerHTML = `<h2 class="accordion-header" id="panelsStayOpen-heading${+ (i+1)}">
            <button class="bg-warning accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${+ (i+1)}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${+ (i+1)}">
            ${data[i].grupos}
            </button>
          </h2>
          <div id="panelsStayOpen-collapse${+ (i+1)}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${+ (i+1)}">
            <div id="paises${+ (i+1)}" class="accordion-body">
            
            </div>
          </div>
        </div>`

            accordionPanelDos.appendChild(divContainerDos);

      }
        
    }

  }).catch(e => console.error(new Error(e)));

}

callGroupsAPI();


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