import CustomError from "./CustomError";

export default class NotFoundError extends CustomError {
    constructor (message: string) {
        super(404, message);
    }
}