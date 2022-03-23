// Initialize and add the map
function initMap() {

  const klooster = { lat: 40.62776987239145, lng: 14.373167330685085 };
  const oobimine = { lat: 40.60804048816892, lng: 14.348054269951392 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: klooster,
  });

  const marker = new google.maps.Marker({
    position: klooster,
    map: map,
    label: 'Tseremoonia'
  });

  const marker2 = new google.maps.Marker({
    position: oobimine,
    map: map,
    label: 'Ööbimine'
  });
}
