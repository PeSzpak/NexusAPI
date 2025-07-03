import mongoose from "mongoose";
import config from "config";
//Logger
import  Logger  from "../config/logger";
import { loggers } from "winston";

async function connect() {
    const dbUri = config.get<string>("dbUri")

    try {
        await mongoose.connect(dbUri)
        Logger.info("Conectou ao banco de dados!")
    }catch(e) {
        Logger.error("Não foi possível conectar!")
        Logger.error(`Erro:${e}`)
        process.exit(1)
    }
}
export default connect