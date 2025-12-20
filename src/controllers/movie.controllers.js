export function getMovies(req, res) {

    const movies = [
        { title: "Inception", year: 2010},
        { title: "Interstellar", year: 2014},
        { title: "The Matrix", year: 1999}
    ];


    res.status(200).json(movies);
}


export function getMovie(req, res) {
    const id = req.params.id;
    // find movie in database

    if(id === 0) {
        res.status(404).json({message: "movie not found"})
    }

    res.json({
        id: 5,
        title: "avatar",
        description: "",
        year: "2021",
        director: "James Cameron",
        likes: 200
    })

}

export function createMovie(req, res) {
    const newMovie = req.body;
    // wstaw newMovie do bazy danych
    console.log(
        `🎬 [MOVIE CREATED] ${newMovie.title}`, 
        newMovie
    )
    res.status(201).json(newMovie);
}