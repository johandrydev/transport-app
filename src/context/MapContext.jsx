import React, { createContext, useReducer, useEffect } from "react";
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { fetchRoutes, fetchTruckServices } from "@/services/map/routesServices";

const MapContext = createContext();

const initialState = {
  origin: 'Las Vegas',
  destination: 'Colorado',
  routes: [],
  truckServices: [],
  routeIndex: 0,
};

const mapReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORIGIN":
      return { ...state, origin: action.payload };
    case "SET_DESTINATION":
      return { ...state, destination: action.payload };
    case "SET_ROUTES":
      return { ...state, routes: action.payload };
    case "SET_ROUTE_INDEX":
      return { ...state, routeIndex: action.payload };
    case "SET_TRUCK_SERVICES":
      return { ...state, truckServices: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const MapProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, initialState);

  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionService, setDirectionService] = React.useState();
  const [directionsRenderer, setDirectionsRenderer] = React.useState();

  useEffect(() => {
    if (!map || !routesLibrary) return;

    const service = new routesLibrary.DirectionsService();
    const renderer = new routesLibrary.DirectionsRenderer();
    renderer.setMap(map);

    setDirectionService(service);
    setDirectionsRenderer(renderer);
  }, [map, routesLibrary]);

  useEffect(() => {
    if (!directionService || !directionsRenderer || !state.origin || !state.destination) return;

    fetchRoutes(directionService, {
      origin: state.origin,
      destination: state.destination,
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    }).then((response) => {
      directionsRenderer.setDirections(response)
      dispatch({ type: "SET_ROUTES", payload: response.routes })
    }).catch((error) =>{
      console.error("Error fetching routes:", error)
      dispatch({ type: "SET_ROUTES", payload: [] })
    })

    fetchTruckServices(state.origin, state.destination).then((response) => {
      dispatch({ type: "SET_TRUCK_SERVICES", payload: response })
    }).catch((error) => {
      console.error("Error fetching truck services:", error)
      dispatch({ type: "SET_TRUCK_SERVICES", payload: [] })
    })
  }, [directionService, directionsRenderer, state.origin, state.destination]);

  const selectedRoute = state.routes[state.routeIndex];
  const leg = selectedRoute?.legs[0];

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(state.routeIndex);
  }, [directionsRenderer, selectedRoute, map]);

  return (
    <MapContext.Provider
      value={{
        state,
        dispatch,
        selectedRoute,
        leg,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapContext;
