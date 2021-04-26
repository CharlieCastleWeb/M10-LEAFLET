const tilesProvider = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

let mymap = L.map('myMap').setView([41.387058, 2.169986], 16);

L.tileLayer(tilesProvider, {
    maxZoom: 18
}).addTo(mymap);

// NIVEL 3 - Crear marcador personalizado
let myIcon = L.icon({
    iconUrl: "img/location.png",
    iconSize: [40, 40],
    popupAnchor:  [0, -20]
});

//FASE 1
/* mymap.on("click", e => {
    popup
        .setLatLng(e.latlng)
        .setContent("Mis coordenadas son: " + e.latlng.toString())
        .openOn(mymap);
});*/

//FASE 2

let marker = {};

mymap.on("click", e => {
    // Elimina marcadores existentes
    mymap.removeLayer(marker);
    
    // Crea marcador nuevo y asigna popup
    marker = L.marker(e.latlng, {icon:myIcon}).bindPopup("Mis coordenadas son: " + e.latlng.toString());
    
    // Muestra popup automáticamente al crear el marcador
    marker.on("add", function(e){
       e.target.openPopup();
    });
    
    // Muestra el marcador
    marker.addTo(mymap);

});