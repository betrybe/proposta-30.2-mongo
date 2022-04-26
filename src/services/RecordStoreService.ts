import { IRecordStore } from "../models/RecordStore";
import IRecordStoreService from "./IRecordStoreService";
import IRecordStoreRepository from "../repositories/IRecordStoreRepository";
import NotFoundError from "../errors/NotFoundError";

export default class RecordStoreService implements IRecordStoreService {

    private repository: IRecordStoreRepository;

    constructor (repository: IRecordStoreRepository) {
        this.repository = repository;
    }

    async create(recordStore: IRecordStore): Promise<IRecordStore> {
        return await this.repository.create(recordStore);
    }

    async findAll(): Promise<IRecordStore[]> {
        return await this.repository.findAll();
    }

    async findById(id: String): Promise<IRecordStore> {
        const recordStore = await this.repository.findById(id);
        if (!recordStore) throw new NotFoundError('record store not found');
        return recordStore;
    }

    async updateByYearAndFormat(year: Number = 1997, format: String = 'CD'): Promise<IRecordStore[]> {
        const recordStore = await this.repository.updateByYearAndFormat(year, format);
        return recordStore;
    }

    async deleteById(id: String): Promise<void> {
        const recordStore = await this.repository.findById(id);
        if (!recordStore) throw new NotFoundError('record store not found');
        await this.repository.deleteById(id);
    }

}