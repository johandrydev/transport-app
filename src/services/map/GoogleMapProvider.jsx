import React, { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import config from '@/config/config';

const GoogleMapProvider = ({ children }) => {
  const initialPosition = { lat: 39.58, lng: -76.5 };
  const [position, setPosition] = useState(initialPosition);

  return (
    <APIProvider apiKey={config.googleMaps.apiKey}>
      <div style={{ height: '700px', width: '100%' }}>
        <Map
          center={position}
          defaultZoom={10}
          mapId={config.googleMaps.mapId}
          fullscreenControl={false}
          onCenterChanged={(event) => setPosition(event.detail.center)}
          renderingType="VECTOR"
        >
          {children}
        </Map>
      </div>
    </APIProvider>
  );
};

export default GoogleMapProvider;