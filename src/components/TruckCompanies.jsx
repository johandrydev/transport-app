import React from 'react';

const TruckCompanies = ({ truckCompanies, onRemoveCompany }) => (
  <div>
    <h2>Truck Companies Available</h2>
    <ul>
      {truckCompanies.map((company, index) => (
        <li key={index} onClick={() => onRemoveCompany(index)}>
          <strong>{company.company}</strong> - {company.trucks_per_day} trucks per day
        </li>
      ))}
    </ul>
  </div>
);

export default TruckCompanies;
