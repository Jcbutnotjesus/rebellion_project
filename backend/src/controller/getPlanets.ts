import { Request, ResponseToolkit } from "@hapi/hapi";
import { getPlanets as fetchPlanetsFromService } from "../services/getPanets";

export const getPlanets = async (request: Request, h: ResponseToolkit) => {
    try {
        const { ids } = request.payload as { ids: number[] };
        if (!Array.isArray(ids)) {
            return h.response({ message: 'Invalid request, ids should be an array' }).code(400);
        }
        const people = await fetchPlanetsFromService(ids);
        return h.response(people).code(200);
    } catch (error) {
        return h.response({ message: 'Error fetching people' }).code(500);
    }
};