const locations = [
  { location: "New York City", latitude: 40.7128, longitude: -74.006 },
  { location: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
  { location: "Chicago", latitude: 41.8781, longitude: -87.6298 },
  { location: "Houston", latitude: 29.7604, longitude: -95.3698 },
  { location: "Phoenix", latitude: 33.4484, longitude: -112.074 },
  { location: "Philadelphia", latitude: 39.9526, longitude: -75.1652 },
  { location: "San Antonio", latitude: 29.4241, longitude: -98.4936 },
  { location: "San Diego", latitude: 32.7157, longitude: -117.1611 },
  { location: "Dallas", latitude: 32.7767, longitude: -96.797 },
  { location: "San Jose", latitude: 37.3382, longitude: -121.8863 },
  { location: "Austin", latitude: 30.2672, longitude: -97.7431 },
  { location: "Jacksonville", latitude: 30.3322, longitude: -81.6557 },
  { location: "San Francisco", latitude: 37.7749, longitude: -122.4194 },
  { location: "Columbus", latitude: 39.9612, longitude: -82.9988 },
  { location: "Fort Worth", latitude: 32.7555, longitude: -97.3308 },
  { location: "Indianapolis", latitude: 39.7684, longitude: -86.1581 },
  { location: "Charlotte", latitude: 35.2271, longitude: -80.8431 },
  { location: "Seattle", latitude: 47.6062, longitude: -122.3321 },
  { location: "Denver", latitude: 39.7392, longitude: -104.9903 },
  { location: "Washington, D.C.", latitude: 38.9072, longitude: -77.0369 },
  { location: "Boston", latitude: 42.3601, longitude: -71.0589 },
  { location: "El Paso", latitude: 31.7619, longitude: -106.485 },
  { location: "Nashville", latitude: 36.1627, longitude: -86.7816 },
  { location: "Detroit", latitude: 42.3314, longitude: -83.0458 },
  { location: "Oklahoma City", latitude: 35.4676, longitude: -97.5164 },
  { location: "Las Vegas", latitude: 36.1699, longitude: -115.1398 },
  { location: "Memphis", latitude: 35.1495, longitude: -90.049 },
  { location: "Louisville", latitude: 38.2527, longitude: -85.7585 },
  { location: "Baltimore", latitude: 39.2904, longitude: -76.6122 },
  { location: "Portland", latitude: 45.5051, longitude: -122.675 },
  { location: "Milwaukee", latitude: 43.0389, longitude: -87.9065 },
  { location: "Albuquerque", latitude: 35.0844, longitude: -106.6504 },
  { location: "Tucson", latitude: 32.2226, longitude: -110.9747 },
  { location: "Fresno", latitude: 36.7378, longitude: -119.7871 },
  { location: "Sacramento", latitude: 38.5816, longitude: -121.4944 },
  { location: "Kansas City", latitude: 39.0997, longitude: -94.5786 },
  { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
  { location: "Chittagong", latitude: 22.3475, longitude: 91.8123 },
  { location: "Sylhet", latitude: 24.8949, longitude: 91.8687 },
  { location: "Rangpur", latitude: 25.7439, longitude: 89.2752 },
  { location: "Khulna", latitude: 22.8456, longitude: 89.5403 },
  { location: "Barishal", latitude: 22.701, longitude: 90.3535 },
  { location: "Rajshahi", latitude: 24.3745, longitude: 88.6042 },
  { location: "Kolkata", latitude: 22.5726, longitude: 88.3639 },
  { location: "Mumbai", latitude: 19.076, longitude: 72.8777 },
  { location: "Malaysia", latitude: 3.139, longitude: 101.6869 },
  { location: "China", latitude: 35.8617, longitude: 104.1954 },
  { location: "Punjab", latitude: 31.1471, longitude: 75.3412 },
  { location: "Pakistan", latitude: 30.3753, longitude: 69.3451 },
];

const getLocations = () => {
  return locations;
};

const getLocationByName = (location) => {
  if (!location) return null;

  const found = locations.find(
    (item) => item.location.toLowerCase() === location.toLowerCase(),
  );

  return found || {};
};

export { getLocationByName, getLocations };
