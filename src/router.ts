import { Router,Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";
const router = Router()

export default router.get("/test", (req:Request, res:Response) => {
    res.status(200).send("API Working!");
}).post("/movie", async (req: Request, res: Response, next) => {
    try {
        await createMovie(req, res);
    } catch (error) {
        next(error);
    }
})