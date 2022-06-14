// const listApi = document.getElementById('listApi');
// const listApi2 = document.getElementById("listApi2");
// const listaDeJugadores = document.querySelector("h1");
const listaJugadores = document.getElementById("listaJugadores");
// const listaDeMemphis = document.getElementById("listaDeMemphis");
// const imgJugador = document.createElement("img");
const fragment = document.createDocumentFragment();

// const callAPI = () => {
//     fetch("https://localhost:44308/api/Clubes/6")
//     .then(res => res.json())
//     .then(data => {
//         listApi.innerText = JSON.stringify(data.club);
//     })
//     .catch(e => console.error(new Error(e)));
//     fetch("https://localhost:44308/api/Clubes/5")
//     .then(res => res.json())
//     .then(data => {
//         listApi2.innerText = JSON.stringify(data.club);
//     })
//     .catch(e => console.error(new Error(e)));

// }


const callJugAPI = () => {
    fetch("https://localhost:44308/api/Jugadores")
    .then(res => res.json())
    .then(data => {

        for(i = 0; i < data.length; i++){
            // console.log(data[i]);
            const imgJugador = document.createElement("img");
            imgJugador.src = 'Jugadores Imágenes/' + data[i].imagen;
            document.querySelector('.jugadorPic').appendChild(imgJugador);

            const tituloUnoH3 = document.createElement("h3");
            tituloUnoH3.textContent = data[i].nombre + ', ' + "Edád: " + data[i].edad;
            fragment.appendChild(tituloUnoH3);
            
            listaJugadores.appendChild(fragment);
            
            // imgMemphis.src = 'Jugadores Imágenes/MEMPHIS-DEPAYimg.png';
            // document.querySelector('.memphisPic').appendChild(imgMemphis);
            // const tituloDosH3 = document.createElement("h3");
            // tituloDosH3.textContent = data[7].nombre;
            // fragment.appendChild(tituloDosH3);

            // listaDeMemphis.appendChild(tituloDosH3);

            // console.log(fragment)
    }

    })
    .catch(e => console.error(new Error(e)));

}

callJugAPI();