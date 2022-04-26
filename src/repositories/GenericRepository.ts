import { Model } from "mongoose";
import IRepository from "./IRepository";

export default abstract class GenericRepository <T> implements IRepository<T> {

    protected model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    async create(entity: T): Promise<T> {
        return await this.model.create(entity);
    }

    async findAll(): Promise<T[]> {
        return await this.model.find();
    }

    async findById(id: String): Promise<T | null> {
        return await this.model.findById({ _id: id });
    }

    async update(id: String, entity: T): Promise<T | null> {
        return await this.model.findOneAndUpdate({ _id: id }, entity, { returnOriginal: false });
    }

    async deleteById(id: String): Promise<void> {
        await this.model.deleteOne({ _id: id });
    }
    
}