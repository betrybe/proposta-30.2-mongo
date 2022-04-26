import { Response } from "../controllers/IRecordStoreController";
import CustomError from "../errors/CustomError";

export default class HttpHelper {

    static ok(body?: unknown): Response {
        return {
            statusCode: 200,
            body: body
        }
    }

    static created(body: unknown): Response {
        return {
            statusCode: 201,
            body: body
        }
    }

    static noContent(): Response {
        return {
            statusCode: 204
        }
    }

    static error(error: unknown) {
        if(error instanceof CustomError) {
            return { statusCode: error.statusCode, body: { message: error.message } };
        }
        return {
            statusCode: 500,
            body: { message: 'internal error' }
        }
    }

}