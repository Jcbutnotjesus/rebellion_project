import { Request, ResponseToolkit } from "@hapi/hapi";
import { fetchPlanets, fetchStarships, fetchPeoples, fetchFilms, fetchSpecies, fetchVehicles } from "../services/fetchAllData";

export const getAllData = async (request: Request, h: ResponseToolkit) => {
    try {
        const [people, planets, starships, vehicles, species, films] = await Promise.all([
            fetchPeoples(),
            fetchPlanets(),
            fetchStarships(),
            fetchVehicles(),
            fetchSpecies(),
            fetchFilms(),
        ]);
        return h.response({ people, planets, starships, vehicles, species, films }).code(200);
    } catch (error) {
        console.error('Error fetching all data:', error);
        return h.response({ message: 'Error fetching all data' }).code(500);
    }
};