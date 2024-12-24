import React, { useState } from 'react';
import { Map } from '@vis.gl/react-google-maps';
import config from '@/config/config';

const TransportMap = () => {
  const initialPosition = { lat: 39.58, lng: -76.5 };
  const [position, setPosition] = useState(initialPosition);

  return (
    <div style={{ height: '700px', width: '100%' }}>
      <Map
        center={position}
        defaultZoom={10}
        mapId={config.googleMaps.mapId}
        fullscreenControl={false}
        onCenterChanged={(event) => setPosition(event.detail.center)}
        renderingType="VECTOR"
      />
    </div>
  );
};

export default TransportMap;