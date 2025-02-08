import { Application } from 'express';
import { getAllData } from '../controller/fetchAllData';
import { getFilms } from '../controller/getFilms';

function setRoutes(app: Application): void {
    app.get('/api/all', getAllData);
    app.get('/api/people', getAllData);
    app.post('/api/films', getFilms);
}

export default setRoutes;