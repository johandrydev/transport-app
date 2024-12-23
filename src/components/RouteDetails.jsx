import React from 'react';

const RouteDetails = ({ selectedRoute, leg, routes, onRouteSelect }) => (
  <div>
    <h2>{selectedRoute?.summary}</h2>
    <p>
      <strong>From:</strong> {leg?.start_address}
    </p>
    <p>
      <strong>To:</strong> {leg?.end_address}
    </p>

    <h3>Other routes</h3>
    {routes.map((route, index) => (
      <button key={index} onClick={() => onRouteSelect(index)}>
        {route.summary}
      </button>
    ))}
  </div>
);

export default RouteDetails;
