import { IRecordStore } from "../models/RecordStore";

export default interface IRecordStoreService {
    create(recordStore: IRecordStore): Promise<IRecordStore>;
    findAll(): Promise<IRecordStore[]>;
    findById(id: String): Promise<IRecordStore | null>;
    updateByYearAndFormat(year: Number, format: String): Promise<IRecordStore[]>
    deleteById(id: String): Promise<void>;
}