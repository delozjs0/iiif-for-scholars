var map;

map = L.map('map', {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0,
});

// use this method for two requests of the same image with different parameters
var iiifUrl = 'https://libimages.princeton.edu/loris/pudl0033/2007/04003/00000001.jp2/info.json';

var layer1 = L.tileLayer.iiif(iiifUrl, {
    fitBounds: false,
  }
).addTo(map);

var layer2 = L.tileLayer.iiif(iiifUrl, {
    quality: 'gray'
  }
).addTo(map);


// use this method to layer two separate image requestsinfo.json
// var layer1 = L.tileLayer.iiif('https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=400&height=666&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FGxSlf0622_m1I7Ht8nTTCQ%2Flarge.jpg', {
//     fitBounds: false,
//   }
// ).addTo(map);

// var layer2 = L.tileLayer.iiif(
//   'https://static01.nyt.com/images/2014/01/21/arts/21GUGGENHEIM/21GUGGENHEIM-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
// ).addTo(map);

L.control.sideBySide(layer1, layer2).addTo(map);
