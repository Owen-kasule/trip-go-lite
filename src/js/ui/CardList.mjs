import { addToItinerary } from '../utils.mjs';

export default class CardList {
  constructor(selector) {
    this.parent = document.querySelector(selector);
  }

  render(items) {
    this.parent.innerHTML = items.map(it => `
      <article class="card">
        <h3>${it.title}</h3>
        <p>${it.kinds.split(',')[0]}</p>
        <button data-id="${it.id}" class="add-btn">Add to Plan</button>
      </article>`).join('');
  }

  bindEvents(items) {
    this.parent.addEventListener('click', e => {
      if (!e.target.classList.contains('add-btn')) return;
      const spot = items.find(it => it.id === e.target.dataset.id);
      if (addToItinerary(spot)) {
        alert(`${spot.title} added to your plan!`);
      } else {
        alert(`${spot.title} is already in your plan.`);
      }
    });
  }

  init(items) {
    this.render(items);
    this.bindEvents(items);
  }
}