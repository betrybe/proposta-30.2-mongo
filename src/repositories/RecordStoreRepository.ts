import { Model } from "mongoose";
import { IRecordStore } from "../models/RecordStore";
import GenericRepository from "./GenericRepository";
import IRecordStoreRepository from "./IRecordStoreRepository";

export default class RecordStoreRepository extends GenericRepository<IRecordStore> implements IRecordStoreRepository {

    constructor(model: Model<IRecordStore>) {
        super(model);
    }

    async updateByYearAndFormat(year: Number, format: String): Promise<IRecordStore[]> {
        await this.model.updateMany(
            {
                $and:
                    [{ yearPublished: { $lte: year } }, { format }],
            },
            { $set: { new: false } });

        return this.model.find({
            $and: [{ yearPublished: { $lte: year } }, { format }],
        });
    }
}