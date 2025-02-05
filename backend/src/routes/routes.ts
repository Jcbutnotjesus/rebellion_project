import { Application } from 'express';
import { getAllData, getPeople, getPlanets, getStarships } from '../controller/controller';

function setRoutes(app: Application): void {
    app.get('/api/people', getPeople);
    app.get('/api/planets', getPlanets);
    app.get('/api/starships', getStarships);
    app.get('/api/all', getAllData);
}

export default setRoutes;