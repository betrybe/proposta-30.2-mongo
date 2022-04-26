import HttpHelper from "../helpers/HttpHelper";
import IRecordStoreService from "../services/IRecordStoreService";
import IRecordStoreControllerInterface, { Request, Response } from "./IRecordStoreController";

export default class RecordStoreController implements IRecordStoreControllerInterface {

    private service: IRecordStoreService;

    constructor (recordStoreService: IRecordStoreService) {
        this.service = recordStoreService;
    }

    async create(req: Request): Promise<Response> {
        try {
            const { title, artist, format, yearPublished } = req.body;
            const recordStore = await this.service.create({ title, artist, format, yearPublished });
            return HttpHelper.created(recordStore);
        } catch (error) {
            return HttpHelper.error(error);
        }
    }

    async findAll(): Promise<Response> {
        try {
            const recordsStore = await this.service.findAll();
            return HttpHelper.ok(recordsStore);
        } catch (error) {
            return HttpHelper.error(error);
        }
    }

    async findById(req: Request): Promise<Response> {
        try {
            const { id } = req.params;
            const recordStore = await this.service.findById(id);
            return HttpHelper.ok(recordStore);
        } catch (error) {
            return HttpHelper.error(error);
        }
    }

    async updateByYearAndFormat(req: Request): Promise<Response> {
        try {
            const { yearPublished, format } = req.body;
            const recordStore = await this.service.updateByYearAndFormat(yearPublished, format);
            return HttpHelper.ok(recordStore);
        } catch (error) {
            return HttpHelper.error(error);
        }
    }

    async deleteById(req: Request): Promise<Response> {
        try {
            const { id } = req.params;
            await this.service.deleteById(id);
            return HttpHelper.noContent();
        } catch (error) {
            return HttpHelper.error(error);
        }
    }

}