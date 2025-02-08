import axios from 'axios';

const SWAPI_BASE_URL = 'https://swapi.dev/api';

interface Vehicle {
    name: string;
}

export const getVehicles = async (ids: number[]): Promise<Vehicle[]> => {
    try {
        const vehiclePromises = ids.map(id => axios.get<Vehicle>(`${SWAPI_BASE_URL}/vehicles/${id}/`));
        const vehicleResponses = await Promise.all(vehiclePromises);
        return vehicleResponses.map(response => response.data);
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        throw error;
    }
};