import { mapEntity } from '../mapper/mapper';
import axios from 'axios';
import NodeCache from 'node-cache';
import { Films, PaginatedResponse, People, Planet, Species, Starship, Vehicle } from '../model/model';

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

export const fetchPeoples = async (): Promise<PaginatedResponse<People>> => {
    return fetchWithCache('people', async () => {
        const results = await fetchAllPages(`${BASE_URL}people/`);
        return { results: results.map(mapEntity) };
    });
};

export const fetchPlanets = async (): Promise<PaginatedResponse<Planet>> => {
    return fetchWithCache('planets', async () => {
        const results = await fetchAllPages(`${BASE_URL}planets/`);
        return { results: results.map(mapEntity) };
    });
};

export const fetchStarships = async (): Promise<PaginatedResponse<Starship>> => {
    return fetchWithCache('starships', async () => {
        const results = await fetchAllPages(`${BASE_URL}starships/`);
        return { results: results.map(mapEntity) };
    });
};

export const fetchVehicles = async (): Promise<PaginatedResponse<Vehicle>> => {
    return fetchWithCache('vehicles', async () => {
        const results = await fetchAllPages(`${BASE_URL}vehicles/`);
        return { results: results.map(mapEntity) };
    });
};

export const fetchSpecies = async (): Promise<PaginatedResponse<Species>> => {
    return fetchWithCache('species', async () => {
        const results = await fetchAllPages(`${BASE_URL}species/`);
        return { results: results.map(mapEntity) };
    });
};

export const fetchFilms = async (): Promise<PaginatedResponse<Films>> => {
    return fetchWithCache('films', async () => {
        const results = await fetchAllPages(`${BASE_URL}films/`);
        return { results: results.map(mapEntity) };
    });
};