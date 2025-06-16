export class OpenTripService {
  constructor() {
    this.endpoint = 'https://api.opentripmap.com/0.1/en/places';
    this.key = import.meta.env.VITE_TRIPMAP_KEY;
  }

  async searchPlaces(name) {
    const url = `${this.endpoint}/autosuggest?name=${encodeURIComponent(name)}&apikey=${this.key}&limit=20`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Places fetch failed');
    const data = await res.json();
    return data.features.map(f => ({
      id: f.properties.xid,
      title: f.properties.name,
      kinds: f.properties.kinds,
      lat: f.geometry.coordinates[1],
      lon: f.geometry.coordinates[0],
    }));
  }
}