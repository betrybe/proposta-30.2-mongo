const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

export const MONGO_CONFIG = {
    URI: `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:27017/${DB_NAME}?authSource=admin`
}