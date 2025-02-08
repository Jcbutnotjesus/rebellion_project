import { Request, Response } from 'express';
import { getStarships as fetchStarshipFromService } from '../services/getStarships';

export const getStarship = async (req: Request, res: Response): Promise<void> => {
    try {
        const { ids } = req.body;
        if (!Array.isArray(ids)) {
            res.status(400).json({ message: 'Invalid request, ids should be an array' });
            return;
        }
        const starship = await fetchStarshipFromService(ids);
        res.json(starship);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Starship' });
    }
};