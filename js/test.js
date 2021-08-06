const server = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile";


const drawBaseMap = () => {
    var map = L.map('map').setView([27,70],10);
    L.tileLayer(`${server}/{z}/{y}/{x}`).addTo(map);
    return map;
};

const onLoad = () => {
    map = drawBaseMap();

    fetch('/assets/rivers.json')
        .then(response => response.json())
        .then(data => {
            var stateLayer = new L.geoJSON(data);
            stateLayer.setStyle({
                "color": "#000000",
                "weight": 2,
                "fill": false,
                "opacity": 1.0
            });
            stateLayer.addTo(map);
        });

        fetch('/assets/border.json')
        .then(response => response.json())
        .then(data => {
            var stateLayer = new L.geoJSON(data);
            stateLayer.setStyle({
                "color": "blue",
                "weight": 1,
                "fill": false,
                "opacity": 1.0
            });
            stateLayer.addTo(map);
        });
}

// $.onload(onLoad);