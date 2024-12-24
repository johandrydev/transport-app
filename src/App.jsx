import Directions from '@/components/Directions';
import { MapProvider } from './context/MapContext';
import TransportMap from './components/TransportMap';
import { APIProvider } from '@vis.gl/react-google-maps';
import config from './config/config';
import SearhForm from './components/SearchForm';
import { useLoadScript } from '@react-google-maps/api';

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: config.googleMaps.apiKey,
    libraries: ['places'],
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <APIProvider apiKey={config.googleMaps.apiKey}>
      <h1>Transport Route Finder</h1>
      <MapProvider>
        <SearhForm />
        <TransportMap />
        <Directions />
      </MapProvider>
    </APIProvider >
  );
};

export default App;
