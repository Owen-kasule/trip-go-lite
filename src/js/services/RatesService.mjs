export class RatesService {
  constructor() {
    this.endpoint = 'https://api.exchangeratesapi.io/latest';
    this.key = import.meta.env.VITE_RATES_KEY; // add to .env
  }

  async getExchangeRates(baseCurrency = 'USD') {
    const url = `${this.endpoint}?base=${baseCurrency}&apikey=${this.key}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Exchange rates fetch failed');
    const data = await res.json();
    return data.rates;
  }
}