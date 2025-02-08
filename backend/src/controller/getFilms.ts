import { Request, Response } from 'express';
import { getFilms as fetchFilmsFromService } from '../services/getFilms';

export const getFilms = async (req: Request, res: Response): Promise<void> => {
    try {
        const { ids } = req.body;
        if (!Array.isArray(ids)) {
            res.status(400).json({ message: 'Invalid request, ids should be an array' });
            return;
        }
        const films = await fetchFilmsFromService(ids);
        res.json(films);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching films' });
    }
};