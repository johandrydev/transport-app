import useMapContext from '@/hooks/useMapContext';
import React from 'react';

const TruckCompanies = () => {
  const { state } = useMapContext();
  const { truckServices } = state;
  
  return (
    <div>
      <h2>Truck Companies Available</h2>
      <ul>
        {truckServices?.map((company, index) => (
          <li key={index}>
            <strong>{company.company}</strong> - {company.trucks_per_day} trucks per day
          </li>
        ))}
      </ul>
      {truckServices.length === 0 && <p>No truck companies available</p>}
    </div>
  );
};

export default TruckCompanies;
