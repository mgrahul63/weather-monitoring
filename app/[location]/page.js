import LocationInfo from "@/components/LocationInfo";
import NotFoundLocation from "@/components/NotFoundLocation";
import { getResolvedLatLong } from "@/lib/getLocation-info";

const LocationPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <LocationInfo lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <NotFoundLocation />;
  }
};

export default LocationPage;
