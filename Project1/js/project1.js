// Patricia Robinson Geog. 575 Lab 1
// create the map variable and set lat, long & zoom level
var map = L.map('map').setView([19.973349, -76.728516], 2);
										//([latitude, longitude], zoom level);
	L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
	}).addTo(map);
	/*L.marker([51.5, -0.09]).addTo(mymap)
		.bindPopup("<b>Hello world!</b><br />I am a popup.");*/
	var shapeStyle = {
		color: 'blue', //border color
		fillColor: '#f03',
		weight: 0.5, //refers to the border thickness
		fillOpacity: 0.5
	};
	
	var popup = L.popup();

//AJA
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(map);
	}
	map.on('click', onMapClick);

function jsAjax(){
    // Step 1: Create the request 
    var ajaxRequest = new XMLHttpRequest();
    //Step 2: Create an event handler to send received data to a callback function
    ajaxRequest.onreadystatechange = function(){
        if (ajaxRequest.readyState === 4){
            callback(ajaxRequest.response);
        };
    };
    //Step 3: Open the server connection
    ajaxRequest.open('GET', 'data/Species.geojson', true);
    //Step 4: Set the response data type
    ajaxRequest.responseType = "json";
    //Step 5: Send the request
    ajaxRequest.send();
};

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response);
};
window.onload = jsAjax();
	var geojson = {"type": "FeatureCollection","features": [{"type": "Feature","properties": {"2004": 372,"2010": 426,"2015": 486,"2016": 512,"2017": 512,"2018": 540,"2019": 556,"AreaCode": 32,"Country": "Argentina"},"geometry": {"type": "Point","coordinates": [-63.6167,-38.4161]}},{"type": "Feature","properties": {"2004": 300,"2010": 326,"2015": 432,"2016": 462,"2017": 462,"2018": 472,"2019": 486,"AreaCode": 68,"Country": "Bolivia"},"geometry": {"type": "Point","coordinates": [-63.5887,-16.2902]}},{"type": "Feature","properties": {"2004": 1394,"2010": 1546,"2015": 1932,"2016": 1946,"2017": 1980,"2018": 2000,"2019": 2078,"AreaCode": 76,"Country": "Brazil"},"geometry": {"type": "Point","coordinates": [-51.9253,-14.235]}},{"type": "Feature","properties": {"2004": 134,"2010": 184,"2015": 234,"2016": 236,"2017": 234,"2018": 248,"2019": 262,"AreaCode": 84,"Country": "Belize"},"geometry": {"type": "Point","coordinates": [-88.4976,17.1899]}},{"type": "Feature","properties": {"2004": 148,"2010": 154,"2015": 194,"2016": 236,"2017": 244,"2018": 296,"2019": 314,"AreaCode": 124,"Country": "Canada"},"geometry": {"type": "Point","coordinates": [-106.3468,56.1304]}},{"type": "Feature","properties": {"2004": 246,"2010": 290,"2015": 364,"2016": 392,"2017": 394,"2018": 434,"2019": 440,"AreaCode": 152,"Country": "Chile"},"geometry": {"type": "Point","coordinates": [-71.543,-35.6751]}},{"type": "Feature","properties": {"2004": 1186,"2010": 1362,"2015": 1502,"2016": 1654,"2017": 1670,"2018": 1702,"2019": 1760,"AreaCode": 170,"Country": "Colombia"},"geometry": {"type": "Point","coordinates": [-74.2973,4.5709]}},{"type": "Feature","properties": {"2004": 462,"2010": 570,"2015": 646,"2016": 674,"2017": 680,"2018": 692,"2019": 700,"AreaCode": 188,"Country": "Costa Rica"},"geometry": {"type": "Point","coordinates": [-83.7534,9.7489]}},{"type": "Feature","properties": {"2004": 544,"2010": 608,"2015": 674,"2016": 680,"2017": 678,"2018": 696,"2019": 696,"AreaCode": 192,"Country": "Cuba"},"geometry": {"type": "Point","coordinates": [-77.7812,21.5218]}},{"type": "Feature","properties": {"2004": 4302,"2010": 4510,"2015": 4616,"2016": 4706,"2017": 4716,"2018": 4736,"2019": 4776,"AreaCode": 218,"Country": "Ecuador"},"geometry": {"type": "Point","coordinates": [-78.1834,-1.8312]}},{"type": "Feature","properties": {"2004": 1496,"2010": 1886,"2015": 2218,"2016": 2304,"2017": 2324,"2018": 2426,"2019": 2568,"AreaCode": 484,"Country": "Mexico"},"geometry": {"type": "Point","coordinates": [-102.5528,23.6345]}},{"type": "Feature","properties": {"2004": 620,"2010": 694,"2015": 746,"2016": 762,"2017": 766,"2018": 774,"2019": 790,"AreaCode": 591,"Country": "Panama"},"geometry": {"type": "Point","coordinates": [-80.7821,8.538]}},{"type": "Feature","properties": {"2004": 2286,"2010": 2304,"2015": 2598,"2016": 2958,"2017": 3026,"2018": 3080,"2019": 3200,"AreaCode": 840,"Country": "United States of America"},"geometry": {"type": "Point","coordinates": [-95.7129,37.0902]}},{"type": "Feature","properties": {"2004": 62,"2010": 66,"2015": 106,"2016": 108,"2017": 116,"2018": 126,"2019": 134,"AreaCode": 850,"Country": "United States Virgin Islands"},"geometry": {"type": "Point","coordinates": [-64.8963,18.3358]}},{"type": "Feature","properties": {"2004": 438,"2010": 540,"2015": 624,"2016": 640,"2017": 656,"2018": 670,"2019": 690,"AreaCode": 862,"Country": "Venezuela"},"geometry": {"type": "Point","coordinates": [-66.5897,6.4238]}}]}
	L.geoJSON(geojson).addTo(map);
								
//import GeoJSON data for the well dataset
function getData(map){
  $.ajax("data/Species.geojson", {
    dataType: "json"
    ,success: function(response){
      var layerWells = createPropSymbols(response, map, processData(response));
      getDataMinMax(map, processData(response)[0]);
      addLayerControl(layerWells);
      createSequenceControls(map, response, processData(response));
    }
  });
};

//create proportional symbols
function createPropSymbols(data, map, attributes){
  //create a Leaflet GeoJSON layer and add it to the map
  var points = L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      return pointToLayer(feature, latlng, attributes);
    }
  }).addTo(map);
  return points;
};

function createPopup(properties, attribute, layer, radius) {
    
    //format population values with commas
    var pop = numberWithCommas(properties.Population2012);
    
    //add city to popup content string
    var popupContent = "<p><b>City:</b> " + properties.City + "</p>" + "<p><b>Population: </b>" + pop;
                      
    //add formatted attribute to panel content string
    var time = attribute.split("_")[1];
    var ampm = attribute.split("_")[2];
    popupContent += "<p><b>Number of birders starting between " + time + " " + ampm + ":</b> " + Math.round(properties[attribute]) + "</p>";
            
    //replace the layer popup
    layer.bindPopup(popupContent, {
        offset: new L.Point(0, -radius),
        minWidth: 320
    });
}

function pointToLayer(feature, latlng, attributes) {
    
    //determine which attribute to visualize
    var attribute = attributes[0];

    //create marker options
    var markerOptions = {
        fillColor: "#FFC300",
        color: "#BBB9B9",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    
    //for each feature, determine value for selected attribute
    var attValue = number(feature.properties[attribute]);
            
    markerOptions.radius = calcPropRadius(attValue);
    
    var layer = L.circleMarker(latlng, markerOptions);
    
    createPopup(feature.properties, attribute, layer, markerOptions.radius);
    
    //return circle marker to pointToLayer option
    return layer;
}


$(document).ready(getData(map));