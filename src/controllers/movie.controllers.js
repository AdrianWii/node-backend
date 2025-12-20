import { Movie } from "../models/Movie.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (e) {
    res.status(404).json({ message: `Not found ${e.message}` });
  }
};

export function getMovie(req, res) {
  const id = req.params.id;
  // find movie in database

  if (id === 0) {
    res.status(404).json({ message: "movie not found" });
  }

  res.json({
    id: 5,
    title: "avatar",
    description: "",
    year: "2021",
    director: "James Cameron",
    likes: 200,
  });
}

export const createMovie = async (req, res) => {
  const { title, description, year, director } = req.body;

  const movie = await Movie.create({
    title,
    description,
    year,
    director,
  });

  // wstaw newMovie do bazy danych
  console.log(`🎬 [MOVIE CREATED]`);
  res.status(201).json(movie);
};
