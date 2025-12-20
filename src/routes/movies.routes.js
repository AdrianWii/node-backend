import { Router } from "express";
import {
  getMovies,
  getMovie,
  createMovie,
  incrementLikes,
} from "../controllers/movie.controllers.js";

const movieRoute = Router();

movieRoute.get("/api/movie", getMovies);

// GET /api/movies → lista {id, title, year, likes}
// GET /api/movies/:id → szczegóły + opis
// POST /api/movies/:id/like → zwiększ likes i zwróć zaktualizowany film
// (opcjonalnie) POST /api/movies/:id/unlike → zmniejsz likes (min 0)

movieRoute.post("/api/movie/:id/like", incrementLikes);
movieRoute.get("/api/movie/:id", getMovie);
movieRoute.post("/api/movie", createMovie);

export default movieRoute;
