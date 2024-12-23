import { useState } from 'react';
import useDirections from '@/hooks/useDirections';
import TruckCompanies from '@/components/TruckCompanies';
import RouteDetails from '@/components/RouteDetails';

const testTrucksCompanies = [
  { company: 'XPO Logistics', trucks_per_day: 9 },
  { company: 'Schneider', trucks_per_day: 6 },
  { company: 'Landstar Systems', trucks_per_day: 2 },
];

const Directions = () => {
  const [truckCompanies, setTruckCompanies] = useState(testTrucksCompanies);
  const { routes, setRouteIndex, selectedRoute, leg } = useDirections();

  const handleRemoveCompany = (index) => {
    setTruckCompanies((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="routes-details">
      <TruckCompanies truckCompanies={truckCompanies} onRemoveCompany={handleRemoveCompany} />
      <RouteDetails
        selectedRoute={selectedRoute}
        leg={leg}
        routes={routes}
        onRouteSelect={setRouteIndex}
      />
    </div>
  );
};

export default Directions;
