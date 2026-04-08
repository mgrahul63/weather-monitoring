import { getLocationByName } from "../locations-utils";

export async function GET(request, { params }) {
  const location = params?.name;
  const locationsData = getLocationByName(location);
  return Response.json(locationsData);
}
