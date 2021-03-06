

var myLatlng = new google.maps.LatLng(48.3333, 16.35);
// define map properties
var myOptions = {
  zoom: 3,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  disableDefaultUI: false,
  scrollwheel: true,
  draggable: true,
  navigationControl: true,
  mapTypeControl: false,
  scaleControl: true,
  disableDoubleClickZoom: false
};

// we'll use the heatmapArea 
var map = new google.maps.Map($("#heatmapArea"), myOptions);

// let's create a heatmap-overlay
// with heatmap config properties
var heatmap = new HeatmapOverlay(map, {
    "radius":20,
    "visible":true, 
    "opacity":60
});
 
// here is our dataset
// important: a datapoint now contains lat, lng and count property!
var testData={
        max: 46,
        data: [{lat: 33.5363, lng:-117.044, count: 1},{lat: 33.5608, lng:-117.24, count: 1},{lat: 38, lng:-97, count: 1},{lat: 38.9358, lng:-77.1621, count: 1}]
};

// now we can set the data
google.maps.event.addListenerOnce(map, "idle", function(){
    // this is important, because if you set the data set too early, the latlng/pixel projection doesn't work
    heatmap.setDataSet(testData);
});
 

