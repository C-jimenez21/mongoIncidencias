import dotenv from "dotenv";
import {MongoClient} from "mongodb"

dotenv.config("../src/");

console.log(process.env.ATLAS_USER);
export async function con(){
    try {
        const URI = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.qbqr4gp.mongodb.net/${process.env.ATLAS_DB}`;
        console.log(URI);
        console.log("mongodb+srv://C-jimenez21:<password>@cluster0.qbqr4gp.mongodb.net/");
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        const client = await MongoClient.connect(URI, options);
        return client.db()
    } catch (error) {
        return{status: 500, message: error};
    }
}
