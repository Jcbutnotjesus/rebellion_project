import { Request, Response } from 'express';
import { fetchPlanets, fetchStarships, fetchPeople } from '../services/services';

export const getAllData = async (req: Request, res: Response): Promise<void> => {
    try {
        const [people, planets, starships] = await Promise.all([
            fetchPeople(),
            fetchPlanets(),
            fetchStarships()
        ]);
        res.json({ people, planets, starships });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching all data' });
    }
};