import NotFoundLocation from "@/components/NotFoundLocation";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLong } from "@/lib/getLocation-info";

const TemperaturPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <TemperatureComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <NotFoundLocation />;
  }
};

export default TemperaturPage;
