const accordionPanel = document.getElementById("firstGroupAccordionPanelsStayOpenExample");
const accordionPanelDos = document.getElementById("secondGroupAccordionPanelsStayOpenExample");

const callGroupsAPI = () => {
  fetch("https://localhost:44308/api/MostrarSEGrupos")
  .then(res => res.json())
  .then(data => {

    const gruposYPaises = {
      "Idgrupo": 1,
      "Grupo": "Grupo A",
      "selecciones": [{
          "Pais": "Qatar"
        },
        {
          "Pais": "Ecuador"
        },
        {
          "Pais": "Irán"
        },
        {
          "Pais": "Holanda"
        }
      ]
    }
 
          const divContainer = document.createElement("div");
          divContainer.setAttribute("class", "accordion-item")
          divContainer.innerHTML = `<h2 class="accordion-header" id="panelsStayOpen-heading">
          <button id="Grupoid${gruposYPaises.Idgrupo}" class="bg-warning accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse" aria-expanded="true" aria-controls="panelsStayOpen-collapse">
          ${gruposYPaises.Grupo}
          </button>
        </h2>  
        <div id="panelsStayOpen-collapse" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading">
            <div class="accordion-body">
            ${gruposYPaises.selecciones[0].Pais} <br> <hr> ${gruposYPaises.selecciones[1].Pais} <br> <hr>
            ${gruposYPaises.selecciones[2].Pais} <br> <hr> ${gruposYPaises.selecciones[3].Pais}
            </div>
          </div>`
          accordionPanel.appendChild(divContainer);

}).catch(e => console.error(new Error(e)));

}

callGroupsAPI();


// const paisesFifa = document.getElementById("paisesGrupo1");

// const callCountriesAPI = () => {
//   fetch("https://localhost:44308/api/Paises")
//   .then(res => res.json())
//   .then(data => {

//     for (i = 0; i < data.length; i++) {

//       const tituloH6 = document.createElement("h6");
//       tituloH6.innerText = "Hola";

//       paisesFifa.appendChild(tituloH6);
//     }
    
//   }).catch(e => console.error(new Error(e)));

// }

// callCountriesAPI();