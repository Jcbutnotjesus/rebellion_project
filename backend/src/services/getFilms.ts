import axios from 'axios';

const SWAPI_BASE_URL = 'https://swapi.dev/api';

interface Film {
    title: string;
}

export const getFilms = async (ids: number[]): Promise<Film[]> => {
    try {
        const filmPromises = ids.map(id => axios.get<Film>(`${SWAPI_BASE_URL}/films/${id}/`));
        const filmResponses = await Promise.all(filmPromises);
        return filmResponses.map(response => response.data);
    } catch (error) {
        console.error('Error fetching films:', error);
        throw error;
    }
};