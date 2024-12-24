import React from 'react';

const RouteDetails = ({ selectedRoute, leg, routes, onRouteSelect }) => (
  <section>
    <h2>{selectedRoute?.summary}</h2>
    <div className="route-details">
      <span><strong>From:</strong> {leg?.start_address}</span>
      <span><strong>To:</strong> {leg?.end_address}</span>
      <span><strong>Duration:</strong> {leg?.duration?.text}</span>
    </div>
    <h3>Routes available</h3>
    {routes?.map((route, index) => (
      <button key={index} onClick={() => onRouteSelect(index)}>
        {route.summary}
      </button>
    ))}
  </section>
);

export default RouteDetails;
