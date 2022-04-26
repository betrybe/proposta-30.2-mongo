import { Router } from "express";
import RecordStoreController from "../controllers/RecordStoreController";
import { RecordStoreModel } from "../models/RecordStore";
import RecordStoreRepository from "../repositories/RecordStoreRepository";
import RecordStoreService from "../services/RecordStoreService";

const recordStoreRouter = Router();

const recordStoreRepository = new RecordStoreRepository(RecordStoreModel);
const recordStoreService = new RecordStoreService(recordStoreRepository); 
const recordStoreController = new RecordStoreController(recordStoreService);

recordStoreRouter.post('/store', async (req, res) => { 
    const result = await recordStoreController.create(req);
    return res.status(result.statusCode).json(result.body);
});

recordStoreRouter.put('/store/items', async (req, res) => { 
    const result = await recordStoreController.updateByYearAndFormat(req);
    return res.status(result.statusCode).json(result.body);
});

recordStoreRouter.get('/store', async (_req, res) => { 
    const result = await recordStoreController.findAll();
    return res.status(result.statusCode).json(result.body);
});

recordStoreRouter.get('/store/:id', async (req, res) => { 
    const result = await recordStoreController.findById(req);
    return res.status(result.statusCode).json(result.body);
});

recordStoreRouter.delete('/store/:id', async (req, res) => { 
    const result = await recordStoreController.deleteById(req);
    return res.status(result.statusCode).end();
});

export default recordStoreRouter;