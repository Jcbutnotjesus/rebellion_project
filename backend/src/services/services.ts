import axios from 'axios';
import NodeCache from 'node-cache';

const BASE_URL = 'https://swapi.dev/api/';
const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

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

const fetchWithCache = async (key: string, fetchFn: () => Promise<any>): Promise<any> => {
    const cachedData = cache.get(key);
    if (cachedData) {
        return cachedData;
    }
    const data = await fetchFn();
    cache.set(key, data);
    return data;
};

export const fetchPeople = async (): Promise<any> => {
    return fetchWithCache('people', async () => {
        const results = await fetchAllPages(`${BASE_URL}people/`);
        return { results };
    });
};

export const fetchPlanets = async (): Promise<any> => {
    return fetchWithCache('planets', async () => {
        const results = await fetchAllPages(`${BASE_URL}planets/`);
        return { results };
    });
};

export const fetchStarships = async (): Promise<any> => {
    return fetchWithCache('starships', async () => {
        const results = await fetchAllPages(`${BASE_URL}starships/`);
        return { results };
    });
};