import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response): Promise<void> {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        res.status(201).json(movie);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function findMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if (!movie) {
            res.status(404).json({ error: "O filme não existe" });
        }

        res.status(200).json(movie);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        res.status(500).json({ message: "O filme não existe" });
    }
}

export async function findAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find();
        res.status(200).json(movies);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        res.status(500).json({ message: "Não foi encontrado filme algum" });
    }
}

export async function removeMovie(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);
        if (!movie) {
            res.status(404).json({ error: "O filme não existe" });
        }
        await movie?.deleteOne()
        res.status(200).json({msg: "O filme foi removido com sucesso"})

    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        res.status(500).json({ message: "Não foi encontrado filme algum, Tente novamente mais tarde" });
    }
}
