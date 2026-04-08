export const getWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WATHER_MAP_API_KEY}&units=metric`,
    );
    const data = await response.json();
    return data?.weather[0];
  } catch (error) {
    console.log(error);
  }
};

export const getTemperatureData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WATHER_MAP_API_KEY}&units=metric`,
    );
    const data = await response.json();
    return data?.main;
  } catch (error) {
    console.log(error);
  }
};

export const getWindrData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WATHER_MAP_API_KEY}&units=metric`,
    );
    const data = await response.json();
    return data?.wind;
  } catch (error) {
    console.log(error);
  }
};

export const getAQIData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WATHER_MAP_API_KEY} `,
    );
    const data = await response.json();
    return data?.list[0];
  } catch (error) {
    console.log(error);
  }
};
