const tilesProvider = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

// FASE 1
let mymap = L.map('myMap').setView([41.387058, 2.169986], 16);

L.tileLayer(tilesProvider, {
    maxZoom: 18
}).addTo(mymap);

// FASE 2
let marker = L.marker([41.38693236400155, 2.1660134754030573]).addTo(mymap);

// FASE 3

let popup = L.popup();

mymap.on("click", e => {
    marker.bindPopup("<b>Restaurant Centfocs</b><br>Restaurante mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona").openPopup();
});

