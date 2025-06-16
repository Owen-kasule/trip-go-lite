export default class CardList {
  constructor(selector) {
    this.parent = document.querySelector(selector);
  }
  
  render(items) {
    this.parent.innerHTML = items
      .map(
        (it) => `<article class="card">
          <h3>${it.title}</h3>
          <p>${it.kinds.split(',')[0]}</p>
          <button data-id="${it.id}" class="add-btn">Add to Plan</button>
        </article>`
      )
      .join('');
      
    this.parent.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-btn')) {
        // TODO: save to itinerary in localStorage
      }
    });
  }
}