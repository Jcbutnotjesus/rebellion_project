import { Request, Response } from 'express';
import { fetchPlanets, fetchStarships, fetchPeoples, fetchFilms, fetchSpecies, fetchVehicles } from '../services/services';

export const getAllData = async (req: Request, res: Response): Promise<void> => {
    try {
        const [people, planets, starships, vehicles, species, films] = await Promise.all([
            fetchPeoples(),
            fetchPlanets(),
            fetchStarships(),
            fetchVehicles(),
            fetchSpecies(),
            fetchFilms(),
        ]);
        res.json({ people, planets, starships, vehicles, species, films });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching all data' });
    }
};

export const getPeople = async (req: Request, res: Response): Promise<void> => {
    try {
        const people = await fetchPeoples();
        res.json(people);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching people' });
    }
};