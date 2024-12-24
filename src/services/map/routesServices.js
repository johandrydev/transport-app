export const fetchRoutes = async (directionsService, options) => {
  const response = await directionsService.route(options);
  return response;
};


export const fetchTruckServices = async (from_city, to_city) => {
  try {
    const route = 'http://127.0.0.1:8000/api/v1/get-transport-services'
    const queryParams = new URLSearchParams({
      from_city,
      to_city,
    }).toString();

    const response = await fetch(`${route}?${queryParams}`);
    if (!response.ok) {
      throw new Error("Error fetching truck services:", response.statusText);
    }
    return response.json();
  } catch (error) {
    throw new Error("Error fetching truck services:", error);
  }
};
