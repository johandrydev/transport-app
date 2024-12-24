const config = {
  googleMaps: {
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    mapId: import.meta.env.VITE_GOOGLE_MAPS_MAP_ID,
  },
  baseTransportApiUrl: import.meta.env.VITE_BASE_TRANSPORT_API_URL,
};

export default config;