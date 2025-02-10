import { Request, ResponseToolkit } from "@hapi/hapi";
import { getSpecies as fetchSpeciesFromService } from "../services/getSpecies";

export const getSpecies = async (request: Request, h: ResponseToolkit) => {
  try {
    const { ids } = request.payload as { ids: number[] };
    if (!Array.isArray(ids)) {
      return h.response({ message: "Invalid request, ids should be an array" }).code(400);
    }
    const species = await fetchSpeciesFromService(ids);
    return h.response(species).code(200);
  } catch (error) {
    console.error('Error fetching species:', error);
    return h.response({ message: "Error fetching species" }).code(500);
  }
};