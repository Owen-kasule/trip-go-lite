export function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export function alertMessage(message) {
  alert(message);
}

export function getItinerary() {
  const data = localStorage.getItem('itinerary');
  return data ? JSON.parse(data) : [];
}

export function saveItinerary(list) {
  localStorage.setItem('itinerary', JSON.stringify(list));
}

export function addToItinerary(item) {
  const list = getItinerary();
  if (!list.find(i => i.id === item.id)) {
    list.push(item);
    saveItinerary(list);
    return true;
  }
  return false;
}