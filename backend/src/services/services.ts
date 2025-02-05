import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/';

export const fetchPeople = async (): Promise<any> => {
    try {
        const response = await axios.get(`${BASE_URL}people/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching people:', error);
        throw error;
    }
};

export const fetchPlanets = async (): Promise<any> => {
    try {
        const response = await axios.get(`${BASE_URL}planets/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching planets:', error);
        throw error;
    }
};

export const fetchStarships= async (): Promise<any> => {
    try {
        const response = await axios.get(`${BASE_URL}starships/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching planets:', error);
        throw error;
    }
};