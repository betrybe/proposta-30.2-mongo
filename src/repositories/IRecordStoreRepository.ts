import { IRecordStore } from "../models/RecordStore";
import IRepository from "./IRepository";

export default interface IRecordStoreRepository extends IRepository<IRecordStore> {
    updateByYearAndFormat(year: Number, format: String): Promise<IRecordStore[]>;
}