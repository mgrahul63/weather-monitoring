import NotFoundLocation from "@/components/NotFoundLocation";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLong } from "@/lib/getLocation-info";

const WeatherPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <WeatherComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <NotFoundLocation />;
  }
};

export default WeatherPage;
