import express from 'express';
import recordStoreRouter from './routes/recordStoreRoute';

const app = express();

app.use(express.json());

app.use(recordStoreRouter);

export default app;