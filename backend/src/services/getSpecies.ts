import axios from 'axios';

const SWAPI_BASE_URL = 'https://swapi.dev/api';

interface Species {
    name: string;
}

export const getSpecies = async (ids: number[]): Promise<Species[]> => {
    try {
        const speciesPromises = ids.map(id => axios.get<Species>(`${SWAPI_BASE_URL}/species/${id}/`));
        const speciesResponses = await Promise.all(speciesPromises);
        return speciesResponses.map(response => response.data);
    } catch (error) {
        console.error('Error fetching species:', error);
        throw error;
    }
};