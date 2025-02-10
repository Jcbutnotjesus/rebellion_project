import { Request, ResponseToolkit } from "@hapi/hapi";
import { getPeople as fetchPeopleFromService } from "../services/getPeople";

export const getPeople = async (request: Request, h: ResponseToolkit) => {
  try {
    const { ids } = request.payload as { ids: number[] };
    if (!Array.isArray(ids)) {
      return h.response({ message: "Invalid request, ids should be an array" }).code(400);
    }
    const people = await fetchPeopleFromService(ids);
    return h.response(people).code(200);
  } catch (error) {
    console.error('Error fetching people:', error);
    return h.response({ message: "Error fetching people" }).code(500);
  }
};