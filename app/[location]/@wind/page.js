import NotFoundLocation from "@/components/NotFoundLocation";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLong } from "@/lib/getLocation-info";

const WindPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <NotFoundLocation />;
  }
};

export default WindPage;
