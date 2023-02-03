let map;

function initMap() {
    var center = {lat: 25.5451904, lng: 87.5638688};
    var locations = [
      ['Name Likh do yaha<br>\
      yaha baki sab jo man ho<br>',   25.5565835,87.5549539],
      ['Name Likh do yah<br>\
      yaha baki sab jo man ho<br>',   25.606039,87.552585],
      ['Name Likh do yah<br>\
      yaha baki sab jo man ho<br>',   25.5554367,87.55581],
      ['Name Likh do yah<br>\
      yaha baki sab jo man ho<br>',   25.5365115,87.5889995],
      ['Name Likh do yah<br>\
      yaha baki sab jo man ho<br>',   25.5329923,87.5889063],

    ];
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: center
    });
  var infowindow =  new google.maps.InfoWindow({});
  var marker, count;
  for (count = 0; count < locations.length; count++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[count][1], locations[count][2]),
        map: map,
        title: locations[count][0]
      });
  google.maps.event.addListener(marker, 'click', (function (marker, count) {
        return function () {
          infowindow.setContent(locations[count][0]);
          infowindow.open(map, marker);
        }
      })(marker, count));
    }
  }
window.initMap = initMap;


