import { getWeatherData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

const WeatherComponent = async ({ lat, lon }) => {
  const weather = await getWeatherData(lat, lon); 

  return (
    <Card>
      <h6 class="feature-name">Current Weather</h6>
      <div class="feature-main">
        <Image
          class="max-w-20"
          src="/assets/icons/icon_rain.png"
          alt="rain icon"
          height={80}
          width={80}
        />
        <h3 class="feature-title">{weather?.main}</h3>
        <span class="feature-name">{weather?.description}</span>
      </div>
    </Card>
  );
};

export default WeatherComponent;
