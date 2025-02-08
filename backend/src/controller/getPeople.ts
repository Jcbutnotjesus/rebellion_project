import { Request, Response } from 'express';
import { getPeople as fetchPeopleFromService } from '../services/getPeople';

export const getPeople = async (req: Request, res: Response): Promise<void> => {
    try {
        const { ids } = req.body;
        if (!Array.isArray(ids)) {
            res.status(400).json({ message: 'Invalid request, ids should be an array' });
            return;
        }
        const people = await fetchPeopleFromService(ids);
        res.json(people);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching People' });
    }
};