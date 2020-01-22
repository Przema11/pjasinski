require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
    let map1 = new Map({basemap:"topo"});
    let map2 = new Map({besemap:"satellite"});
    let map3 = new Map({besemap:"osm"});
    let mapContainer= new MapView({
        container:"cc2",
        map: map1
    })
});
