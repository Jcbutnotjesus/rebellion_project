import axios from 'axios';

const SWAPI_BASE_URL = 'https://swapi.dev/api';

interface Person {
    name: string;
}


export const getPeople = async (ids: number[]): Promise<Person[]> => {
    try {
        const peoplePromises = ids.map(id => axios.get<Person>(`${SWAPI_BASE_URL}/people/${id}/`));
        const peopleResponses = await Promise.all(peoplePromises);
        return peopleResponses.map(response => response.data);
    } catch (error) {
        console.error('Error fetching people:', error);
        throw error;
    }
};
