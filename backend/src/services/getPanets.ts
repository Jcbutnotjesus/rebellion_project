import axios from 'axios';

const SWAPI_BASE_URL = 'https://swapi.dev/api';

interface Planet {
    name: string;
}

export const getPlanets = async (ids: number[]): Promise<Planet[]> => {
    try {
        const planetPromises = ids.map(id => axios.get<Planet>(`${SWAPI_BASE_URL}/planets/${id}/`));
        const planetResponses = await Promise.all(planetPromises);
        return planetResponses.map(response => response.data);
    } catch (error) {
        console.error('Error fetching planets:', error);
        throw error;
    }
};