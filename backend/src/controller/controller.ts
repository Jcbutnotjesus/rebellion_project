import { Request, Response } from 'express';
import { fetchPlanets, fetchStarships, fetchPeople } from '../services/services';

export const getPeople = async (req: Request, res: Response): Promise<void> => {
    try {
        const people = await fetchPeople();
        res.json(people);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching people data' });
    }
};

export const getPlanets = async (req: Request, res: Response): Promise<void> => {
    try {
        const planets = await fetchPlanets();
        res.json(planets);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching planets data' });
    }
};

export const getStarships = async (req: Request, res: Response): Promise<void> => {
    try {
        const starships = await fetchStarships();
        res.json(starships);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching starships data' });
    }
};

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