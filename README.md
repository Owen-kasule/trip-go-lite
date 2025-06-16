# Trip-Go Lite

Trip-Go Lite is a lightweight web application designed to help users explore cities and attractions. The application allows users to search for places, view them on a map, and manage their itinerary.

## Project Structure

```
trip-go-lite
├── .env                     # Environment variables for API keys
├── index.html               # Home page with search functionality
├── map.html                 # Full-screen map view with itinerary panel
├── src
│   ├── css
│   │   ├── variables.css     # CSS variables for styling
│   │   └── main.css          # Global styles and keyframes
│   ├── js
│   │   ├── services
│   │   │   ├── OpenTripService.mjs  # API wrapper for OpenTripMap
│   │   │   └── RatesService.mjs     # Service for currency exchange rates (not yet implemented)
│   │   ├── ui
│   │   │   ├── CardList.mjs          # Component for rendering search results
│   │   │   └── MapView.mjs           # Component for managing the map view (not yet implemented)
│   │   ├── utils.mjs                  # Utility functions (not yet implemented)
│   │   └── main.js                    # Entry point for the application
│   └── assets                         # Folder for icons and placeholder images
├── package.json                       # npm configuration file
├── vite.config.js                     # Vite configuration settings
└── README.md                          # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/trip-go-lite.git
   cd trip-go-lite
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```
   VITE_TRIPMAP_KEY=your_opentripmap_api_key
   VITE_RATES_KEY=your_exchangerates_key
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Development Roadmap

### Week 5
- Implement search results and card grid
- Fetch OpenTripMap autosuggest
- Basic card “Add to Plan” functionality using localStorage
- Create CurrencyRates service for fetching latest exchange rates

### Week 6
- Develop map page using Leaflet with pins from the itinerary
- Implement Day-Plan sidebar with reorder/remove functionality
- Add live exchange-rate widget for cost estimates

### Week 7
- Create user profile for saving itineraries
- Add animations for card hover and page transitions
- Conduct accessibility scan and add SEO tags
- Deploy to Netlify or GitHub Pages and finalize the project

## Contributing

Feel free to submit issues or pull requests to improve the project. Happy coding!