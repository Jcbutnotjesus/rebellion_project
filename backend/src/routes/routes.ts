import { Application } from 'express';
import { getAllData } from '../controller/controller';

function setRoutes(app: Application): void {
    app.get('/api/all', getAllData);
}

export default setRoutes;