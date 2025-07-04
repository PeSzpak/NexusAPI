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