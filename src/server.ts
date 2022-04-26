import dotenv from 'dotenv';
dotenv.config();
import app from "./app";
import { MONGO_CONFIG } from "./config/mongo";
import MongoConnection from "./models/MongoConnection";

const PORT = process.env.SERVER_PORT || 3000;

MongoConnection.connect(MONGO_CONFIG.URI)
.then(() => {
    app.listen(PORT, () => console.log(`running at http://localhost:${PORT}`));
}).catch(error => {
    console.log(error);
});

