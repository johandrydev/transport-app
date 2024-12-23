import { useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const useGooglePlaces = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ["(cities)"],
    },
    debounce: 300,
  });

  const [coordinates, setCoordinates] = useState(null);

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = getLatLng(results[0]);
      setCoordinates({ lat, lng });
      console.log("📍 Coordinates:", { lat, lng });
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return {
    ready,
    value,
    data,
    setValue,
    clearSuggestions,
    coordinates,
    handleSelect,
  };
};

export default useGooglePlaces;
