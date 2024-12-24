import { useContext } from "react";
import MapContext from "@/context/MapContext";

const useMapContext = () => {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error(
      "useMapContext must be used within a DirectionsProvider"
    );
  }

  return context;
};

export default useMapContext;
