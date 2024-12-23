import Directions from '@/components/Directions';
import MapService from '@/services/map';
import { SearchField } from './components/SearchField';

function App() {
  return (
    <div>
      <h1>Transport Route Finder</h1>
      {/* <SearchField /> */}
      <MapService>
        <Directions />
      </MapService>
    </div>
  );
};

export default App;
