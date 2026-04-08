import AQIcomponent from "@/components/AQIcomponent";
import NotFoundLocation from "@/components/NotFoundLocation";
import { getResolvedLatLong } from "@/lib/getLocation-info";

const Aqipage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <AQIcomponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <NotFoundLocation />;
  }
};

export default Aqipage;






