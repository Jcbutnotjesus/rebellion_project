import { Request, ResponseToolkit } from "@hapi/hapi";
import { getFilms as fetchFilmsFromService } from "../services/getFilms";

export const getFilms = async (request: Request, h: ResponseToolkit) => {
    try {
        const { ids } = request.payload as { ids: number[] };
        if (!Array.isArray(ids)) {
            return h.response({ message: 'Invalid request, ids should be an array' }).code(400);
        }
        const films = await fetchFilmsFromService(ids);
        return h.response(films).code(200);
    } catch (error) {
        return h.response({ message: 'Error fetching films' }).code(500);
    }
};