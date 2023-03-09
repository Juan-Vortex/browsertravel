const mapa = document.getElementById("map");
mapa.style.display = "none";
const btnConsultar = document.getElementById("btnConsultar");
btnConsultar.style.display = "none";
const btnMiami = document.getElementById("btnMiami");
const btnOrlando = document.getElementById("btnOrlando");
const btnNewyork = document.getElementById("btnNewyork");
const textHumedad = document.getElementById("textHumedad");
textHumedad.style.display = "none";

function cargaMapa(lat, lon, nombreCiudad){

    mapa.style.display = "block";
    btnConsultar.style.display = "inline";
    btnMiami.style.display = "none";
    btnOrlando.style.display = "none";
    btnNewyork.style.display = "none";

    // usamos el mapa de openstreetmap
    const tileProvide = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    // definimos las coordenadas
    var map = L.map('map').setView([lat, lon], 11);

    // cargamos el mapa
    L.tileLayer(tileProvide, {
        maxZoom: 18,
    }).addTo(map);

    window.scroll(0, 1000);

    var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=886705b4c1182eb1c69f28eb8c520e20'
    var valorHumedad = 0;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            textHumedad.style.display = "inline";
            textHumedad.innerHTML = "Humedad en " + nombreCiudad + " : " + response.main.humidity
            valorHumedad = response.main.humidity;

            // agrega historial
            var datos = new FormData();
            datos.append('ciudad', nombreCiudad);
            datos.append('humedad', valorHumedad);
            fetch('addHistorial.php', {
                    method: 'POST',
                    body: datos
                })
                .catch(error => console.log(error))

        })

    

}

function consulta() {

    btnConsultar.style.display = "none";
    mapa.style.display = "none";
    btnMiami.style.display = "inline";
    btnOrlando.style.display = "inline";
    btnNewyork.style.display = "inline";
    textHumedad.style.display = "none";

    window.scroll(100, 0);
    setTimeout(() => {
        window.location.reload();
    }, 600);
}

