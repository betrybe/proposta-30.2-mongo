export type Request = {
    body: any;
    params: any;
    query: any;
}

export type Response = {
    statusCode: number;
    body?: any;
}

export default interface IRecordStoreControllerInterface {
    create(req: Request): Promise<Response>;
    findAll(): Promise<Response>;
    findById(req: Request): Promise<Response>;
    updateByYearAndFormat(req: Request): Promise<Response>;
    deleteById(req: Request): Promise<Response>;
}