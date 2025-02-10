import { Request, ResponseToolkit } from "@hapi/hapi";
import { getVehicles as fetchVehiclesFromService } from "../services/getVehicles";

export const getVehicles = async (request: Request, h: ResponseToolkit) => {
  try {
    const { ids } = request.payload as { ids: number[] };
    if (!Array.isArray(ids)) {
      return h.response({ message: "Invalid request, ids should be an array" }).code(400);
    }
    const vehicles = await fetchVehiclesFromService(ids);
    return h.response(vehicles).code(200);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return h.response({ message: "Error fetching vehicles" }).code(500);
  }
};