const markers = [];
mapboxgl.accessToken =  "YOUR_MAPBOX_API_TOKEN_HERE";

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-71.104081, 42.365554],
    zoom: 10,
});

async function run() {
    const locations = await getBusLocations();
    locations.forEach((location, index) => {
        const longitude = location.attributes.longitude;
        const latitude = location.attributes.latitude;
        if (markers[index]) {
            markers[index].setLngLat([longitude, latitude]);
        } else {
            const marker = new mapboxgl.Marker({color: "red"})
                .setLngLat([longitude, latitude])
                .addTo(map);
            markers.push(marker);
        }
    });
    setTimeout(run, 2000);
    document.getElementById("button").disabled = true;
}

async function getBusLocations() {
    const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
}