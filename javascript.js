var marker;

function initMap() {
  var shamrock = {lat: 52.972241, lng: -9.422687};
  var guinness = {lat: 52.972241, lng: -9.422687}; 
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 52.972241, lng: -9.422687},
	mapTypeControl: true,
	mapTypeControlOptions: {
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
  }
});

marker = new google.maps.Marker({
  map: map,
  title: 'Cliffs of Moher',
  draggable: true,
  animation: google.maps.Animation.DROP,
  position: {lat: 52.972241, lng: -9.422687}
});
marker.addListener('click', toggleBounce);
marker.addListener('click', function() {
  infowindow2.open(map, marker);
});

 var infowindow = new google.maps.InfoWindow({
  content: "Irish"
});

  var infowindow1 = new google.maps.InfoWindow({
  content: "Whiskey"
});

var infowindow2 = new google.maps.InfoWindow({
  content: "Clare"
});

var marker1 = new google.maps.Marker({
  position: shamrock,
  map: map,
  title: 'Cliffs of Moher'
});
marker1.addListener('click', function() {
  infowindow.open(map, marker1);
});

var marker2 = new google.maps.Marker({
  position: guinness,
  map: map,
  title: 'Gift Shop',
});
marker2.addListener('click', function() {
  infowindow1.open(map, marker2);
});
}
function toggleBounce() 
{
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}