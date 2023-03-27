import express, { Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import authRouter from './routes/auth';
import { connectDb } from './database/database';

const app = express();

app.use(express.json());
app.use(cors());
connectDb().then(() => console.log('Connected to DB'));

// Puerto del server
const PORT = <string>process.env.PORT || 4000;

// http://localhost:4001
app.get('/', (_, res: Response) => res.send('Api inicilizada'));

// Middlewares
app.use('/api/auth', authRouter);

// Inicializando servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
