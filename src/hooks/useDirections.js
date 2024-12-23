import { useEffect, useState } from 'react';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { initializeDirectionsServices } from '@/services/map/directionsService';

const useDirections = () => {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');

  const [services, setServices] = useState({});
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);

  useEffect(() => {
    if (!map || !routesLibrary) return;

    const { directionsService, directionsRenderer } = initializeDirectionsServices(routesLibrary);
    if (directionsService && directionsRenderer) {
      directionsRenderer.setMap(map);
      setServices({ directionsService, directionsRenderer });
    }
  }, [map, routesLibrary]);

  useEffect(() => {
    if (!services.directionsService || !services.directionsRenderer) return;

    services.directionsService.route({
      origin: "New York, USA",
      destination: "Misuri",
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    }).then((response) => {
      services.directionsRenderer.setDirections(response);
      setRoutes(response.routes);
    });
  }, [services]);

  const selectedRoute = routes[routeIndex];
  const leg = selectedRoute?.legs[0];

  useEffect(() => {
    if (!services.directionsRenderer) return;
    services.directionsRenderer.setRouteIndex(routeIndex);
  }, [services, selectedRoute, map]);

  return {
    routes,
    setRouteIndex,
    selectedRoute,
    leg,
  };
};

export default useDirections;
