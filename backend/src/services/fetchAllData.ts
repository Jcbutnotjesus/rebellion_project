import { mapEntity } from '../mapper/mapper';
import axios from 'axios';
import { Films, PaginatedResponse, People, Planet, Species, Starship, Vehicle } from '../model/model';

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

export const fetchPeoples = async (): Promise<PaginatedResponse<People>> => {
    const results = await fetchAllPages(`${BASE_URL}people/`);
    return { 
        results: results.map(mapEntity),
        count: results.length,
        next: null,
        previous: null
    };
};

export const fetchPlanets = async (): Promise<PaginatedResponse<Planet>> => {
    const results = await fetchAllPages(`${BASE_URL}planets/`);
    return { 
        results: results.map(mapEntity),
        count: results.length,
        next: null,
        previous: null
    };
};

export const fetchStarships = async (): Promise<PaginatedResponse<Starship>> => {
    const results = await fetchAllPages(`${BASE_URL}starships/`);
    return { 
        results: results.map(mapEntity),
        count: results.length,
        next: null,
        previous: null
    };
};

export const fetchVehicles = async (): Promise<PaginatedResponse<Vehicle>> => {
    const results = await fetchAllPages(`${BASE_URL}vehicles/`);
    return { 
        results: results.map(mapEntity),
        count: results.length,
        next: null,
        previous: null
    };
};

export const fetchSpecies = async (): Promise<PaginatedResponse<Species>> => {
    const results = await fetchAllPages(`${BASE_URL}species/`);
    return { 
        results: results.map(mapEntity),
        count: results.length,
        next: null,
        previous: null
    };
};

export const fetchFilms = async (): Promise<PaginatedResponse<Films>> => {
    const results = await fetchAllPages(`${BASE_URL}films/`);
    return { 
        results: results.map(mapEntity),
        count: results.length,
        next: null,
        previous: null
    };
};