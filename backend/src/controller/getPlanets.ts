import { Request, ResponseToolkit } from "@hapi/hapi";
import { getPlanets as fetchPlanetsFromService } from "../services/getPlanets";

export const getPlanets = async (request: Request, h: ResponseToolkit) => {
  try {  
    const { ids } = request.payload as { ids: number[] };
    if (!Array.isArray(ids)) {
      return h.response({ message: "Invalid request, ids should be an array" }).code(400);
    }
    const planets = await fetchPlanetsFromService(ids);
    return h.response(planets).code(200);
  } catch (error) {
    console.error('Error fetching planets:', error);
    return h.response({ message: "Error fetching planets" }).code(500);
  }
};