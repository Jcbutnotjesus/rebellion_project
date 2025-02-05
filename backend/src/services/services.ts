import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/';

const fetchAllPages = async (url: string): Promise<any[]> => {
    let results: any[] = [];
    let nextUrl: string | null = url;

    while (nextUrl) {
        const response: { data: { results: any[], next: string | null } } = await axios.get(nextUrl);
        results = results.concat(response.data.results);
        nextUrl = response.data.next;
    }

    return results;
};

export const fetchPeople = async (): Promise<any> => {
    try {
        const results = await fetchAllPages(`${BASE_URL}people/`);
        return { results };
    } catch (error) {
        console.error('Error fetching people:', error);
        throw error;
    }
};

export const fetchPlanets = async (): Promise<any> => {
    try {
        const results = await fetchAllPages(`${BASE_URL}planets/`);
        return { results };
    } catch (error) {
        console.error('Error fetching planets:', error);
        throw error;
    }
};

export const fetchStarships = async (): Promise<any> => {
    try {
        const results = await fetchAllPages(`${BASE_URL}starships/`);
        return { results };
    } catch (error) {
        console.error('Error fetching starships:', error);
        throw error;
    }
};