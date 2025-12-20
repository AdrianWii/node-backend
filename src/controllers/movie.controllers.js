
export function getMovies(req, res) {

    const movies = [
        { title: "Inception", year: 2010},
        { title: "Interstellar", year: 2014},
        { title: "The Matrix", year: 1999}
    ];


    res.status(200).json(movies);
}