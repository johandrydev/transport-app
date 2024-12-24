import TruckCompanies from '@/components/TruckCompanies';
import RouteDetails from '@/components/RouteDetails';
import useMapContext from '@/hooks/useMapContext';

const Directions = () => {
  const { state, dispatch, selectedRoute, leg } = useMapContext();

  const handleRouteSelect = (index) => {
    dispatch({ type: "SET_ROUTE_INDEX", payload: index });
  };

  return (
    <div className="routes-details">
      <TruckCompanies/>
      <RouteDetails
        selectedRoute={selectedRoute}
        routes={state.routes}
        leg={leg}
        onRouteSelect={handleRouteSelect}
      />
    </div>
  );
};

export default Directions;
