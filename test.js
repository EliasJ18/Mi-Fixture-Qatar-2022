const accordionPanel = document.getElementById("firstGroupAccordionPanelsStayOpenExample");
const accordionPanelDos = document.getElementById("secondGroupAccordionPanelsStayOpenExample");

const callGroupsAPI = () => {
  fetch("https://localhost:44308/api/Fgrupos")
  .then(res => res.json())
  .then(data => {

    // Todo lo comentado en esta funcion corresponde a cuando se trabajaba con
    // el endpoint MostrarSEGrupos (código incompleto)

    // let gruposArr = [];

    // for(n = 0; n < data.length; n++){
    //   gruposArr.push(data[n].grupos)
    // }
    
    //  var grupoSinRepetir = [... new Set(gruposArr)];

      for(i = 0; i < data.length; i++){
        
          const divContainer = document.createElement("div");
          divContainer.setAttribute("class", "accordion-item")
          divContainer.innerHTML = `<h2 class="accordion-header" id="panelsStayOpen-heading${+ (i+1)}">
          <button class="bg-warning accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${+ (i+1)}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${+ (i+1)}">
            ${data[i].grupos}
          </button>
        </h2>
        <div id="panelsStayOpen-collapse${+ (i+1)}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${+ (i+1)}">
          <div id="paisesGrupo${+ (i+1)}" class="accordion-body">
          
          </div>
        </div>`

          accordionPanel.appendChild(divContainer);
      
  }

}).catch(e => console.error(new Error(e)));

}

callGroupsAPI();


const paisesFifa = document.getElementById("paisesGrupo1");

const callCountriesAPI = () => {
  fetch("https://localhost:44308/api/Paises")
  .then(res => res.json())
  .then(data => {

    for (i = 0; i < data.length; i++) {

      const tituloH6 = document.createElement("h6");
      tituloH6.innerText = "Hola";

      paisesFifa.appendChild(tituloH6);
    }
    
  }).catch(e => console.error(new Error(e)));

}

callCountriesAPI();