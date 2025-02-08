import axios from 'axios';

const SWAPI_BASE_URL = 'https://swapi.dev/api';

interface Starship {
    name: string;
}

export const getStarships = async (ids: number[]): Promise<Starship[]> => {
    try {
        const starshipPromises = ids.map(id => axios.get<Starship>(`${SWAPI_BASE_URL}/starships/${id}/`));
        const starshipResponses = await Promise.all(starshipPromises);
        return starshipResponses.map(response => response.data);
    } catch (error) {
        console.error('Error fetching starships:', error);
        throw error;
    }
};