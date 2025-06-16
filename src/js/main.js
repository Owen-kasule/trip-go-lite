import { OpenTripService } from './services/OpenTripService.mjs';
import CardList from './ui/CardList.mjs';

const service = new OpenTripService();
const list = new CardList('#results');

async function searchHandler() {
  const query = document.querySelector('#searchInput').value.trim();
  if (!query) return;
  const spots = await service.searchPlaces(query);
  list.render(spots);
}

document.querySelector('#searchBtn').addEventListener('click', searchHandler);
document.querySelector('#searchInput').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') searchHandler();
});