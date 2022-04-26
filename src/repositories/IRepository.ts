export default interface IRepository<T> {
    create(entity: T): Promise<T>;
    update(id: String, entity: T): Promise<T | null>;
    findAll(): Promise<T[]>;
    findById(id: String): Promise<T | null>;
    deleteById(id: String): Promise<void>;
}   