import { Request, ResponseToolkit } from "@hapi/hapi";
import { getStarships as fetchStarshipFromService } from "../services/getStarships";

export const getStarships = async (request: Request, h: ResponseToolkit) => {
    try {
        const { ids } = request.payload as { ids: number[] };
        if (!Array.isArray(ids)) {
            return h.response({ message: 'Invalid request, ids should be an array' }).code(400);
        }
        const starships = await fetchStarshipFromService(ids);
        return h.response(starships).code(200);
    } catch (error) {
        return h.response({ message: 'Error fetching starships' }).code(500);
    }
};