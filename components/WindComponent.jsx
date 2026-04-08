import { getWindrData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

const WindComponent = async ({ lat, lon }) => {
  const wind = await getWindrData(lat, lon);
  return (
    <Card>
      <h6 class="feature-name">Wind</h6>
      <div class="feature-main">
        <Image
          class="max-w-20"
          src="/assets/icons/icon_wind.png"
          alt="rain icon"
          height={80}
          width={80}
        />
        <h3 class="feature-title">{wind?.speed} meter/sec</h3>
        <span class="feature-name">{wind?.deg} degrees</span>
      </div>
    </Card>
  );
};

export default WindComponent;
