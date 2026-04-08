import { getLocations } from "./locations-utils";


export  async function GET(params) {
    const locationsData = await getLocations();
    return Response.json(locationsData);
}