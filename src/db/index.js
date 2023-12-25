import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connetDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Connected DB HOST: ${connectionInstance}`)
        console.log(`\n Connected DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error(error)
    }
}

export default connetDB