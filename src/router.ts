import { Router, Request, Response } from "express";
import { createMovie, findAllMovies, findMovieById, removeMovie } from "./controllers/movieControllers";

// validations
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
  res.status(200).send("API Working!");
});

router.post("/movie", movieCreateValidation(), validate, createMovie);

router.get("/movie/:id", findMovieById);
router.get("/movie", findAllMovies);
router.delete("/movie/:id", removeMovie)

export default router;
