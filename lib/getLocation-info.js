export const getLocation = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`,
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getLocationLatLonList = async () => {
  try {
    const response = await fetch(`${process.env.ORIGIN}/api/location`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getLocationLatLon = async (locationName) => {
  try {
    const response = await fetch(
      `${process.env.ORIGIN}/api/location/${locationName}`,
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getResolvedLatLong = async (location, lat, lon) => {
  // console.log(location);
  if (lat && lon) return { lat, lon };

  const locationLatLong = await getLocationLatLon(location);

  if (locationLatLong?.latitude && locationLatLong?.longitude) {
    const lat = locationLatLong?.latitude;
    const lon = locationLatLong?.longitude;

    return { lat, lon };
  }
};
