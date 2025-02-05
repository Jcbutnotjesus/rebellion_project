import express from 'express';
import cors from 'cors';
import setRoutes from './routes/routes';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});