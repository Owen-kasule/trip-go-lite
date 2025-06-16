export default class MapView {
  constructor(mapElementId) {
    this.mapElement = document.getElementById(mapElementId);
    this.map = null;
  }

  initMap(lat, lon) {
    this.map = L.map(this.mapElement).setView([lat, lon], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);
  }

  addMarker(lat, lon, title) {
    L.marker([lat, lon]).addTo(this.map)
      .bindPopup(title)
      .openPopup();
  }

  setView(lat, lon) {
    this.map.setView([lat, lon], 13);
  }
}