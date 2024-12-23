import GoogleMapProvider from "./GoogleMapProvider";

function MapService({ children, ...props }) {
  return (
    <GoogleMapProvider {...props}>
      {children}
    </GoogleMapProvider>
  );
}

export default MapService;