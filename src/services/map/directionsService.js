export const initializeDirectionsServices = (routesLibrary) => {
  if (!routesLibrary) return null;

  return {
    directionsService: new routesLibrary.DirectionsService(),
    directionsRenderer: new routesLibrary.DirectionsRenderer(),
  };
};