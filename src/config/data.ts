import "reflect-metadata"
import { DataSource } from "typeorm"
import { Dashboard } from "../models/dashboard"
import { Cart } from "../models/cart"

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: "mongodb+srv://arunvenki27391:Kind2all!@cluster0.8ryfsaz.mongodb.net/",
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: [Cart, Dashboard]
})