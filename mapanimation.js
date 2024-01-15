

mapboxgl.accessToken =""

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-71.104081, 42.365554],
    zoom: 10,
});

// disable the trace start button
function deshabilitarBoton() {
    document.getElementById("button").disabled = true;
}